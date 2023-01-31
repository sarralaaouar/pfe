import React from 'react'
import { AppBar, Toolbar,Badge,IconButton,MenuItem,Menu,Typography  } from '@material-ui/core';
import { ShoppingBasket } from '@material-ui/icons';

import logo from '../../assests/logo.png';
import UseStyles from './styles';

const Navbar=() =>{
    const classes = UseStyles();
  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>
            <Typography variant='h6' className={classes.title} color='inherit'>
              <img src={logo} alt='Disney Store' height='25px' className={classes.image}/>
              Disney Store
            </Typography>
            <div className={classes.grow}/>
            <div className={classes.button}>
               <IconButton aria-label='show cart items' color='inhert'>
                 <Badge badgeContent={2} color='secondary'>
                    <ShoppingBasket/>
                 </Badge>
               </IconButton>
            </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
