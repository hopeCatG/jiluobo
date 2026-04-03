// 导航组件
class MyNav extends HTMLElement {
  connectedCallback() {
    const currentPath = window.location.pathname;
    
    this.innerHTML = `
      <nav>
        <ul id="menu_top_menu" class="">
          <li class="${currentPath === '/about-us' ? ' active current' : ''}"><a href="/about-us" class="about_us-title-class" title="About Us" aria-label="About Us" id="menu_0" aria-labelledby="menu_0"> 关于我们</a></li>
          <li class="${currentPath === '/services/' ? 'active current' : ''}"><a href="/services" class="services-title-class" title="Services" aria-label="Services" id="menu_1" aria-labelledby="menu_1">服务介绍</a></li>
          <li class="${currentPath === '/news' ? 'active current' : ''}"><a href="/news" class="network-title-class" title="Network" aria-label="Network" id="menu_2" aria-labelledby="menu_2">新闻中心</a></li>
          <li class="${currentPath === '/vertical-markets' ? 'active current' : ''}"><a href="/vertical-markets" class="vertical_market-title-class" title="Vertical Markets" aria-label="Vertical Markets" id="menu_3" aria-labelledby="menu_3">垂直市场</a></li>
          <li class="dropdown ${this.isDropdown(currentPath, ['/governance', '/anti-corruption-policy', '/human-rights-policy', '/integrated-policy-environment-safety-health', '/social-responsibility-policy', '/code-of-ethics']) ? ' current' : ''}"><a href="/governance" class="governance-title-class" title="Governance" aria-label="Governance" id="menu_4" aria-labelledby="menu_4"> 企业管理</a>
            <ul class="dropdown-menu">
              <li class="${currentPath === '/anti-corruption-policy' ? 'active current' : ''}"><a href="/anti-corruption-policy" class="governance-anti_corruption_policy-title-class" title="Anti-corruption Policy" aria-label="Anti-corruption Policy" id="menu_5" aria-labelledby="menu_5"> 反腐败政策</a></li>
              <li class="${currentPath === '/integrated-policy-environment-safety-health' ? 'active current' : ''}"><a href="/integrated-policy-environment-safety-health" class="governance-security_policy-title-class" title="Integrated Policy, Environment, Safety, Health" aria-label="Integrated Policy, Environment, Safety, Health" id="menu_7" aria-labelledby="menu_7"> 综合政策、环境、安全、健康</a></li>
              <li class="${currentPath === '/social-responsibility-policy' ? 'active current' : ''}"><a href="/social-responsibility-policy" class="governance-social_responsibility-title-class" title="Social Responsibility Policy" aria-label="Social Responsibility Policy" id="menu_8" aria-labelledby="menu_8">社会责任政策</a></li>
              <li class="${currentPath === '/code-of-ethics' ? 'active current' : ''}"><a href="/code-of-ethics" class="governance-ethical_code-title-class" title="Code of Ethics" aria-label="Code of Ethics" id="menu_9" aria-labelledby="menu_9"> 道德准则</a></li>
            </ul>
          </li>
          <li class="${currentPath === '/sustainability' ? 'active current' : ''}"><a href="/sustainability" class="sustainability-title-class" title="Sustainability" aria-label="Sustainability" id="menu_10" aria-labelledby="menu_10"> 企业文化</a></li>
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
