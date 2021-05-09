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
  const main = Main(".js-content")
  const categoriesService = new CategoriesService();
  const categories = await categoriesService.list();
  STORE.categories = categories.data;

  const productsService = new ProductsService();
  const products = await productsService.list()

  // Me QUEDE ACA, probe para llamar las busquedas a la API, por nombre senviando un parametro query.
  // implementar al hacer click en la lupa para que busque. pst: lupa mas grande meter en un boton
  // 1er opcion enviar por un form, los datos. 
  // const products = await productsService.searchProducts("clavo");
  STORE.products = products.data;

  main.render();
}

init();