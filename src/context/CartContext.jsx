import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setcart] = useState(false);
  console.log('cart:', cart)

  useEffect(()=> {
    const getData = async () => {
      const res = await axios("http://localhost:8080/cartItems");
      setcart(res.data);
    }
    getData();
  }, [] )

  const updateCart = (id) => {
      const update = async ( ) => {
        const res =  axios.patch(`http://localhost:8080/cartItems/${id}`);
        setcart(res.data)
        window.location.reload();
      }
      update();
  };

  const deleteCart = (id) => {
        const deleteData =  async () => {
              const res = await axios.delete(`http://localhost:8080/cartItems/${id}`);
              window.location.reload();
        };
        deleteData();
  };


  return <CartContext.Provider value={{ cart, updateCart, deleteCart }}>{children}</CartContext.Provider>;
};
