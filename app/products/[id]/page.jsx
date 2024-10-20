"use client";

// import { singleProductsApi } from "@/app/api/productsApi";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import loading from "./../../loading";
import { MyContext } from "../../Context/Context";

const SingleProduct = ({ params }) => {
  const id = params.id;
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { cartItems, handleAddedCart } = useContext(MyContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setProduct(result);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  const {
    images,
    title,
    price,
    discountPercentage,
    description,
    thumbnail,
    rating,
    brand,
  } = product;

  if (loading) {
    return (
      <div className="flex items-center justify-center p-16 h-screen">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <div className="bg-gray-100 min-h-screen font-sans px-8">
        {/* Breadcrumb */}
        <nav
          aria-label="breadcrumb"
          className="w-full p-4 dark:bg-gray-100 dark:text-gray-800"
        >
          <ol className="flex h-8 space-x-2">
            <li className="flex items-center">
              <Link
                rel="noopener noreferrer"
                href={"/"}
                title="Back to homepage"
                className="hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 pr-1 dark:text-gray-600"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
              </Link>
            </li>

            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                fill="currentColor"
                className="w-2 h-2 mt-1 transform rotate-90 fill-current dark:text-gray-400"
              >
                <path d="M32 30.031h-32l16-28.061z"></path>
              </svg>
              <Link
                rel="noopener noreferrer"
                href={"/products"}
                className="flex items-center px-1 capitalize hover:underline cursor-default"
              >
                Products
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                fill="currentColor"
                className="w-2 h-2 mt-1 transform rotate-90 fill-current dark:text-gray-400"
              >
                <path d="M32 30.031h-32l16-28.061z"></path>
              </svg>
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-1 capitalize hover:underline cursor-default"
              >
                Product Details
              </a>
            </li>
          </ol>
        </nav>
        {/* Breadcrumb */}
        {/* Main Content */}
        <main className="py-6">
          <div className="container py-4 mx-auto gap-8 flex item-center flex-col md:flex-row bg-white shadow-lg rounded-lg">
            {/* Product Image */}
            <div className="flex-1">
              <div className="w-full  p-6">
                <img
                  src={thumbnail}
                  alt={title}
                  loading="lazy"
                  className="w-full lg:w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="mt-6 flex justify-center gap-6 mx-auto">
                {product?.images?.length
                  ? product?.images.map((imageItem) => (
                      <div key={imageItem} className="p-4 shadow-md">
                        <img className="w-24" src={imageItem} alt="" />
                      </div>
                    ))
                  : null}
              </div>
            </div>

            {/* Product Details */}
            <div className="w-full flex-2 md:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-4">{title}</h1>
                <p className="text-gray-600 mb-4">{description}</p>

                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    ${price}
                  </span>
                  <span className="text-gray-500 ml-4 text-sm line-through">
                    ${price + price * (discountPercentage / 100)}
                  </span>
                </div>

                <div className="flex space-x-4 mb-6">
                  <button
                    onClick={() => handleAddedCart(product)}
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                  >
                    Add to Cart
                  </button>
                  <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400">
                    Wishlist
                  </button>
                </div>
                {/* rate  */}
                <div className="flex flex-col gap-4">
                  <span> Brand: {brand}</span>{" "}
                  <span>
                    Rating:
                    <ReactStars
                      count={5}
                      value={rating}
                      size={24}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SingleProduct;
