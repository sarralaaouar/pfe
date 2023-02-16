import React from 'react'
import { Card, CardContent,CardActions,Typography,IconButton} from '@material-ui/core';
import { ShoppingBasket } from '@material-ui/icons';
import useStyles from './styles';

function Product  ({product, onAddToCart})  {
  const classes = useStyles();
  
  
  return (
    <Card className={classes.root}>
        <div className={classes.product__card}/>
      <img className={classes.product__image} src={product?.image?.url} alt={product.name} />
        <CardContent>
          <div className={classes.CardContent}>
            <Typography variant='h5' gutterBottom>
            {product.name}
            </Typography>
            <Typography variant='h5' >
            {product.price.formatted_with_symbol}
            </Typography>
          </div>
          <Typography dangerouslySetInnerHTML={{__html: product.description}} variant='body2' color='textSecondary'/>
        </CardContent>
        <CardActions disableSpacing className={classes.CardActions}>
          <IconButton aria-label='Add to Cart' onClick={()=> onAddToCart(product.id,1)}>
            <ShoppingBasket/>
          </IconButton>
        </CardActions>
    </Card>
  )
}
export default Product