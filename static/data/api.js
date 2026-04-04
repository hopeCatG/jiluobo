// api.js

const BASE_URL = 'https://globaljlbadmin.skyblue.chat/api';

window.API = {
    /**
     * 通用请求
     */
    request(url, options = {}) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: BASE_URL + url,
                method: options.method || 'GET',
                data: options.data || {},
                contentType: 'application/json',
                success(res) {
                    if (res.code !== 0 && res.code !== 1) {
                        console.warn('接口异常:', res.msg);
                    }
                    resolve(res);
                },
                error(err, textStatus, errorThrown) {
                    console.warn('接口异常:', err);
                    reject(err);
                }
            });
        });
    },

    // 自定义弹窗样式
    showToast(message, type = 'error') {
        // 移除已存在的 toast
        $('.custom-toast').remove();

        const iconClass = type === 'success' ? 'icon-check-circle' : 'icon-exclamation-circle';
        const bgColor = type === 'success' ? '#28a745' : '#dc3545';

        const toastHtml = `
      <div class="custom-toast" style="
        position: fixed;
        top: 20px;
        right: 20px;
        min-width: 300px;
        max-width: 500px;
        padding: 15px 20px;
        background: ${bgColor};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9999;
        animation: slideInRight 0.3s ease-out;
        display: flex;
        align-items: center;
        gap: 12px;
      ">
        <i class="icon ${iconClass}" style="font-size: 20px;"></i>
        <span style="flex: 1; font-size: 14px; line-height: 1.5;">${message}</span>
        <button onclick="$(this).closest('.custom-toast').remove()" style="
          background: none;
          border: none;
          color: white;
          font-size: 18px;
          cursor: pointer;
          padding: 0;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        ">&times;</button>
      </div>
      <style>
        @keyframes slideInRight {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideOutRight {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(400px);
            opacity: 0;
          }
        }
      </style>
    `;

        $('body').append(toastHtml);

        // 5 秒后自动消失
        setTimeout(function () {
            $('.custom-toast').css('animation', 'slideOutRight 0.3s ease-out');
            setTimeout(function () {
                $('.custom-toast').remove();
            }, 300);
        }, 5000);
    },


    /**
     * 文章列表
     */
    getArticleList(params) {
        return this.request(`/article/lists`, {
            data: params
        });
    },

    /**
     * 文章详情
     */
    getArticleDetail(id) {
        return this.request(`/pc/articleDetail`, {
            data: { id }
        });
    },

    /**
     * 大洲列表
     */
    getContinentsData() {
        return this.request(`/article/continentsData`);
    },
    /**
     * 提交咨询
     */
    submitConsult(params) {
        return this.request(`/consult/add`, {
            data: params,
            method: 'POST'
        });
    }
};