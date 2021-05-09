import STORE from "./store.js";
import ProductsService from "./services/products_service.js";

export default function Main(parentElement) {
  return {
    parent: document.querySelector(parentElement),
    selectedCategory: null, // Para controlar que si hay una categoria seleccionada
    selectedOption: "all", // Controlar que no se llame dos veces la misma categoria
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
      this.navClickListener();
      this.logoClickListener();
      this.searchProducts();
    },
    renderCategories: function () {
      const section = this.parent.querySelector(".js-category-options");
      const categories = STORE.categories.map((category) => {
        const selected =
          category.id == this.selectedCategory ? "category--selected" : "";
        return `
        <a class="js-category-option ${selected}" href="#${category.name}" data-value="${category.name}" data-id="${category.id}">${category.name}</a>
        `;
      });
      section.innerHTML = categories.join("");
    },
    renderProducts: function () {
      const section = this.parent.querySelector(".js-main-products");
      const product = STORE.products.map((product) => {
        return `
        <li class="card-product">
          <div class="card-product__head">
            <img src= "${
              product.url_image
                ? product.url_image
                : "./assets/images/not-photo.svg"
            }">
          </div>
          <div class="card-product__body">
            <h4>${product.name}</h4>
          </div>
          <div class="card-product__footer">
            <p>$ ${product.price}</p>
            <i class="ri-shopping-cart-2-fill icon--dark-grey"></i>
          </div>
        </li>
        `;
      });
      /* console.log("prud: ", product) */
      section.innerHTML = product.join("");
    },
    navClickListener: function () {
      const options = this.parent.querySelectorAll(".js-category-option");
      options.forEach((element) => {
        element.addEventListener("click", async (e) => {
          e.preventDefault();
          if (element == e.target) {
            this.selectedCategory = element.dataset.id;
            // Comprobar si ya se hizo click en esa categoria | Solo Llamar a la API una vez por click
            if (this.selectedOption != this.selectedCategory) {
              const isSelected = this.parent.querySelector(
                ".category--selected"
              );
              console.log("isselcet: ", isSelected);
              const productsService = new ProductsService();
              const productsByCategory = await productsService.showProductsByCategories(
                this.selectedCategory
              );
              STORE.products = productsByCategory.data;
              this.selectedOption = element.dataset.id;
            }
            // no usamos render() de todo para no consumir muchos  recursos
            this.renderCategories();
            this.renderProducts();
            this.navClickListener();
          }
        });
      });
    },

    /* Reinicia todo al hacer click en el logo de header */
    logoClickListener: function () {
      const logo = document.querySelector(".js-logo");
      logo.addEventListener("click", async (e) => {
        this.selectedCategory = null;
        const productsService = new ProductsService();
        const products = await productsService.list();
        STORE.products = products.data;
        location.reload();
      });
    },

    searchProducts: function (){
      const formSearch = document.querySelector(".js-form-search");
      if(formSearch){
        formSearch.addEventListener("submit", async (e) => {
          e.preventDefault();
          try{
            const productsService = new ProductsService();
            const products = await productsService.searchProducts(formSearch.product_name.value);
            console.log("Envio submit: ",products);
            STORE.products = products.data;
            this.renderCategories();
            this.renderProducts();
            this.navClickListener();
          }catch(e){
            console.log(e);
            alert(e);
          }
        })
      }
    }
  };
}
