"use client";
import React, { useContext, useEffect, useState } from "react";
import ProductsCard from "../components/ProductsCard";
import axios from "axios";
import { MyContext } from "../Context/Context";
import SkeletonCard from "../components/SkeletonCard";

const Products = () => {
  const { visibleProducts, visible, loadMore, products, loading } =
    useContext(MyContext);

  // if (loading) {
  //   return <h2 className="text-lg font-semibold">loading data..wait</h2>;
  // }
  return (
    <div className="mx-4 lg:mx-24 my-18 space-y-8">
      <div className="border-b-2 py-2">
        <h2 className="text-xl font-semibold">Choose the Products:</h2>
      </div>

      {loading && (

        <SkeletonCard />
      )}
      <div className="grid grid-cols-2 gap-2 space-y-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4 items-center">
        {visibleProducts.map((product) => (
          <ProductsCard product={product} key={product.id} />
        ))}
      </div>
      {visible < products.length && (
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
