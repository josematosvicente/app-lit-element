import { LitElement, html, css } from 'lit-element';
import { openWcLogo } from './open-wc-logo.js';
import "./components/header-app/header-app";
import "./components/input-search/input-search";
import "./components/client-card/product-card";

let search;

export class AppMain extends LitElement {

  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
    `;
  }

  constructor() {
    super();
    this.title = 'My app';
  }

  render() {
    console.log('eeey:'+this.search);
    return html`
    <header-app @set-search="${this.returnSearch}" titleApp="Aplicacion de LitElement desde raiz"></header-app>
    <product-card search="" titleApp="Aplicacion de LitElement desde raiz"></product-card>
    `;
  }

  returnSearch({detail}) {
    this.search = detail.value;
    this.shadowRoot.querySelector('product-card').search = this.search;
  }

}
customElements.define('app-main', AppMain);
