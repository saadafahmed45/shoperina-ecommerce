"use client";
import React, { useEffect, useState } from "react";
import ProductsCard from "../components/ProductsCard";
import axios from "axios";

const Products = () => {
  const [visible, setVisible] = useState(8);
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/search?q=phone`)
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const visibleProducts = filteredProducts.slice(0, visible);

  const loadMore = () => {
    setVisible(visible + 8);
  };

  return (
    <div className="mx-4 lg:mx-24 my-10 space-y-8">
      <div className="border-b-2 py-2">
        <h2 className="text-xl font-semibold">Choose the Products:</h2>
      </div>
      {/* <div>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2 w-full"
        />
      </div> */}
      <div className="grid grid-cols-2 gap-2 space-y-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4 items-center">
        {visibleProducts.map((product) => (
          <ProductsCard product={product} key={product.id} />
        ))}
      </div>
      {visible < filteredProducts.length && (
        <div className="text-center">
          <button
            className="bg-purple-700 text-white py-2 px-2 hover:bg-purple-600"
            onClick={loadMore}
          >
            See more
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
