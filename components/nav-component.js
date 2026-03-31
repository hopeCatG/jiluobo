// 导航组件
class MyNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav>
        <ul id="menu_top_menu" class="">
          <li class="active current"><a href="/about-us" class="about_us-title-class" title="About Us" aria-label="About Us" id="menu_0" aria-labelledby="menu_0"> 关于我们</a></li>
          <li><a href="/services" class="services-title-class" title="Services" aria-label="Services" id="menu_1" aria-labelledby="menu_1">服务</a></li>
          <li><a href="/network" class="network-title-class" title="Network" aria-label="Network" id="menu_2" aria-labelledby="menu_2">网络</a></li>
          <li><a href="/vertical-markets" class="vertical_market-title-class" title="Vertical Markets" aria-label="Vertical Markets" id="menu_3" aria-labelledby="menu_3"> Vertical Markets</a></li>
          <li class="dropdown"><a href="/governance" class="governance-title-class" title="Governance" aria-label="Governance" id="menu_4" aria-labelledby="menu_4"> Governance</a>
            <ul class="dropdown-menu">
              <li><a href="/anti-corruption-policy" class="governance-anti_corruption_policy-title-class" title="Anti-corruption Policy" aria-label="Anti-corruption Policy" id="menu_5" aria-labelledby="menu_5"> Anti-corruption Policy</a></li>
              <li><a href="/human-rights-policy" class="governance-human_rights_policy-title-class" title="Human Rights Policy" aria-label="Human Rights Policy" id="menu_6" aria-labelledby="menu_6"> Human Rights Policy</a></li>
              <li><a href="/integrated-policy-environment-safety-health" class="governance-security_policy-title-class" title="Integrated Policy, Environment, Safety, Health" aria-label="Integrated Policy, Environment, Safety, Health" id="menu_7" aria-labelledby="menu_7"> Integrated Policy, Environment, Safety, Health</a></li>
              <li><a href="/social-responsibility-policy" class="governance-social_responsibility-title-class" title="Social Responsibility Policy" aria-label="Social Responsibility Policy" id="menu_8" aria-labelledby="menu_8"> Social Responsibility Policy</a></li>
              <li><a href="/code-of-ethics" class="governance-ethical_code-title-class" title="Code of Ethics" aria-label="Code of Ethics" id="menu_9" aria-labelledby="menu_9"> Code of Ethics</a></li>
            </ul>
          </li>
          <li><a href="/sustainability" class="sustainability-title-class" title="Sustainability" aria-label="Sustainability" id="menu_10" aria-labelledby="menu_10"> Sustainability</a></li>
          <li><a href="/contact-us" class="contact_us-title-class" title="Contact Us" aria-label="Contact Us" id="menu_11" aria-labelledby="menu_11"> Contact Us</a></li>
          <li class="d-lg-none"><a href="https://wt.delcoronascardigli.com/login.xhtml" class="btn btn-primary btn-menu" title="DCS Tracking" aria-label="DCS Tracking" id="menu_12" aria-labelledby="menu_12"> DCS Tracking</a></li>
        </ul>
      </nav>
    `
  }
}

customElements.define('my-nav', MyNav)
