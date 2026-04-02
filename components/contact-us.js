// MyContactUs 组件
class MyContactUs extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <section class="p-0">
                <div class="call-to-action contact-call-to-action p-t-100 p-b-100 background-image mb-0">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-9">
                                <h3 class="text-dark">
                                    您的信任就是我们的成功!
                                </h3>
                                <p class="text-dark">
                                    如有任何疑问或需求，请联系我们，我们竭诚为您服务。
                                </p>
                            </div>
                            <div class="col-lg-3 pt-lg-5 text-lg-end"><a href="/contact-us"
                                    class="btn btn-primary">联系我们</a></div>
                        </div>
                    </div>
                </div>
            </section> 
    `
    }
}
customElements.define('my-contact-us', MyContactUs);
