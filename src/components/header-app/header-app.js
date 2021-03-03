import { LitElement, html, css } from 'lit-element';

class HeaderApp extends LitElement {
  static get styles() {
    return css`
    .bg-medium-body {
      color: #fff!important;
      background-color: #3d3d3d!important;
    }
    .navbar-linio.nav-link {
        color: #fff !important;
      }
    
    .navbar-linio .navbar-toggler {
        background-color: #fff;
        border: 1px solid transparent;
        border-radius: 0;
        color: #f50;
        padding: 0 8px;
    }
    .contain {
      display: flex; 
      justify-content: space-between;
    }
    `
  }

  static get properties() {
    return { titleApp : String };
  }

  constructor() {
    super();
    this.titleApp = `My App`
  }

  render() {
    return html`
    <link rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
  integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
  crossorigin="anonymous">
    
    <nav class="navbar navbar-expand-lg bg-medium-body navbar-dark bg-light contain">
    <button class="navbar-toggler col-1" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand d-none d-sm-block" href="#"><img class="card-img-top" src="/images/logo.svg" alt="Card image cap"></a>
    <input-search></input-search>
    <a class="navbar-brand d-lg-none" href="#"><img class="card-img-top" src="/images/logo-sm.svg" alt="Card image cap"></a>
  
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav  mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="navbar-linio nav-link " href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="navbar-linio nav-link " href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="navbar-linio nav-link  disabled" href="#">Disabled</a>
        </li>
      </ul>
    </div>
  </nav>`
  }
}
customElements.define('header-app', HeaderApp);