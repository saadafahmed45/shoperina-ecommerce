import React from "react";

const apiUrl = "https://ira-fashion-server.onrender.com/products";
export default async function productsApi() {
  const res = await fetch(apiUrl);
  const data = await res.json();
  return data;
}
