"use client";

import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { MyContext } from "../Context/Context";

const CartPage = () => {
  const { cartItems, setCartItems } = useContext(MyContext);
  const router = useRouter();

  const navigateToBackHome = () => {
    router.push("/");
  };

  const navigateToCheckout = () => {
    router.push("/cart/checkout");
  };

  const incrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <p>Your cart is empty</p>;
  }

  return (
    <div className="flex justify-center items-center mt-8 px-6 md:px-24 py-4 md:py-16">
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 bg-gray-50 text-gray-800">
        <h2 className="text-xl font-semibold">
          Your cart ({cartItems.length})
        </h2>
        <ul className="flex flex-col divide-y divide-gray-300">
          {cartItems.map(
            ({ images, title, price, id, thumbnail, quantity }) => (
              <li
                key={id}
                className="flex flex-col py-6 sm:flex-row sm:justify-between"
              >
                <div className="flex w-full space-x-2 sm:space-x-4">
                  <img
                    className="flex-shrink-0 object-cover w-20 h-20 border- rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
                    src={thumbnail}
                    alt={title}
                  />
                  <div className="flex flex-col justify-between w-full pb-4">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                          {title}
                        </h3>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold">{price}€</p>
                        <p className="text-sm line-through text-gray-400">
                          {price + 9}€
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm space-x-2">
                      <button
                        onClick={() => decrementQuantity(id)}
                        type="button"
                        className="px-2 py-1 border border-gray-400 rounded-md"
                      >
                        -
                      </button>
                      <p>{quantity}</p>
                      <button
                        onClick={() => incrementQuantity(id)}
                        type="button"
                        className="px-2 py-1 border border-gray-400 rounded-md"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(id)}
                        type="button"
                        className="ml-4 text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total amount:{" "}
            <span className="font-semibold">{subtotal.toFixed(2)} €</span>
          </p>
          <p className="text-sm text-gray-600">
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            onClick={navigateToBackHome}
            type="button"
            className="px-6 py-2 border rounded-md border-violet-600"
          >
            Back to shop
          </button>
          <button
            onClick={navigateToCheckout}
            type="button"
            className="px-6 py-2 border rounded-md bg-violet-600 text-gray-50 border-violet-600"
          >
            Continue to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
