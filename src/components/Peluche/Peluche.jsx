import "./Peluche.css";
import { Grid } from "@material-ui/core";
import Product from "../Products/Product/Product";
import { useEffect } from "react";
import { useState } from "react";
import React from "react";
import { Input } from "antd";
import "../Products/search.css";
const { Search } = Input;

const Peluche = (props) => {
  const { products, onAddToCart } = props;
  const [peluche, setPeluche] = useState([]);

  const filterProduct = () => {
    let newArr = [];
    for (let i = 0; i < products.length; i++) {
      for (let j = 0; j < products[i].categories.length; j++) {
        let p = products[i].categories[j];
        if (p.id === "cat_aZWNoy6g2580JA") {
          newArr.push(products[i]);
        }
      }
    }
    setPeluche(newArr);
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
      setPeluche(newArray);
    } else {
      setPeluche(products);
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
      <h1>Pèluches</h1>
      <div className="soin">
        <Grid container n="center" spacing={4}>
          {peluche.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Peluche;
