"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import ReactStars from "react-rating-stars-component";
import { MyContext } from "../Context/Context";
import { motion } from "framer-motion"; // Import motion from framer-motion

const ProductsCard = ({ product }) => {
  const { thumbnail, images, title, price, id, rating } = product;
  const { handleAddedCart } = useContext(MyContext);

  return (
    <motion.article
      initial={{ opacity: 0 }} // Set initial opacity for fade-in
      animate={{ opacity: 1 }} // Animate to full opacity
      transition={{ duration: 0.8 }} // Set the duration of the fade-in effect
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      {/* <div>
        <Link
          href={`/products/${id}`}
          className="relative flex items-end overflow-hidden rounded-xl"
        >
          <Image
            width={100}
            height={100}
            src={thumbnail}
            alt={title}
            className="object-cover w-full h-52 cursor-pointer transition-all"
          />
        </Link>

        <div className="mt-1 p-2">
          <h2 className="text-slate-700 overflow-hidden">
            {" "}
            {title.slice(0, 25)}..
          </h2>
          <div className="mt-3 flex items-end justify-between flex-col md:flex-row">
            <p className="text-lg font-bold text-blue-500">${price}</p>

            <div className="flex items-center space-x-1.5 rounded-lg bg-yellow-400 px-4 py-1.5 duration-100 hover:bg-yellow-600 font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>

              <button
                onClick={() => handleAddedCart(product)}
                className="text-sm"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="bg-white rounded-lg shadow-md overflow-hidden"> */}
      <div className="relative h-48">
        <Link href={`/products/${id}`}>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </Link>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2 truncate">{product.title}</h2>
        <p className="text-sm text-gray-500 mb-2 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
          <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-4 pt-0">
        <button
          onClick={() => handleAddedCart(product)}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Add to Cart
        </button>
      </div>
      {/* </div> */}
    </motion.article>
  );
};

export default ProductsCard;
