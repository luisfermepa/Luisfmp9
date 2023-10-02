const fechaActual = new Date();
const añoActual = fechaActual.getFullYear();

class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="navbar-fixed">
                    <nav class="blue darken-2">
                        <div class="nav-wrapper valign-wrapper container blue darken-2">
                            <a href="/" class="brand-logo hide-on-med-and-up">Luisfmp</a>
                            <a href="#" data-target="menu-responsive" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                            <ul class="left valign-wrapper">
                                <li><a class="hide-on-med-and-down" href="/luisfmp">Luisfmp</a></li>
                                <li><a class="hide-on-small-only" href="portfolios">Portfolios</a></li>
                                <li><a class="hide-on-small-only" href="certifications">Certifications</a></li>
                                <li><a class="hide-on-small-only" href="blogs_EN">Blogs</a></li>
                                <li><a class="hide-on-med-and-down" href="philosophy">Philosophy</a></li>
                                <li><a class="hide-on-med-and-down" href="contact">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <ul class="sidenav" id="menu-responsive">
                    <li><a href="/luisfmp">Luisfmp</a></li>
                    <li><a href="portfolios">Portfolios</a></li>
                    <li><a href="certifications">Certifications</a></li>
                    <li><a href="blogs_EN">Blogs</a></li>
                    <li><a href="philosophy">Philosophy</a></li>
                    <li><a href="contact">Contact</a></li>
                </ul>
            </header>
        `
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="page-footer blue darken-4">
                <div class="container">
                    <div class="row center">
                        <div class="col l6 s12">
                            <h5 class="white-text">Contact me</h5>
                            <p class="grey-text text-lighten-4">You can reach me at :)</p>
                            <p>luisfermepa9@gmail.com</p>
                        </div>
                        <div class="col l4 offset-l2 s12">
                            <h5 class="white-text">Links</h5>
                            <ul>
                                <li><a class="grey-text text-lighten-3" href="https://www.linkedin.com/in/luisfmp9" target="_blank">Linkedin</a></li>
                                <li><a class="grey-text text-lighten-3" href="https://luisfmp.itch.io/" target="_blank">Itch (Video Games)</a></li>
                                <li><a class="grey-text text-lighten-3" href="https://www.instagram.com/luisfmp9/" target="_blank">Instagram</a></li>
                                <li><a class="grey-text text-lighten-3" href="https://www.youtube.com/@Luisfmp" target="_blank">Youtube</a></li>
                                <li><a class="grey-text text-lighten-3" href="/luisfmp">Website</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright grey darken-4">
                    <div class="container">
                        <div class="row valign-wrapper">
                            <div class="col s8">
                                <p class="grey-text text-lighten-4 valign-wrapper">© ${añoActual} Luis Fernando Mercado Paredes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        `
    }
}

customElements.define('mi-header', Header);
customElements.define('mi-footer', Footer);