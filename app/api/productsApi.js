// product api url
export const apiUrl = "https://dummyjson.com/products";
// all products fetching
export async function productsApi() {
  const res = await fetch(apiUrl, { cache: "force-cache" });
  return res.json();
}

// all products fetching
export async function singleProductsApi() {
  const res = await fetch(apiUrl, { cache: "force-cache" });
  return res.json();
}
