import { LitElement, html, css } from 'lit-element';

class InputSearch extends LitElement {
  static get styles() {
    return css``
  }

  static get properties() {
    return { prop: { inputValue: String} };
  }

  filtrar (e) {
    this.txtFiltro = e.srcElement.value;

    const event = new CustomEvent('set-search', { 
      detail: {value: this.txtFiltro},
      bubbles: true, 
      composed: true
    });
    this.dispatchEvent(event);
  }

  render() {
    this.txtFiltro = "";
    return html`
    <header>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    </header>
    <body>
    <div class="input-group mb-3">
      <input type="text" value="${this.txtFiltro}" @keyup=${this.filtrar} class="form-control" placeholder="Busca Productos" aria-label="Busca Productos" aria-describedby="button-addon2">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" @click="${this.filtrar}" type="button" id="button-addon2">Button</button>
      </div>
    </div>
    </body>`
  }
}
customElements.define('input-search', InputSearch);