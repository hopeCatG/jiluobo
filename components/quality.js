// MyQuality 组件
class MyQuality extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
     <section>
                <div class="container">
                    <div
                        class="row client-logos carousel-description-clients carousel-description-style certification-wrapper">
                        <div class="col-lg-4">
                            <div class="description">
                                <h3 class="cta">质量</h3>
                                吉萝卜
                                致力于为客户提供安全优质的服务，这也体现在其获得的认证和针对特定技能的定期更新中，如：管理和流程咨询、信用证验证、危险品咨询、综合物流培训和研讨会。<br><br>
                                我们的质量政策可通过以下链接的PDF格式获取：

                                <div class="mt-3">
                                    <div class="document"><a
                                            href="/document/file/dcspoliticaqualita_en.66793fa57dbfe.pdf"
                                            target="_blank" class="btn btn-primary">
                                            DCS - 质量政策
                                        </a></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="carousel dots-grey" data-items="4" data-items-xs="2" data-arrows="false">
                                <div class="carousel-cell text-center"><img alt="ISO 9001"
                                        src="static/picture/cqy_9.15_it_cmyk.png"></div>
                                <div class="carousel-cell text-center"><img alt="Safety and Quality Assessment System"
                                        src="static/picture/certificazione_sqas.jpg"></div>
                                <div class="carousel-cell text-center"><img alt="Chemical Distribution Institute"
                                        src="static/picture/certificazione_cdi.jpg"></div>
                                <div class="carousel-cell text-center"><img alt="SQF" src="static/picture/sqf_logo.png">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="space"></div>
                </div>
            </section>
    `
  }
}
customElements.define('my-quality', MyQuality)
