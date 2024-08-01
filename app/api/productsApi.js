import React from "react";

const apiUrl = "https://fakestoreapi.com/products";
export default async function productsApi() {
  const res = await fetch(apiUrl);
  const data = await res.json();
  return data;
}
