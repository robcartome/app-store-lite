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
      this.navClickListener();
      this.logoClickListener();
    },
    renderCategories: function () {
      const section = this.parent.querySelector(".js-category-options");
      const categories = STORE.categories.map((category) => {
        const selected =
          category.name == this.selectedCategory ? "category--selected " : "";
        return `
        <a class="js-category-option ${selected}" href="#${category.name}" data-value="${category.name}">${category.name}</a>
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
      console.log("navs: ", options);
      options.forEach((element) => {
        element.addEventListener("click", (e) => {
          console.log("elemtn: ", element, " target: ", e.target);
          e.preventDefault();
          if (element == e.target) {
            this.selectedCategory = element.dataset.value;
            this.selectedOption = "";
            this.render();
          }
          console.log(this.selectedCategory);
        });
      });
    },

    /* Reinicia todo al hacer click en el logo de header */
    logoClickListener: function () {
      const logo = document.querySelector(".js-logo");
      logo.addEventListener("click", (e) => {
        this.selectedCategory = "";
        this.selectedOption = "all";
        this.render();
      });
    },
  };
}
