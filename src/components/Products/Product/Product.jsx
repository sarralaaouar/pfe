import React from 'react'
import { Card, CardMedia,CardContent,CardActions,Typography,} from '@material-ui/core';
import useStyles from './styles';

function Product  ({product})  {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia className={classes.media} image='' title={product.name}/>
        <CardContent>
          <div className={classes.CardContent}>
            <Typography variant='h5' gutterBottom>
            {product.name}
            </Typography>
            <Typography variant='h5' >
            {product.price}
            </Typography>
          </div>
          <Typography variant='h2' color='textSecondary'>{product.description}</Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.CardActions}>
          
        </CardActions>
    </Card>
  )
}
export default Product