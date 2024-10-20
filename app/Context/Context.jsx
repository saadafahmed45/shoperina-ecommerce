"use client";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export const MyContext = createContext([]);

const ContextProvider = ({ children }) => {
  // cart state
  const [cartItems, setCartItems] = useState([]);

  // products data fetch start
  const [visible, setVisible] = useState(8);
  const [products, setProducts] = useState([]);
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

  // cart function start
  const handleAddedCart = (item) => {
    let copyExistingCartItem = [...cartItems];
    const findIndexOfCurrentItem = copyExistingCartItem.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (findIndexOfCurrentItem === -1) {
      copyExistingCartItem.push({
        ...item,
        quantity: 1,
        totalPrice: item.price,
      });
      setCartItems(copyExistingCartItem);
      localStorage.setItem("cartItems", JSON.stringify(copyExistingCartItem));

      Swal.fire({
        title: "Product added to cart!",
        text: "Would you like to view your cart?",
        icon: "success",
        showCancelButton: true,
        confirmButtonText: "Yes, go to cart",
        cancelButtonText: "Continue shopping",
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/cart");
        }
      });
    } else {
      Swal.fire({
        title: "Item already in the cart",
        text: "This product is already in your cart. Would you like to view it?",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Go to cart",
        cancelButtonText: "Keep shopping",
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/cart");
        }
      });
    }
  };

  // cart function end

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
        setCartItems
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
