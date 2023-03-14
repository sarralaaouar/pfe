import React from "react";
import "./Pyjamas.css";
import { Grid } from "@material-ui/core";
import Product from "../Products/Product/Product";
import { useEffect } from "react";
import { useState } from "react";
import { Input } from "antd";
import "../Products/search.css";
const { Search } = Input;

const Pyjamas = (props) => {
  const { products, onAddToCart } = props;
  const [pyjamas, setPyjamas] = useState([]);

  const filterProduct = () => {
    let newArr = [];
    for (let i = 0; i < products.length; i++) {
      for (let j = 0; j < products[i].categories.length; j++) {
        let p = products[i].categories[j];
        if (p.id == "cat_ZRjywM8Zal7Y8G") {
          newArr.push(products[i]);
        }
      }
    }
    setPyjamas(newArr);
  };

  useEffect(() => {
    filterProduct();
  }, [products]);

  const searchFilterFunction = (e) => {
    const inputValue = e;
    if (inputValue !== "") {
      const newArray = products.filter((item) => {
        return item.name.toLowerCase().match(inputValue);
      });
      setPyjamas(newArray);
    } else {
      setPyjamas(products);
    }
  };

  return (
    <>
      <div className="search">
        <Search
          placeholder="search for product"
          enterButton
          onChange={(e) => {
            searchFilterFunction(e.target.value);
          }}
        />
      </div>
      <h1>Mugs</h1>
      <div className="pyjamas">
        <Grid container n="center" spacing={4}>
          {pyjamas.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Pyjamas;
