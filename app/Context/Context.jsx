"use client";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export const MyContext = createContext([]);

const ContextProvider = ({ children }) => {
  // cart state
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

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

  const router = useRouter();

  // Cart Functions Start

  // Add to cart
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

  // Increment quantity
  const incrementQuantity = (id) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
          totalPrice: (item.quantity + 1) * item.price,
        };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  // Decrement quantity
  const decrementQuantity = (id) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
          totalPrice: (item.quantity - 1) * item.price,
        };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  // Remove from cart
  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  // Calculate subtotal
  // const calculateSubtotal = () => {
  //   return cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  // };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  console.log(subtotal);
  console.log(cartItems);

  // Cart Functions End

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
        incrementQuantity,
        decrementQuantity,
        removeFromCart,
        subtotal,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
