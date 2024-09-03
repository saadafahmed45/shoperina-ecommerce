"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import ReactStars from "react-rating-stars-component";
import { MyContext } from "../Context/Context";

const ProductsCard = ({ product }) => {
  const { images, title, price, id, description, thumbnail, rating } = product;

  const { cartItems, handleAddedCart } = useContext(MyContext);

  return (
    // <div className="group relative block overflow-hidden shadow-lg">
    //   <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
    //     <span className="sr-only">Wishlist</span>

    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       strokeWidth="1.5"
    //       stroke="currentColor"
    //       className="h-4 w-4"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
    //       />
    //     </svg>
    //   </button>
    //   <Link href={`/products/${id}`}>
    //     <Image
    //       width={200}
    //       height={200}
    //       src={images[0]}
    //       alt=""
    //       // loading="lazy"
    //       className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 cursor-pointer"
    //     />
    //   </Link>

    //   <div className="relative border border-gray-100 bg-white p-4">
    //     {/* <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
    //       {" "}
    //       New{" "}
    //     </span> */}

    //     <h3 className="mt-4 text-sm md:text-lg font-medium text-gray-900">
    //       {title.slice(0, 30)}..
    //     </h3>

    //     <p className="mt-1.5 text-sm text-gray-700">${price}</p>
    //     <div className="mt-1.5 text-md text-gray-700">
    //       <ReactStars
    //         // count={5}
    //         value={rating}
    //         size={20}
    //         edit={false}
    //         activeColor="#ffd700"
    //       />
    //     </div>

    //     <div className="mt-2">
    //       <button
    //         onClick={() => handleAddedCart(product)}
    //         className="block w-full rounded bg-yellow-400 p-2 md:p-4 text-sm font-medium transition hover:scale-105"
    //       >
    //         Add to Cart
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      <a href="#">
        <Link
          href={`/products/${id}`}
          className="relative flex items-end overflow-hidden rounded-xl"
        >
          <img
            src={images[0]}
            alt="Hotel Photo"
            className=" object-contain w-full h-52  cursor-pointer"
          />
        </Link>

        <div className="mt-1 p-2">
          <h2 className="text-slate-700"> {title.slice(0, 25)}..</h2>
          <p className="mt-1 text-sm text-slate-400">
            <div className="mt-1.5 text-md text-gray-700">
              <ReactStars
                // count={5}
                value={rating}
                size={20}
                edit={false}
                activeColor="#ffd700"
              />
            </div>
          </p>

          <div className="mt-3 flex items-end justify-between flex-col md:flex-row">
            <p className="text-lg font-bold text-blue-500">${price}</p>

            <div className="flex items-center space-x-1.5 rounded-lg bg-yellow-400 px-4 py-1.5  duration-100 hover:bg-yellow-600 font-semibold">
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
      </a>
    </article>
  );
};

export default ProductsCard;
