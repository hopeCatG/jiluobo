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
                        style="width: 197px; height: 150px; margin-bottom: 20px;"
                        alt="Del Corona & Scardigli"></div>
                    <p class="company-title">U. DEL CORONA &amp; SCARDIGLI S.r.l.</p>
                    <p class="subtitle">Scali D’Azeglio 32, 57123 Livorno - ITALY</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="row">
                  <div class="col-md-4 col-footer">
                    <div class="widget">
                      <div class="widget-title"> DCS Group</div>
                      <ul class="list">
                        <li><a href="/about-us" class="about_us-title-class" title="About Us"
                            aria-label="About Us" id="menu_13" aria-labelledby="menu_13"> About
                            Us</a></li>
                        <li><a href="/vertical-markets" class="vertical_market-title-class"
                            title="Vertical Markets" aria-label="Vertical Markets" id="menu_14"
                            aria-labelledby="menu_14"> Vertical Markets</a></li>
                        <li><a href="/governance" class="governance-title-class" title="Governance"
                            aria-label="Governance" id="menu_15" aria-labelledby="menu_15">
                            Governance</a></li>
                        <li><a href="/sustainability" class="sustainability-title-class"
                            title="Sustainability" aria-label="Sustainability" id="menu_16"
                            aria-labelledby="menu_16"> Sustainability</a></li>
                        <li><a href="https://mydcs.delcoronascardigli.com/login.xhtml"
                            target="_blank" class="reserved_area-title-class" title="MyDCS"
                            aria-label="MyDCS" id="menu_17" aria-labelledby="menu_17"> MyDCS</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-4 col-footer">
                    <div class="widget">
                      <div class="widget-title"> Services</div>
                      <ul class="list">
                        <li><a href="/services/ocean-freight" class="services-by_ocean-title-class"
                            title="Ocean Freight" aria-label="Ocean Freight" id="menu_18"
                            aria-labelledby="menu_18"> Ocean Freight</a></li>
                        <li><a href="/services/land-freight" class="services-by_land-title-class"
                            title="Land Freight" aria-label="Land Freight" id="menu_19"
                            aria-labelledby="menu_19"> Land Freight</a></li>
                        <li><a href="/services/air-freight" class="services-by_air-title-class"
                            title="Air Freight" aria-label="Air Freight" id="menu_20"
                            aria-labelledby="menu_20"> Air Freight</a></li>
                        <li><a href="/services/distribution-logistics"
                            class="services-distribution_logistics-title-class"
                            title="Distribution Logistics" aria-label="Distribution Logistics"
                            id="menu_21" aria-labelledby="menu_21"> Distribution Logistics</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-4 col-footer">
                    <div class="widget">
                      <div class="widget-title"> Compliance</div>
                      <ul class="list">
                        <li><a href="/code-of-ethics" class="governance-ethical_code-title-class"
                            title="Code of Ethics" aria-label="Code of Ethics" id="menu_22"
                            aria-labelledby="menu_22"> Code of Ethics</a></li>
                        <li><a href="/privacy-policy" class="privacy_policy-title-class"
                            title="Privacy Policy" aria-label="Privacy Policy" id="menu_23"
                            aria-labelledby="menu_23"> Privacy Policy</a></li>
                        <li><a href="/cookies-policy" class="cookie_policy-title-class"
                            title="Cookie Policy" aria-label="Cookie Policy" id="menu_24"
                            aria-labelledby="menu_24"> Cookie Policy</a></li>
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
            <div class="copyright-text text-center">Free Toll USA and CANADA 800-717-2071 P.I. 01357070497</div>
          </div>
        </div>
      </footer>
    `
  }
}

customElements.define('my-footer', MyFooter)
