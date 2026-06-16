// 导航组件
class MyNav extends HTMLElement {
  connectedCallback() {
    const currentPath = window.location.pathname;
    
    this.innerHTML = `
      <nav>
        <ul id="menu_top_menu" class="">
          <li class="${currentPath === '/about-us' ? ' active current' : ''}"><a href="/about-us" class="about_us-title-class" title="About Us" aria-label="About Us" id="menu_0" aria-labelledby="menu_0"> 关于我们</a></li>
          <li class="${currentPath === '/services/' ? 'active current' : ''}"><a href="/services" class="services-title-class" title="Services" aria-label="Services" id="menu_1" aria-labelledby="menu_1">货代服务</a></li>
          <li class="${currentPath === '/news' ? 'active current' : ''}"><a href="/news" class="network-title-class" title="Network" aria-label="Network" id="menu_2" aria-labelledby="menu_2">全球网点</a></li>
          <li class="${currentPath === '/vertical-markets' ? 'active current' : ''}"><a href="/vertical-markets" class="vertical_market-title-class" title="Vertical Markets" aria-label="Vertical Markets" id="menu_3" aria-labelledby="menu_3">产品服务</a></li>
          <li class="${currentPath === '/sustainability' ? 'active current' : ''}"><a href="/sustainability" class="sustainability-title-class" title="Sustainability" aria-label="Sustainability" id="menu_10" aria-labelledby="menu_10"> 公司动态</a></li>
          <li class="${currentPath === '/contact-us' ? 'active current' : ''}"><a href="/contact-us" class="contact_us-title-class" title="Contact Us" aria-label="Contact Us" id="menu_11" aria-labelledby="menu_11"> 联系我们</a></li>
        </ul>
      </nav>
    ` 
  }
  
  isDropdown(currentPath, paths) {
    return paths.some(path => currentPath === path);
  }
}

customElements.define('my-nav', MyNav)
