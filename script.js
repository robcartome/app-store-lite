import Main from "./assets/scripts/main.js";
import STORE from "./assets/scripts/store.js";
/*
 *
 * Main Functions
 *
 */
function init() {
  const main = Main(".js-content")
  // const categories = await listCategories();
  // const products= await listproducts();
  
  main.render();
}

init();