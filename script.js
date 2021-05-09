import Main from "./assets/scripts/main.js";
import STORE from "./assets/scripts/store.js";
import CategoriesService from "./assets/scripts/services/categories_service.js";
import ProductsService from "./assets/scripts/services/products_service.js";
/*
 *
 * Main Functions
 *
 */
async function init() {
  const main = Main(".js-content");
  /* Llamamos a la API para categories */
  const categoriesService = new CategoriesService();
  const categories = await categoriesService.list();
  STORE.categories = categories.data;

  /* Llamamos a la API para products */
  const productsService = new ProductsService();
  const products = await productsService.list();
  STORE.products = products.data;

  main.render();
}

init();
