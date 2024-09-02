"use client";
import React, { useEffect, useState } from "react";
// import productsApi from "../api/productsApi";
import ProductsCard from "../components/ProductsCard";
// import { productsApi } from "../api/productsApi";
import axios from "axios";
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
    axios
      .get(`https://dummyjson.com/products/search?q=phone`)
      .then(function (response) {
        // handle success
        setProduct(response.data.products);
        // console.log(response.data.products);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <div className=" mx-4 lg:mx-24 my-10 space-y-8">
      <div className="border-b-2 py-2">
        <h2 className="text-xl font-semibold">Choose the Products:</h2>
      </div>
      <div className="grid grid-cols-2 gap-2 space-y-4  md:gap-6 md:grid-cols-2 lg:grid-cols-4 items-center">
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
