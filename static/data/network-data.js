$(function () {
    initMapData();
});
// 大洲数据
let continentsData = [

];


const offices = [
    {
        id: 1,
        name: "上海西雅国际食品和饮料展览会6",
        city: "上海",
        // address: "269 Haining Road<br>Shanghai 200080, China Direct line: 86 - 21 - 65212616",
        // phone: "+86 21 6522 2266",
        // phoneLink: "+862165222266",
        image: "static/images/dcs-sede-shanghai-39.jpg",
        // slug: "shanghai",
        country: "CN",
        continent: "AS",
        latLng: { type: "Point", coordinates: [121.48030856831, 31.247523564039] },
        lng: "105.0000000000",
        lat: "35.0000000000"
    },
];
// -------------------- 渲染函数 --------------------

// 渲染导航 Tabs
function renderNavTabs() {
    var html = '';
    continentsData.forEach(function (continent) {
        html += '<li class="nav-item">' +
            '<a class="nav-link" id="' + continent.code + '-tab" data-bs-toggle="tab" data-scroll="tabs" ' +
            'href="#' + continent.code + '-tabcontent" data-filter="continent" data-value="' + continent.code + '" role="tab" ' +
            'aria-controls="' + continent.code + '-tabcontent" aria-selected="false">' +
            continent.name +
            '</a></li>';
    });
    $('#continent-tabs').html(html);
}

// 渲染左侧手风琴菜单
function renderAccordion() {
    var html = '';
    continentsData.forEach(function (continent) {
        var countries = continent.countriesData || [];
        html += '<div class="ac-item">' +
            '<h5 class="ac-title" data-filter="continent" data-value="' + continent.code + '">' + continent.name + '</h5>' +
            '<div class="ac-content">' +
            '<div class="row">';

        countries.forEach(function (country) {
            html += '<div class="col-12 country-row" data-filter="country" data-value="' + country.code + '">' +
                '<img class="flag-img me-2" alt="' + country.name_en + '" src="' + country.flag + '"> ' +
                country.name +
                '<small class="number-office"><span class="offices">' + country.offices + ' </span></small>' +
                '</div>';
        });

        html += '</div></div></div>';
    });
    $('#continent-accordion-left').html(html);
}

