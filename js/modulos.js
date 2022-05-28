class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
            <div class="navbar-fixed">
                <nav class="blue darken-2">
                    <div class="nav-wrapper container blue darken-2">
                        <a href="/" class="brand-logo hide-on-med-and-up">Luisfmp</a>
                        <a href="#" data-target="menu-responsive" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                        <ul>
                            <li><a class="flow-text hide-on-med-and-down" href="/">Luisfmp</a></li>
                            <li><a class="flow-text hide-on-small-only" href="portafolios">Portafolios</a></li>
                            <li><a class="flow-text hide-on-small-only" href="reconocimientos">Reconocimientos</a></li>
                            <li><a class="flow-text hide-on-small-only" href="blogs">Blogs</a></li>
                            <li><a class="flow-text hide-on-med-and-down" href="filosofia">Filosofía</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <ul class="sidenav" id="menu-responsive">
                <li><a class="flow-text" href="/"><h5>Luisfmp</h5></a></li>
                <li><a class="flow-text" href="portafolios"><h5>Portafolios</h5></a></li>
                <li><a class="flow-text" href="reconocimientos"><h5>Reconocimientos</h5></a></li>
                <li><a class="flow-text" href="blogs"><h5>Blogs</h5></a></li>
                <li><a class="flow-text" href="filosofia"><h5>Filosofía</h5></a></li>
            </ul>
        </header>
        `
    }
}

customElements.define('MiHeader',Header);