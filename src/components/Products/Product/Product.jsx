import React, { useContext, useEffect, useState } from "react";
import styles from "./Product.module.css";
import axios from "axios";

const Product = ({ prodId }) => {

  const [data, setdata] = useState({});
  useEffect(() => {
    const getData = async () => {
      const res = await axios(`http://localhost:8080/products/${prodId}`);
      setdata(res.data);
    };
    getData();
  }, []);

  const [cartItem, setcartItem] = useState({});
  useEffect(() => {
    const getData = async () => {
      const res = await axios(`http://localhost:8080/cartItems/${prodId}`);
      setcartItem(res.data);
    };
    getData();
  }, []);
  
  const countupdate = (val) => {
    setcartItem(cartItem.count+val)
  }

const addtocart = (val) => {
  setcartItem(
    ...cartItem,
    cartItem.count = cartItem.count + val,
  )
}
  return (
    <div data-cy={`product${data.id}`} className={styles.prodiv}>
      <h3 data-cy="product-name">{data.name}</h3>
      <h6 data-cy="product-description">{data.description}</h6>
      <button data-cy="product-add-item-to-cart-button" onClick={()=>addtocart(1)}>Add to Cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={()=>countupdate(1)}>+</button>
        <span data-cy="product-count">{cartItem.count}</span>
        <button data-cy="product-decrement-cart-item-count-button"  onClick={()=>countupdate(-1)}>-</button>
        <button data-cy="product-remove-cart-item-button" >
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
