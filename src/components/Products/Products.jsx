import React, { useEffect, useState } from "react";
import Product from "./Product/Product";
import axios from "axios";
import styles from "./Products.module.css";

const Products = () => {

  const [data, setdata] = useState([]);

  useEffect(()=> {
    const getData = async () => {
      const res = await axios("http://localhost:8080/products");
      setdata(res.data);
    }
    getData();
  }, [] );

  return <div>
        <h1>Products</h1>
        <div className={styles.griddiv}>
          {data.map(item=> (
              <Product key={item.id}  prodId={item.id} />
          ))}
        </div>
    </div>;
};

export default Products;
