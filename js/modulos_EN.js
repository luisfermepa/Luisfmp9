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
                                <li><a class="hide-on-small-only" href="achievements">Achievements</a></li>
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
                    <li><a href="achievements">Achievements</a></li>
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
                    <div class="row">
                    <div class="col l6 s12">
                        <h5 class="white-text">Contact me</h5>
                        <p class="grey-text text-lighten-4">You can contact me in these media :)</p>
                        <p>+51 914 609 873</p>
                        <p>luisfermepa9@gmail.com</p>
                    </div>
                    <div class="col l4 offset-l2 s12">
                        <h5 class="white-text">Links</h5>
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
                                <p class="grey-text text-lighten-4 left valign-wrapper">© 2022 Luis Fernando Mercado Paredes</p>
                            </div>
                            <div class="col s4">
                                <a class="grey-text text-lighten-4 left valign-wrapper" href="/luisfmp">https://luisfmp9.github.io/</a>
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