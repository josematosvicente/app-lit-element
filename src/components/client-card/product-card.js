import { LitElement, html, css } from 'lit-element';

class ProductCard extends LitElement {

  static get styles() {
    return css`.w-100{width:100%}`
  }

  static get properties() {
    return { search: String };
  }

  searchByText( obj, key, search ){
    let results = [];
    for (var i=0 ; i < obj.length ; i++)
    {
        if (obj[i][key].includes(search)) {
            results.push(obj[i]);
        }
    }
    return results;
}

  render() {

    let data = [
      { name: "phoenix job 11", location: "phoenix", expires: "2020-10-01" },
      { name: "chicago job 22", location: "chicago", expires: "2020-10-01" },
      { name: "chicago job 33", location: "chicago", expires: "2020-10-01" },
      { name: "chicago job 44", location: "chicago", expires: "2020-10-01" },
    ];

    var searchData = [];
    searchData = this.searchByText(data, "name", this.search );

    return html`<header>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</header>
<div class="d-lg-flex">
${searchData.map((item)=>
  html`
<div class="card  ml-3 mt-3" style="width: 20rem;">
  <img class="card-img-top" src="/images/iroman.png" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div class="d-flex  justify-content-center w-100">
      <a href="#" class="btn btn-primary w-100">Ver Detalle</a>
    </div>
  </div>
</div>
`
)
}
</div>
`
  }
}
customElements.define('product-card', ProductCard);