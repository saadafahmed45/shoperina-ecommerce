"use client";
import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddedCart = (item) => {
    // setCartItems((prevCart) => [...prevCart, item]);
    console.log("added to cart");

    Swal.fire({
      title: "Are you sure?",
      text: "Your product are added to cart !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, added it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setCartItems((prevCart) => [...prevCart, item]);
        Swal.fire({
          title: "Added!",
          text: "Your Product has been Added.",
          icon: "success",
        });
      }
    });
  };
  console.log(cartItems.length);
  return (
    <MyContext.Provider value={{ cartItems, handleAddedCart }}>
      {children}
    </MyContext.Provider>
  );
};
