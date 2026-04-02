// MyBookingService 组件
class MyBookingService extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <section>
            <div class="container">
                <h3 class="text-center">全球订舱服务</h3>
                <h3 class="service-copyright-text text-center">服务热线 400-662-6939</h3>
                <div class="row gy-5 mt-60">
                    <div class="col-lg-4">
                        <div class="icon-box medium fancy">
                            <div class="icon" data-animate="pulse infinite"><img
                                    src="../static/picture/icon-insurance-service.svg" alt="Insurance Services"></div>
                            <h3>东南亚进出口航线</h3>
                            <p>覆盖新加坡、马来西亚、印度尼西亚、菲律宾、泰国、柬埔寨、越南等主要国家。无论是海运的经济实惠、空运的快捷高效，还是陆运的灵活便利，吉罗卜都能为企业量身定制最适合的物流方案。</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="icon-box medium fancy">
                            <div class="icon" data-animate="pulse infinite"><img
                                    src="../static/picture/icon-customs-service.svg" alt="Customs Services"></div>
                            <h3>日韩台进出口航线</h3>
                            <p>韩国航线以仁川、釜山为双核心枢纽，借助青岛、烟台、丹东等中国港口搭建高频海运网络；日本航线海运覆盖关东（东京、横滨）、关西（大阪、神户）、九州（福冈）等核心港口；中国台湾航线依托高雄、基隆、台中港口群也实现了高效覆盖。</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="icon-box medium fancy">
                            <div class="icon" data-animate="pulse infinite"><a href="#"><img
                                        src="../static/picture/icon-computer-service.svg" alt="IT Services"></a></div>
                            <h3>欧洲进出口航线</h3>
                            <p>吉罗卜以鹿特丹和汉堡作为核心枢纽，依托多式联运的物流运输方式覆盖了欧洲主要国家，我们充分发挥海运与空运的优势，有效控制运营成本，为客户提供具有竞争力的物流解决方案。</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
  }
}
customElements.define('my-booking-service', MyBookingService)
