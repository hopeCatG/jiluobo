// Header 组件
class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header id="header" data-responsive-fixed="true" class="">
        <div class="header-inner">
          <div class="container">
            <div id="logo"><a href="/" class="logo" data-src-dark="/build/logo_2023.png"><img
                        src="/static/picture/logo_2023.png" alt="Logo" class="logo-default"></a></div>
            <!--Header Extras-->
          
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
