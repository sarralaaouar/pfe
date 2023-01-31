import React from "react";
import  { Grid }  from "@material-ui/core";
import Product from "./Product/Product";
import useStyle from './styles';

const products = [
 {id : 1 ,name:'Mugs' , description:'Disney mugs.', price:'$5'} ,
 {id : 2, name:'Pyjamas' , description:'Disney pyjams.', price:'$10'} ,

];

const Products = ()=> {
  const classes = useStyle();
    return(
      <main className={classes.content}>
       <div className={classes.toolbar} /> 
        <Grid container n='center' spacing={4}>
           {products.map((product)=>(
            <Grid item key={product.id} xs={12}sm={6} md={4} lg={3}>
              <Product product={product}/>
            </Grid>
           ))}
        </Grid>

         
        
       </main>
    );


}
export default Products ;