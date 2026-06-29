$(document).ready(function() {
    var currentPage = 1;
    var pageSize = 10;
    var totalCount = 0;

    // 初始化加载第一页
    loadNewsList(currentPage);

    // 绑定分页按钮点击事件（事件委托）
    $(document).on('click', '.pagination-btn', function() {
        if ($(this).hasClass('disabled')) return;
        var page = $(this).data('page');
        loadNewsList(page);
    });

    function loadNewsList(page) {
        if (window.API && window.API.getArticleList) {
            var params = {
                page_no: page,
                page_size: pageSize
            };

            window.API.getArticleList(params).then(function(res) {
                console.log('接口完整返回数据:', res);
                
                let lists = [];
                totalCount = 0; // 每次请求前重置总数
                
                // 兼容不同的接口返回格式
                if (res.data && res.data.lists) {
                    lists = res.data.lists;
                    // 尝试多种可能的总数字段名
                    totalCount = res.data.count || res.data.total || res.data.total_count || lists.length;
                } else if (res.data && Array.isArray(res.data)) {
                    lists = res.data;
                    totalCount = lists.length; // 如果没有count字段，至少用当前页条数
                } else if (res.lists) {
                    lists = res.lists;
                    totalCount = res.count || res.total || res.total_count || lists.length;
                } else if (Array.isArray(res)) {
                    lists = res;
                    totalCount = lists.length;
                }

                console.log('解析后的列表:', lists);
                console.log('解析后的总数:', totalCount);

                currentPage = page; // 更新当前页码
                renderNews(lists);
                renderPagination(totalCount, currentPage, pageSize);
                
                // 滚动到顶部
                $('html, body').animate({
                    scrollTop: $('#news-container').offset().top - 100
                }, 300);

            }).catch(function(err) {
                console.error("获取新闻列表失败:", err);
                $('#news-container').html('<p style="text-align: center; color: #888;">获取数据失败，请稍后再试。</p>');
            });
        } else {
            console.error("API 对象未定义，请检查 api.js 是否正确引入。");
        }
    }

    // 渲染新闻列表
    function renderNews(lists) {
        var container = $('#news-container');
        container.empty();

        if (!lists || lists.length === 0) {
            container.append('<p style="text-align: center; color: #888;">暂无动态</p>');
            return;
        }

        lists.forEach(function(item) {
            // 处理图片
            var imageHtml = item.image ? 
                `<div style="margin-top: 15px;">
                    <img src="${item.image}" alt="${item.title}" style="max-width: 100%; border-radius: 8px; max-height: 300px; object-fit: cover;">
                 </div>` : '';
            
            // 处理内容描述（优先显示摘要，否则显示内容）
            var descContent = item.abstract || item.content || item.desc || '';

            // 作者信息
            var authorHtml = item.author ? `&nbsp;&nbsp; 作者：${item.author}` : '';

            var html = `
                <article class="news-item">
                    <h3>${item.title || '无标题'}</h3>
                    <p style="font-size: 0.9rem; color: #888;">
                        发布时间：${item.create_time || item.post_time || ''} ${authorHtml}
                    </p>
                    <div class="description">
                        ${descContent}
                    </div>
                    ${imageHtml}
                    <div style="margin-top: 15px;">
                        <button class="btn btn-primary" data-href="/look-news?id=${item.id}" onclick="window.location.href='/look-news?id=${item.id}'">阅读</button>
                    </div>
                </article>
            `;
            container.append(html);
        });
    }

    // 渲染分页控件
    function renderPagination(total, current, size) {
        console.log('renderPagination 被调用 - 总数:', total, '当前页:', current, '每页:', size);
        
        var totalPages = Math.ceil(total / size);
        console.log('总页数:', totalPages);

        // 如果数据量很小，但为了调试，先显示一个调试信息
        var paginationContainer = $('.news-pagination');
        
        // 如果分页容器不存在，则在新闻列表下面创建一个
        if (paginationContainer.length === 0) {
            paginationContainer = $('<div class="news-pagination" style="text-align: center; margin-top: 30px; display: flex; justify-content: center; gap: 10px; align-items: center;"></div>');
            $('#news-container').after(paginationContainer);
        }
        
        paginationContainer.empty();

        // 先添加一个调试信息，让我们知道函数被执行了
        paginationContainer.append(`<span style="margin-right: 20px; font-size: 14px; color: #666;">共 ${total} 条，第 ${current}/${totalPages} 页</span>`);

        // 只有总页数大于1时才显示完整的分页按钮
        if (totalPages > 1) {
            // 上一页按钮
            var prevDisabled = current === 1 ? 'disabled' : '';
            var prevStyle = current === 1 ? 'cursor: not-allowed; opacity: 0.5;' : 'cursor: pointer;';
            paginationContainer.append(
                `<button class="btn btn-outline-primary pagination-btn ${prevDisabled}" data-page="${current - 1}" style="${prevStyle} padding: 5px 15px; border-radius: 4px;">上一页</button>`
            );

            // 页码按钮（简单逻辑：显示所有页码，可以根据需要调整显示逻辑）
            for (var i = 1; i <= totalPages; i++) {
                var activeClass = current === i ? 'btn-primary' : 'btn-outline-primary';
                var disabledAttr = current === i ? 'disabled' : '';
                var styleAttr = current === i ? 'cursor: default;' : 'cursor: pointer;';
                paginationContainer.append(
                    `<button class="btn ${activeClass} pagination-btn ${disabledAttr}" data-page="${i}" style="${styleAttr} padding: 5px 15px; border-radius: 4px;">${i}</button>`
                );
            }

            // 下一页按钮
            var nextDisabled = current === totalPages ? 'disabled' : '';
            var nextStyle = current === totalPages ? 'cursor: not-allowed; opacity: 0.5;' : 'cursor: pointer;';
            paginationContainer.append(
                `<button class="btn btn-outline-primary pagination-btn ${nextDisabled}" data-page="${current + 1}" style="${nextStyle} padding: 5px 15px; border-radius: 4px;">下一页</button>`
            );
        }
    }
});
