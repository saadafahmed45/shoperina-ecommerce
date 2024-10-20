"use client";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { redirect, useRouter } from "next/navigation";

export const MyContext = createContext([]);

const ContextProvider = ({ children }) => {
  // cart state
  const [cartItems, setCartItems] = useState([]);

  // products data fetch start
  const [visible, setVisible] = useState(8);
  // main products
  const [products, setProducts] = useState([]);
  // loading products
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/`)
      .then((response) => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const visibleProducts = products.slice(0, visible);

  const loadMore = () => {
    setVisible(visible + 8);
  };
  // products data fetch end
  const router = useRouter();
  // cart fun start
  const handleAddedCart = (item) => {
    console.log(item);

    let copyExistingCartItem = [...cartItems];
    const findIndexOfCurrentItem = copyExistingCartItem.findIndex(
      (cartItems) => cartItems.id == item.id
    );
    console.log(findIndexOfCurrentItem);

    if (findIndexOfCurrentItem === -1) {
      copyExistingCartItem.push({
        ...item,
        quantity: 1,
        totalPrice: item.price,
      });
    } else {
      router.push("/cart");
    }
    setCartItems(copyExistingCartItem);
    localStorage.setItem("cartItems", JSON.stringify(copyExistingCartItem));
    console.log(cartItems);
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
  // cart fun end

  return (
    <MyContext.Provider
      value={{
        cartItems,
        handleAddedCart,
        visibleProducts,
        visible,
        loadMore,
        products,
        loading,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
