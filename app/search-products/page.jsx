"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import ProductsCard from "../components/ProductsCard";

export default function ProductSearchPage() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products`)
      .then((response) => {
        setProducts(response.data.products);
        setAllProducts(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const filterProducts = () => {
    return allProducts.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesPrice =
        product.price >= minPrice && product.price <= maxPrice;
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesPrice && matchesCategory;
    });
  };

  const categories = [
    "all",
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Product Search</h1>

      <div className="mb-8 space-y-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium capitalize ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="space-y-2">
          <label htmlFor="price-range" className="text-sm font-medium">
            Price Range: ${minPrice} - ${maxPrice}
          </label>
          <div className="flex items-center space-x-4">
            <input
              type="range"
              id="min-price"
              min="0"
              max="1000"
              step="10"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              className="w-full"
            />
            <input
              type="range"
              id="max-price"
              min="0"
              max="1000"
              step="10"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filterProducts().map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>

      {filterProducts().length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          No products found matching your criteria.
        </p>
      )}
    </div>
  );
}
