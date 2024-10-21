"use client";
import React, { useContext } from "react";
import { MyContext } from "../../Context/Context";

function CheckoutPage() {
  const {
    cartItems,
    handleAddedCart,
    visibleProducts,
    visible,
    loadMore,
    products,
    loading,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    subtotal,
  } = useContext(MyContext);
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Checkout</h2>

        {/* Cart Items */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h3 className="text-xl font-medium mb-4">Your Cart</h3>
          <div className="space-y-4">
            {cartItems.map(
              ({
                id,
                images,
                title,
                price,
               
                thumbnail,
                quantity,
                totalPrice,
                description,
              }) => (
                <div key={id} className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-medium">{title}</h4>
                    <p className="text-sm text-gray-500">
                      {description.slice(0, 90)}...
                    </p>
                  </div>
                  <div className="text-lg font-medium">
                    ${totalPrice.toFixed(2)}
                  </div>
                </div>
              )
            )}

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-medium">Total</h4>
              </div>
              <div className="text-lg font-bold">${subtotal.toFixed(2)}</div>
            </div>
          </div>
        </div>

        {/* Billing Information */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h3 className="text-xl font-medium mb-4">Billing Information</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                className="w-full border-gray-300 rounded-lg shadow-sm"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border-gray-300 rounded-lg shadow-sm"
                placeholder="johndoe@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <input
                type="text"
                className="w-full border-gray-300 rounded-lg shadow-sm"
                placeholder="123 Main St."
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <input
                type="text"
                className="w-full border-gray-300 rounded-lg shadow-sm"
                placeholder="Los Angeles"
              />
            </div>
            <div className="flex space-x-4">
              <div>
                <label className="block text-sm font-medium mb-1">State</label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-lg shadow-sm"
                  placeholder="CA"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  ZIP Code
                </label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-lg shadow-sm"
                  placeholder="90001"
                />
              </div>
            </div>
          </form>
        </div>

        {/* Payment Information */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-medium mb-4">Payment Information</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Card Number
              </label>
              <input
                type="text"
                className="w-full border-gray-300 rounded-lg shadow-sm"
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div className="flex space-x-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Expiration Date
                </label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-lg shadow-sm"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">CVV</label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-lg shadow-sm"
                  placeholder="123"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium"
              >
                Complete Purchase
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
