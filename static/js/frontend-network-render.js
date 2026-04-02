// 网络页面动态渲染脚本
(function($) {
    'use strict';

    // 渲染大陆和国家列表
    function renderContinents() {
        var $container = $('#continents-accordion');
        var html = '';

        continentsData.forEach(function(continent) {
            html += '<div class="ac-item">';
            html += '<h5 class="ac-title" data-filter="continent" data-value="' + continent.code + '">' + continent.name + '</h5>';
            html += '<div class="ac-content"><div class="row">';
            
            continent.countries.forEach(function(country) {
                html += '<div class="col-12 country-row" data-filter="country" data-value="' + country.code + '">';
                html += '<img class="flag-img me-2" alt="' + country.name + '" src="static/picture/' + country.code.toLowerCase() + '.svg">';
                html += country.name;
                html += '<small class="number-office"><span class="offices">' + country.offices + ' </span></small>';
                html += '</div>';
            });

            html += '</div></div></div>';
        });

        // 添加非洲特殊项
        html += '<div class="pv-10">';
        html += '<h5 class="ac-title" data-filter="continent" data-value="AF" data-bound="[[-17.5,37.2],[51.5,-35]]" data-bs-toggle="tab" data-scroll="tabs" href="#AF-tabcontent">非洲</h5>';
        html += '</div>';

        $container.html(html);
    }

    // 渲染办公室卡片
    function renderOffices() {
        var $container = $('#map-offices');
        var html = '';

        officesData.forEach(function(office) {
            if (office.layout === 'card') {
                // 卡片布局（用于澳大利亚和印度办公室）
                html += '<div class="col-12 col-lg-6 d-flex flex-column">';
                html += '<div class="card office-card flex-fill">';
                html += '<div id="office-card-' + office.id + '" class="card-body office-card-body office-on-map">';
                html += '<div class="office-card-image-wrapper" style="background-image: url(' + office.image + ')"></div>';
                html += '<div class="office-card-info">';
                html += '<div class="office-city">' + office.city + '</div>';
                html += '<div class="office-name"><b>' + office.name + '</b></div>';
                
                if (office.phone) {
                    html += '<div class="office-contact"><img src="static/picture/phone_icon.svg" alt="' + office.phone + ': ' + office.phone.replace(/\s/g, '') + '">';
                    html += '<a href="' + office.phoneHref + '">' + office.phone + '</a></div>';
                } else {
                    html += '<div class="office-contact"></div>';
                }
                
                html += '<div class="office-address"><img src="static/picture/marker_icon.svg" alt="' + office.address.replace(/<br>/g, ' ') + '">';
                html += '<span>' + office.address + '</span></div>';
                html += '<div class="office-btn"><a class="btn btn-primary" href="/offices/' + office.slug + '">Show</a></div>';
                html += '</div></div></div></div>';
            } else {
                // 简单布局（用于意大利办公室）
                html += '<div class="col-12" data-show="no-country" data-value="' + office.country + '" data-office-id="' + office.id + '">';
                html += '<div id="office-card-' + office.id + '" class=" office-on-map">';
                html += '<div class="office-card-image-box" style="background-image: url(' + office.image + ')"></div>';
                html += '<div class="office-city">' + office.city + '</div>';
                html += '<div class="office-card-info mv-10">';
                html += '<div class="office-name">' + office.name + '</div>';
                
                if (office.phone) {
                    html += '<div class="office-contact"><img src="static/picture/phone_icon.svg" alt="' + office.phone + ': ' + office.phone.replace(/\s/g, '') + '">';
                    html += '<a href="' + office.phoneHref + '">' + office.phone + '</a></div>';
                }
                
                html += '<div class="office-address"><img src="static/picture/marker_icon.svg" alt="' + office.address.replace(/<br>/g, ' ') + '">';
                html += '<span>' + office.address + '</span></div>';
                html += '<div class="office-btn"><button class="btn btn-primary btn-office" data-office-id="' + office.id + '" data-href="/offices/' + office.slug + '">Show</button></div>';
                html += '</div></div></div>';
            }
        });

        $container.html(html);
    }

    // 渲染非洲内容
    function renderAfricaContent() {
        // 查找是否已存在非洲标签页
        var $existingAfrica = $('#AF-tabcontent');
        if ($existingAfrica.length === 0) {
            // 创建非洲标签页内容并添加到 DOM
            var africaHtml = '<div class="tab-pane accordion-item continent-wrapper" id="AF-tabcontent" role="tabpanel" aria-labelledby="AF-tab" tabindex="-1" data-continent="AF">';
            africaHtml += '<h3 class="h2 accordion-header d-md-none" id="AF-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#AF-collapse" aria-expanded="false" aria-controls="AF-collapse">Africa</button></h3>';
            africaHtml += '<div id="AF-collapse" class="accordion-collapse collapse d-lg-block" aria-labelledby="AF-header">';
            africaHtml += '<div class="accordion-body"><div class="container-lg"><div class="row">';
            africaHtml += '<div class="col-md col-sm-12"><h3 class="h2">Africa Import Export</h3>';
            africaHtml += '<p>Our presence in Africa is extremely strong, thanks to long-term collaborations with specialized agents in each country. Despite the absence of physical offices, we manage to operate effectively throughout the continent. Our local partners serve as a direct link to the various African realities, ensuring a reliable and solid presence.<br>Each agent we work with has a deep understanding of their territory, providing us with valuable insights into the local market. This knowledge allows us to be flexible and adaptable to the specific needs of each country, offering tailored solutions that meet local requirements.<br>Our close collaboration with local agents ensures seamless communication and a direct understanding of market dynamics. This approach allows us to maintain a strong and reliable presence in Africa, effectively responding to the diverse needs of our clients and partners.<br></p></div>';
            africaHtml += '<div class="col-md col-sm-12"><img src="static/picture/af.jpg" alt="Africa" class="img-fluid"></div>';
            africaHtml += '</div></div></div></div></div>';
            
            // 找到地图容器并插入非洲内容
            $('.network-map-overlay.office').after(africaHtml);
        }
    }

    // 初始化
    $(document).ready(function() {
        console.log('Initializing network page rendering...');
        
        // 渲染各个模块
        renderContinents();
        renderOffices();
        renderAfricaContent();

        console.log('Network page rendering completed!');
    });

})(jQuery);
