import STORE from "./store.js";

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

        </nav>
      </aside>

        <ul class="js-main-products main__products">

      </ul>
    </section>
      `;
      this.parent.innerHTML = html;
      this.renderCategories();
      this.renderProducts();
    },
    renderCategories: function(){
      const section = this.parent.querySelector(".js-category-options");
      console.log("entro a render product: ", section);
      const categories = STORE.categories.map((category)=>{
        return `
        <a class="js-category-option">${category.name}</a>
        `;
      });
      section.innerHTML = categories.join("");

    },
    renderProducts: function(){
      const section = this.parent.querySelector(".js-main-products");
      const product = STORE.products.map((product) => {
        return `
        <li class="card-product">
          <div class="card-product__head">
            <img src= "${product.url_image?product.url_image:"./assets/images/not-photo.svg"}">
          </div>
          <div class="card-product__body">
            <h4>${product.name}</h4>
          </div>
          <div class="card-product__footer">
            <p>$ ${product.price}</p>
            <i class="ri-shopping-cart-2-fill icon--dark-grey"></i>
          </div>
        </li>
        `
      });
      console.log("prud: ", product)
      section.innerHTML = product.join("");
    },


  }
}