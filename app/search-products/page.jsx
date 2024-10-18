"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductsCard from "../components/ProductsCard";

const SearchProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]); // Keep the original unfiltered products
  const [searchQuery, setSearchQuery] = useState("");
  const [minPrice, setMinPrice] = useState(0); // Minimum price filter
  const [maxPrice, setMaxPrice] = useState(Infinity); // Maximum price filter

  // Filter by category
  const filterItem = (catItem) => {
    const updateItem = allProducts.filter((curItem) => {
      return curItem.category === catItem;
    });
    setProducts(updateItem);
  };

  // Fetch products on component load
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/search?${searchQuery}`)
      .then((response) => {
        setProducts(response.data.products);
        setAllProducts(response.data.products); // Store unfiltered products for later use
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Filter products based on search query and price range
  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );

  return (
    <div className="px-16 py-16">
      {/* search and filter */}
      <div>
        <div className="text-center">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border p-2 w-1/2"
          />
        </div>

        <div className="flex gap-4 py-12">
          <button
            className="rounded-lg bg-yellow-400 px-4 py-1.5 duration-100 hover:bg-yellow-600 font-semibold"
            onClick={() => filterItem("beauty")}
          >
            Beauty
          </button>
          <button
            className="rounded-lg bg-yellow-400 px-4 py-1.5 duration-100 hover:bg-yellow-600 font-semibold"
            onClick={() => filterItem("fragrances")}
          >
            Fragrances
          </button>
          <button
            className="rounded-lg bg-yellow-400 px-4 py-1.5 duration-100 hover:bg-yellow-600 font-semibold"
            onClick={() => setProducts(allProducts)} // Show all products
          >
            All Products
          </button>
        </div>

        {/* Price range filter */}
        <div className="text-center py-4">
          <div className="flex justify-center items-center space-x-4">
            <span>Min: ${minPrice}</span>
            <input
              type="range"
              min="0"
              max="1000"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              className="w-1/3"
            />
            <span>Max: ${maxPrice}</span>
            <input
              type="range"
              min="0"
              max="1000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-1/3"
            />
          </div>
        </div>
      </div>

      {/* products results */}
      <div className="grid grid-cols-2 gap-2 space-y-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4 items-center">
        {filteredProducts.map((product) => (
          <ProductsCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default SearchProductsPage;
