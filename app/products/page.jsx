"use client";
import React, { useEffect, useState } from "react";
// import productsApi from "../api/productsApi";
import ProductsCard from "../components/ProductsCard";
// import { productsApi } from "../api/productsApi";

const Products = async () => {
  // const product = await productsApi();
  // console.log(products);
  // const products = product.products;
  // // data filtering start
  // const [quary, setQuary] = useState("");

  // console.log(product.filter((pr) => pr.title.toLowerCase().includes(quary)));
  // // console.log(quary);

  const [products, setProduct] = useState([]);
  const [visible, setVisible] = useState(8);

  const visibleProducts = products.slice(0, visible);

  const loadMore = () => {
    setVisible(visible + visible);
  };

  useEffect(() => {
    fetch(`https://dummyjson.com/products/`)
      .then((response) => response.json())
      .then((data) => setProduct(data.products));
  }, []);

  return (
    <div className=" mx-8 lg:mx-24 my-16 space-y-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 items-center">
        {visibleProducts.map((product, index) => (
          <ProductsCard product={product} key={product.id} />
        ))}
      </div>
      <div className="text-center">
        {" "}
        <button
          className="bg-purple-700 text-white py-2 px-2 hover:bg-purple-600"
          onClick={() => loadMore()}
        >
          see more{" "}
        </button>
      </div>
    </div>
  );
};

export default Products;
