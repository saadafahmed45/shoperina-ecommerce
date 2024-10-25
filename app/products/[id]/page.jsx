"use client";

import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { MyContext } from "../../Context/Context";

const SingleProduct = ({ params }) => {
  const id = params.id;
  const [product, setProduct] = useState({});
  const [mainImage, setMainImage] = useState(""); // Main image state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { handleAddedCart } = useContext(MyContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setProduct(result);
        setMainImage(result.thumbnail); // Set initial main image
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
    tags,
    warrantyInformation,
    returnPolicy,
    shippingInformation,
    reviews,
    availabilityStatus,
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
      <div className="bg-white min-h-screen font-sans px-4 lg:px-16">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="w-full p-4 bg-white ">
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
              <div className="w-full p-6">
                <img
                  src={mainImage} // Main image changes here
                  alt={title}
                  className="w-full h-60 lg:h-96 object-contain rounded-lg"
                />
              </div>
              <div className="mt-6 flex justify-center gap-6 mx-auto">
                {images?.length
                  ? images.map((imageItem, index) => (
                      <div
                        key={index}
                        className="p-2 shadow-md cursor-pointer"
                        onClick={() => setMainImage(imageItem)} // Clicking the thumbnail changes the main image
                      >
                        <img
                          className="w-24 h-24 object-contain"
                          src={imageItem}
                          alt=""
                        />
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
                {/* Rating */}
                <div className="flex flex-col gap-4">
                  <h3>
                    <span className="font-semibold">Brand:</span>
                    {brand}
                  </h3>{" "}
                  <h3>
                    <span className="font-semibold">Availability Status :</span>
                    {availabilityStatus}
                  </h3>{" "}
                  <div className="flex justify-start item-center gap-2">
                    <span className="font-semibold">Rating:</span>
                    <ReactStars
                      count={5}
                      value={rating}
                      size={30}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>{" "}
                  <h3>
                    {" "}
                    <span className="font-semibold">
                      Warranty Information:
                    </span>{" "}
                    {warrantyInformation}
                  </h3>{" "}
                  <h3>
                    <span className="font-semibold">
                      Shipping Information:{" "}
                    </span>
                    {shippingInformation}
                  </h3>{" "}
                  <h3>
                    <span className="font-semibold">Return Policy: </span>
                    {returnPolicy}
                  </h3>{" "}
                </div>
              </div>
            </div>
          </div>

          {/* review secion */}
          <div className="p-2 sp">
            <h2 className="text-xl py-6 lg:text-2xl font-bold ">
              Our customers are saying:{" "}
            </h2>
            <div classNane="space-y-4">
              {reviews?.map(
                ({ comment, reviewerName, reviewerEmail, rating, date }) => (
                  <div className=" flex flex-col w-full max-w-lg p-6  divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex justify-between p-4">
                      <div className="flex space-x-4">
                        <div>
                          <img
                            src="https://source.unsplash.com/100x100/?portrait"
                            alt=""
                            className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold">{reviewerName} </h4>
                          <span className="text-xs dark:text-gray-600">
                            2 days ago
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 dark:text-yellow-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-5 h-5 fill-current"
                        >
                          <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                        </svg>
                        <span className="text-xl font-bold">{rating}</span>
                      </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                      <p>{comment}</p>
                      {/* <p>
                        Donec eget ultricies diam, eu molestie arcu. Etiam nec
                        lacus eu mauris cursus venenatis.
                      </p> */}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SingleProduct;
