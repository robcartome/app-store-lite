import { apiFetch, BASE_URL } from "./api_fetch.js";

// Patron-Singleton
function CategoriesService() {
  if (!CategoriesService.instance) {
    CategoriesService.instance = this;
  }
  return CategoriesService.instance;
}

// Creando objetos con funciones - Uso de [[Prototype]]
CategoriesService.prototype.list = () => 
  apiFetch(`${BASE_URL}/api/v1/categories`, {
    method: "GET"
  },
);

export default CategoriesService;