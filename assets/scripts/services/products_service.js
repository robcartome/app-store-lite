import { apiFetch, BASE_URL } from "./api_fetch.js";

// Patron-Singleton
function ProductsService() {
  if (!ProductsService.instance) {
    ProductsService.instance = this;
  }
  return ProductsService.instance;
}

// Creando objetos con funciones - Uso de [[Prototype]]
ProductsService.prototype.list = () => 
  apiFetch(`${BASE_URL}/api/v1/products`, {
    method: "GET"
  },
);

ProductsService.prototype.showProduct = ($idProd) => 
  apiFetch(`${BASE_URL}/api/v1/products/${idProd}`, {
    method: "GET"
  },
);

ProductsService.prototype.showProductsByCategories = ($idCategory) => 
  apiFetch(`${BASE_URL}/api/v1/categories/${idCategory}/products`, {
    method: "GET"
  },
);
export default ProductsService;