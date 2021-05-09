import Main from "./assets/scripts/main.js";
import STORE from "./assets/scripts/store.js";
import CategoriesService from "./assets/scripts/services/categories_service.js";
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

  // const categoriesService = new CategoriesService();
  // const categories = await categoriesService.list();
  // STORE.categories = categories.data;
  
  main.render();
}

init();