import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyle from "./styles";
import { Input } from "antd";
import "./search.css";
import { useState, useEffect } from "react";
const { Search } = Input;
const Products = ({ products, onAddToCart }) => {
  const classes = useStyle();

  const [allProducts, setAllProducts] = useState(products);

  const searchFilterFunction = (e) => {
    const inputValue = e;
    if (inputValue !== "") {
      const newArray = products.filter((item) => {
        return item.name.toLowerCase().match(inputValue);
      });
      setAllProducts(newArray);
    } else {
      setAllProducts(products);
    }
  };

  useEffect(() => {
    setAllProducts(products);
  }, [products]);
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
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container n="center" spacing={4}>
          {allProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
      </main>
    </>
  );
};
export default Products;
