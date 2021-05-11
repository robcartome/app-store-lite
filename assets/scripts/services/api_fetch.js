const BASE_URL = "https://store-lite.herokuapp.com";
// const BASE_URL = "https://shielded-hollows-90471.herokuapp.com";

async function apiFetch(...args) {
  const response = await fetch(...args);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.errors);
  }
  if (response.status !== 204) {
    return await response.json();
  }
  return response.text;
}

export { BASE_URL, apiFetch };
