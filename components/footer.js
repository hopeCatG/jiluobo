// Footer 组件
class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer id="footer">
        <div class="footer-content">
          <div class="container">
            <div class="row">
              <div class="col-lg-5">
                <div class="widget">
                  <div
                    style="background-image: url('static/images/world-map-dark.png'); background-position: 50% 20px; background-repeat: no-repeat">
                    <div><img src="static/picture/logo-dcs-white.png"
                        style="width: 143px; height: auto; margin-bottom: 20px;"
                        alt="Del Corona & Scardigli"></div>
                    <p class="company-title">© 2025 吉罗卜 All rights reserved.</p>
                    <p class="subtitle"><a href="https://beian.miit.gov.cn/" rel="nofollow" target="_blank">沪ICP备2025144635号</a></p>
                  </div>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="row">
                  <div class="col-md-4 col-footer">
                    <div class="widget">
                      <div class="widget-title">萝卜吉</div>
                      <ul class="list">
                        <li><a href="/about-us" class="about_us-title-class" title="About Us"
                            aria-label="About Us" id="menu_13" aria-labelledby="menu_13">关于我们</a></li>
                        <li><a href="/vertical-markets" class="vertical_market-title-class"
                            title="Vertical Markets" aria-label="Vertical Markets" id="menu_14"
                            aria-labelledby="menu_14">垂直市场</a></li>
                        <li><a href="/governance" class="governance-title-class" title="Governance"
                            aria-label="Governance" id="menu_15" aria-labelledby="menu_15">
                            治理</a></li>
                        <li><a href="/sustainability" class="sustainability-title-class"
                            title="Sustainability" aria-label="Sustainability" id="menu_16"
                            aria-labelledby="menu_16"> 可持续性</a></li>
                        <li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-4 col-footer">
                    <div class="widget">
                      <div class="widget-title">服务</div>
                      <ul class="list">
                        <li><a href="/services/ocean-freight" class="services-by_ocean-title-class"
                            title="Ocean Freight" aria-label="Ocean Freight" id="menu_18"
                            aria-labelledby="menu_18">海运</a></li>
                        <li><a href="/services/land-freight" class="services-by_land-title-class"
                            title="Land Freight" aria-label="Land Freight" id="menu_19"
                            aria-labelledby="menu_19"> 陆路货运</a></li>
                        <li><a href="/services/air-freight" class="services-by_air-title-class"
                            title="Air Freight" aria-label="Air Freight" id="menu_20"
                            aria-labelledby="menu_20">空运</a></li>
                        <li><a href="/services/distribution-logistics"
                            class="services-distribution_logistics-title-class"
                            title="Distribution Logistics" aria-label="Distribution Logistics"
                            id="menu_21" aria-labelledby="menu_21">配送物流</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-4 col-footer">
                    <div class="widget">
                      <div class="widget-title">遵守</div>
                      <ul class="list">
                        <li><a href="/code-of-ethics" class="governance-ethical_code-title-class"
                            title="Code of Ethics" aria-label="Code of Ethics" id="menu_22"
                            aria-labelledby="menu_22">道德准则</a></li>
                        <li><a href="/privacy-policy" class="privacy_policy-title-class"
                            title="Privacy Policy" aria-label="Privacy Policy" id="menu_23"
                            aria-labelledby="menu_23">隐私政策</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright-content">
          <div class="container">
            <div class="copyright-text text-center">24小时热线电话 139-8888-8888</div>
          </div>
        </div>
      </footer>
    `
  }
}

customElements.define('my-footer', MyFooter)