// 渲染 tab 内容
function renderTabContent() {
    var html = '';
    continentsData.forEach(function (continent) {
        var countries = continent.countriesData || [];
        html += '<div class="tab-pane accordion-item continent-wrapper" id="' + continent.code + '-tabcontent" role="tabpanel" ' +
            'aria-labelledby="' + continent.code + '-tab" tabindex="-1" data-continent="' + continent.code + '">' +
            '<h3 class="h2 accordion-header d-md-none" id="' + continent.code + '-header">' +
            '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" ' +
            'data-bs-target="#' + continent.code + '-collapse" aria-expanded="false" aria-controls="' + continent.code + '-collapse">' +
            continent.name +
            '</button></h3>' +
            '<div id="' + continent.code + '-collapse" class="accordion-collapse collapse d-lg-block" aria-labelledby="' + continent.code + '-header">' +
            '<div class="accordion-body">' +
            '<div class="container-lg">';

        countries.forEach(function (country) {
            var countryOffices = offices.filter(function (office) {
                return office.country === country.code;
            });

            html += '<div class="row country-wrapper">' +
                '<div class="col-12">' +
                '<h4 class="country-name"><img class="flag-img me-2" alt="' + country.name_en + '" ' +
                'src="' + country.flag + '"> ' +
                country.name +
                '<span class="number-office"> 新闻数 <span class="offices">' + country.offices + ' </span></span>' +
                '</h4></div>';

            countryOffices.forEach(function (office) {
                var officeDataAttr = JSON.stringify({
                    id: office.id,
                    latLng: office.latLng,
                    name: office.name,
                    continent: office.continent,
                    country: office.country,
                    countryName: country.name_en,
                    city: office.city,
                    slug: office.slug,
                    lng: office.lng,
                    lat: office.lat
                }).replace(/"/g, '&quot;');

                html += '<div class="col-12 col-lg-6 d-flex flex-column">' +
                    '<div class="card office-card flex-fill">' +
                    '<div id="office-card-' + office.id + '" class="card-body office-card-body office-on-map" ' +
                    'data-office="' + officeDataAttr + '">' +
                    '<div class="office-card-image-wrapper" style="background-image: url(' + office.image + ')"></div>' +
                    '<div class="office-card-info">' +
                    '<div class="office-city">' + office.city + '</div>' +
                    '<div class="office-name"><b>' + office.name + '</b></div>' +
                    '<div class="office-contact">' +
                    '<img src="static/picture/news-admin.svg" alt="">' +
                    '<span >' + '发布者：上海吉罗卜供应链' + '</span></div>' +
                    '<div class="office-address">' +
                    '<img src="static/picture/news-time.svg" alt="">' +
                    '<span>' + '时间：2026-04-03 10:00:00' + '</span></div>' +
                    '<div class="office-btn"><a class="btn btn-primary" href="/look-news?id=' + office.id + '">阅读</a></div>' +
                    '</div></div></div></div>';
            });

            html += '</div>';
        });

        html += '</div></div></div></div>';
    });
    $('#continent-accordion').html(html);
}

// 渲染地图覆盖层
function renderMapOverlay() {
    var html = '';
    offices.forEach(function (office) {
        html += '<div class="col-12" data-show="no-country" data-value="' + office.country + '" data-office-id="' + office.id + '">' +
            '<div id="office-card-overlay-' + office.id + '" class="office-on-map">' +
            '<div class="office-card-image-box" style="background-image: url(' + office.image + ')"></div>' +
            '<div class="office-city">' + office.city + '</div>' +
            '<div class="office-card-info mv-10">' +
            '<div class="office-name">' + office.name + '</div>' +
            '<div class="office-contact">' +
            '<img src="static/picture/news-admin.svg" alt="">' +
            '<span >' + '发布者：上海吉罗卜供应链' + '</span></div>' +
            '<div class="office-address">' +
            '<img src="static/picture/news-time.svg" alt="">' +
            '<span>' + '时间：2026-04-03 10:00:00' + '</span></div>' +
            '<div class="office-btn"><button class="btn btn-primary btn-office" data-office-id="' + office.id + '" ' +
            'data-href="/look-news?id=' + office.id + '">阅读</button></div>' +
            '</div></div></div>';
    });
    $('#map-offices').html(html);
}

// -------------------- 初始化 --------------------
async function initMapData() {
    try {
        const { data } = await API.getContinentsData();
        continentsData = data;

        renderNavTabs();
        renderAccordion();
        renderTabContent();
        renderMapOverlay();

        await loadScript('static/js/frontend-globe.js');
        await loadScript('static/js/oimmei.js');

        // -------------------- 事件委托 --------------------
        $(document).on('click', '.ac-title', function (e) {
            e.stopPropagation(); // 阻止事件冒泡，安全

            const $acItem = $(this).parent('.ac-item');
            const $currentContent = $acItem.children('.ac-content');

            // 隐藏其他 ac-content 并移除 ac-active 类
            $('.ac-item').not($acItem).children('.ac-content').hide().end().removeClass('ac-active');

            // 切换当前内容显示/隐藏
            $currentContent.toggle();

            // 根据显示状态切换 ac-active 类
            if ($currentContent.is(':visible')) {
                $acItem.addClass('ac-active');
            } else {
                $acItem.removeClass('ac-active');
            }
        });

    } catch (err) {
        console.error(err);
    }
}

// 动态加载 JS 文件
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`加载脚本失败: ${src}`));
        document.body.appendChild(script);
    });
}

// 首先显示的位置
var centerOffice = offices[0];

