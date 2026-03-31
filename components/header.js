// Header 组件
class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header id="header" data-responsive-fixed="true" class="">
        <div class="header-inner">
          <div class="container">
            <div id="logo"><a href="/" class="logo" data-src-dark="/build/logo_2023.png"><img
                        src="static/picture/logo_2023.png" alt="Logo" class="logo-default"></a></div>
            <!--Header Extras-->
            <div class="header-extras">
              <ul>
                <li class="trackingDCS d-none d-lg-block"><a
                        href="https://wt.delcoronascardigli.com/login.xhtml" class="btn btn-primary me-2">
                        DCS Tracking
                    </a></li>
                <li>
                  <div class="dropdown oi-i18n-locale-switch"
                      style="display: inline-block; height: 100%;">
                    <style>
                      .oi-i18n-locale-switch li a span:not(:first-child),
                      .oi-i18n-locale-switch li span span:not(:first-child),
                      .oi-i18n-locale-switch button span:not(:first-child),
                      .oi-i18n-locale-switch div a span:not(:first-child) {
                        margin-left: 6px;
                      }
                    </style>
                    <style>
                      .oi-i18n-locale-switch .dropdown-toggle:after {
                        display: inline-block;
                        color: #fff;
                        position: relative;
                        z-index: initial;
                        margin-left: .255em;
                        vertical-align: .255em;
                        content: "";
                        border-top: .3em solid;
                        border-right: .3em solid transparent;
                        border-bottom: 0;
                        border-left: .3em solid transparent;
                      }

                      .oi-i18n-locale-switch .dropdown-toggle.btn.btn-secondary {
                        color: #fff;
                        background-color: transparent;
                        border-color: transparent;
                      }

                      .oi-i18n-locale-switch .dropdown-toggle.btn.btn-secondary:active {
                        color: #fff;
                        background-color: #000;
                        border-color: #000;
                      }

                      .oi-i18n-locale-switch .dropdown-toggle.btn.btn-secondary:focus {
                        color: #fff;
                        background-color: #42484d;
                        border-color: #42484d;
                      }

                      .oi-i18n-locale-switch .dropdown-menu {
                        background-color: #fff;
                      }

                      .oi-i18n-locale-switch .dropdown-menu .dropdown-item:active {
                        background-color: #007bff;
                      }
                    </style><a class="btn btn-secondary dropdown-toggle" type="button"
                      id="oi_i18n_locale_switch" data-bs-toggle="dropdown" href="javascript:;"
                      aria-haspopup="true" aria-expanded="false" title="Select language"
                      aria-label="Select language" aria-labelledby="logo oi_i18n_locale_switch"
                      style="margin-top: 7px; padding: 4px 12px; line-height: 14px;"><img
                          src="static/picture/en.svg" height="9" alt="en"
                          style="vertical-align: initial; height: 0.72em;"><span
                          id="oi_i18n_locale_switch_language_code"
                          style="text-transform: uppercase;">en</span></a>
                    <div class="dropdown-menu dropdown-menu-end"
                      aria-labelledby="oi_i18n_locale_switch"><a class="dropdown-item"
                        href="/it/chi-siamo" id="oi_i18n_locale_switch_option_1"
                        aria-label="Italian"
                        aria-labelledby="logo oi_i18n_locale_switch oi_i18n_locale_switch_option_1"><img
                            src="static/picture/it.svg" height="9" alt="it"
                            style="vertical-align: initial; height: 0.72em;"><span
                            style="text-transform: uppercase;">it</span></a><a class="dropdown-item"
                        href="#" id="oi_i18n_locale_switch_option_2" aria-label="English"
                        aria-labelledby="logo oi_i18n_locale_switch oi_i18n_locale_switch_option_2"><img
                            src="static/picture/en.svg" height="9" alt="en"
                            style="vertical-align: initial; height: 0.72em;"><span
                            style="text-transform: uppercase;">en</span></a><a class="dropdown-item"
                        href="/es/sobre-nosotros" id="oi_i18n_locale_switch_option_3"
                        aria-label="Spanish"
                        aria-labelledby="logo oi_i18n_locale_switch oi_i18n_locale_switch_option_3"><img
                            src="static/picture/es.svg" height="9" alt="es"
                            style="vertical-align: initial; height: 0.72em;"><span
                            style="text-transform: uppercase;">es</span></a></div>
                  </div>
                </li>
              </ul>
            </div>
            <div id="mainMenu-trigger"><button class="lines-button x"><span class="lines"></span></button></div>
            <div id="mainMenu" class="menu-left">
              <div class="container">
                <my-nav></my-nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    `
  }
}

customElements.define('my-header', MyHeader)
