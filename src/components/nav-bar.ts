import { LitElement, html, customElement } from 'lit-element'

@customElement('nav-bar')
export class AppRoot extends LitElement {
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="#/login">Log In</a>
          <a class="nav-item nav-link" href="#/home">Home</a>
        </div>
      </div>
    </nav>
    `
  }
}
