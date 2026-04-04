// 组件入口文件，导出所有组件

// 引入导航组件
import './nav-component.js'

// 引入头部组件
import './header.js'

// 引入页脚组件
import './footer.js'

// 引入样式
import './styles.js'

import './quality.js'

import './contact-us.js'

import './booking-service.js'


// 当前发布的版本号（每次更新必须改）
const CURRENT_VERSION = "1.0.03";

// 从 localStorage 读取上一次保存的版本号
const storedVersion = localStorage.getItem("site_version");

if (storedVersion !== CURRENT_VERSION) {
    // 更新版本，先清除缓存
    localStorage.setItem("site_version", CURRENT_VERSION);

    // 强制刷新缓存，使用 location.reload(true) 已废弃，改用下面方式
    // 在 URL 后加 ?v=版本号 强制浏览器重新加载资源
    const url = window.location.href.split("?")[0];
    window.location.href = url + "?v=" + CURRENT_VERSION;
}
