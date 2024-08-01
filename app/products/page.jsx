import React from "react";
import productsApi from "../api/productsApi";
import ProductsCard from "../components/ProductsCard";

const Products = async () => {
  const products = await productsApi();
  console.log(products);
  return (
    <div className=" mx-8 lg:mx-24 my-16">
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 items-center">
        {products.map((product, index) => (
          <ProductsCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
