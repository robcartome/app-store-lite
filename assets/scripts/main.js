
export default function Main(parentElement) {
  return {
    parent: document.querySelector(parentElement),
    selectedCategory: null,
    selectedOption: "all",
    render: function () {
      let html = `
      <section class="js-main-content main-content">
      <aside class="aside">
        <h3>Categorias</h3>
        <nav class="js-category-options nav-category">
          <a class="js-category-option">Ferreteria</a>
          <a class="js-category-option">Muebles</a>
          <a class="js-category-option">Bebidas</a>
        </nav>
      </aside>

      <ul class="js-products-container main__products">
        <li class="card-product">
          <div class="card-product__head">
            <img>
          </div>
          <div class="card-product__body">
            <h4>PISCO TRES ERRES 35°</h4>
          </div>
          <div class="card-product__footer">
            <p>$ 15.45</p>
            <i class="ri-shopping-cart-2-fill icon--dark-grey"></i>
          </div>
        </li>
        <li class="card-product">
          <div class="card-product__head">
            <img>
          </div>
          <div class="card-product__body">
            <h4>PISCO TRES ERRES 35°</h4>
          </div>
          <div class="card-product__footer">
            <p>$ 15.45</p>
            <i class="ri-shopping-cart-2-fill icon--dark-grey"></i>
          </div>
        </li>
        <li class="card-product">
          <div class="card-product__head">
            <img>
          </div>
          <div class="card-product__body">
            <h4>PISCO TRES ERRES 35°</h4>
          </div>
          <div class="card-product__footer">
            <p>$ 15.45</p>
            <i class="ri-shopping-cart-2-fill icon--dark-grey"></i>
          </div>
        </li>
        <li class="card-product">
          <div class="card-product__head">
            <img>
          </div>
          <div class="card-product__body">
            <h4>PISCO TRES ERRES 35°</h4>
          </div>
          <div class="card-product__footer">
            <p>$ 15.45</p>
            <i class="ri-shopping-cart-2-fill icon--dark-grey"></i>
          </div>
        </li>
      </ul>
    </section>
      `;
      this.parent.innerHTML = html;
    }

  }
}