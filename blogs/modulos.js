class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="navbar-fixed">
                    <nav class="blue darken-2">
                        <div class="nav-wrapper valign-wrapper container blue darken-2">
                            <a href="/" class="brand-logo hide-on-med-and-up">Luisfmp</a>
                            <a href="#" data-target="menu-responsive" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                            <ul class="valign-wrapper">
                                <li><a class="hide-on-med-and-down" href="/"><h6>Luisfmp</h6></a></li>
                                <li><a class="hide-on-small-only" href="/portafolios"><h6>Portafolios</h6></a></li>
                                <li><a class="hide-on-small-only" href="/reconocimientos"><h6>Reconocimientos</h6></a></li>
                                <li><a class="hide-on-small-only" href="/blogs"><h6>Blogs</h6></a></li>
                                <li><a class="hide-on-med-and-down" href="/filosofia"><h6>Filosofía</h6></a></li>
                                <li><a class="hide-on-med-and-down" href="/contacto"><h6>Contacto</h6></a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <ul class="sidenav" id="menu-responsive">
                    <li><a href="//"><h5>Luisfmp</h5></a></li>
                    <li><a href="/portafolios"><h5>Portafolios</h5></a></li>
                    <li><a href="/reconocimientos"><h5>Reconocimientos</h5></a></li>
                    <li><a href="/blogs"><h5>Blogs</h5></a></li>
                    <li><a href="/filosofia"><h5>Filosofía</h5></a></li>
                    <li><a href="/contacto"><h5>Contacto</h5></a></li>
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
                    <div class="row">
                    <div class="col l6 s12">
                        <h5 class="white-text">Contáctame</h5>
                        <p class="grey-text text-lighten-4">Puedes contactarme por estos medios :)</p>
                        <p>+51 914 609 873</p>
                        <p>luisfermepa9@gmail.com</p>
                    </div>
                    <div class="col l4 offset-l2 s12">
                        <h5 class="white-text">Enlaces</h5>
                        <ul>
                        <li><a class="grey-text text-lighten-3" href="https://www.linkedin.com/in/luisfmp9">Linkedin</a></li>
                        <li><a class="grey-text text-lighten-3" href="https://luisfmp.itch.io/">Itch (Videojuegos)</a></li>
                        <li><a class="grey-text text-lighten-3" href="https://www.facebook.com/luisfmp2">Facebook</a></li>
                        <li><a class="grey-text text-lighten-3" href="https://www.youtube.com/channel/UCbGQB3Q26ABBMi3_-E3fcEA">Youtube</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div class="footer-copyright grey darken-4">
                    <div class="container">
                        <div class="row valign-wrapper">
                            <div class="col s8">
                                <p class="grey-text text-lighten-4 left valign-wrapper">© 2022 Luis Fernando Mercado Predes</p>
                            </div>
                            <div class="col s4">
                                <a class="grey-text text-lighten-4 left valign-wrapper" href="//">luisfmp.com</a>
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