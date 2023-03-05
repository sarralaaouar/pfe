import React from 'react'
import "./Soin.css";
import { Grid } from "@material-ui/core";
import Product from "../Products/Product/Product";
import { useEffect } from "react";
import { useState } from "react";


const Soin = (props) => {
  const { products, onAddToCart } = props;
  const [soin, setSoin] = useState([]);

  const filterProduct = () => {
    let newArr = [];
    for (let i = 0; i < products.length; i++) {
      for (let j = 0; j < products[i].categories.length; j++) {
        let p = products[i].categories[j];
        if (p.id === "cat_G6kVw7MGE52eDx") {
          newArr.push(products[i]);
        }
      }
    }
    setSoin(newArr);
  };

  useEffect(() => {
    filterProduct();
  }, [products]);

console.log(products);
  return (
    <div className="soin">
      <Grid container n="center" spacing={4}>
          {soin.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
    </div>
  )
}

export default Soin;
