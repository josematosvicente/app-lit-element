import { css, html, LitElement } from 'lit-element';
import "./components/header-app/header-app";
import "./components/input-search/input-search";
import "./components/product-card/product-card";

export class AppMain extends LitElement {

  constructor() {
    super();
    this.search = '';
    this.title = 'My app';
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
    `;
  }

  render() {
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
