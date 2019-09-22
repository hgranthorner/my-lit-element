import { LitElement, html, customElement } from 'lit-element'
import './components/nav-bar'

@customElement('app-root')
export class AppRoot extends LitElement {
  createRenderRoot() {
    return this;
  }
  render() {
    return html`<nav-bar></nav-bar>`
  }
}
