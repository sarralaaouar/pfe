import React from 'react'
import { AppBar, Toolbar,Badge,IconButton,MenuItem,Menu,Typography  } from '@material-ui/core';
import { ShoppingBasket } from '@material-ui/icons';
import { Link ,useLocation} from 'react-router-dom';

import logo from '../../assests/logo.png';
import UseStyles from './styles';

const Navbar=({totalItems}) =>{
    const classes = UseStyles();
    const location = useLocation();
  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>
            <Typography component={Link} to='/' variant='h6' className={classes.title} color='inherit'>
              <img src={logo} alt='Disney Store' height='25px' className={classes.image}/>
              Disney Store
            </Typography>

            <Typography>
               <ul position='fixed' className={classes.ul} color='inherit' >
                <li className={classes.a}>
                  <a href='/mugs'>Mugs</a>
                </li>
                 <li className={classes.a}>
                   <a href='/pyjamas'>Pyjamas</a>
                </li>
                <li className={classes.a}>
                   <a href='/peluches'>Peluches</a>
                </li>
                
               </ul>
              
            </Typography>
            <div className={classes.grow}/>
            { location.pathname =='/' && (
            <div className={classes.button}>    
               <IconButton component={Link}  to='/cart' aria-label='show cart items' color='inhert'>
                 <Badge badgeContent={totalItems} color='secondary'>
                    <ShoppingBasket/>
                 </Badge>
               </IconButton>
            </div> )}
        </Toolbar>
      </AppBar>
    </>
    
  )
}

export default Navbar
