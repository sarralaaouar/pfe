import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
  } from "@material-ui/core";
  import UseStyles from "./styles";
  import { Link, useLocation } from "react-router-dom";

  const Nav2 = ({ }) => {
    const classes = UseStyles();
    const location = useLocation();
    return (
      <>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
          <Toolbar>
            <Typography>
              <ul position="fixed" className={classes.ul} color="inherit">
                <li className={classes.a}>
                  <a href="/mugs">Mugs</a>
                </li>
                <li className={classes.a}>
                  <a href="/soin">Soin</a>
                </li>
                <li className={classes.a}>
                  <a href="/peluche">Peluches</a>
                </li>
              </ul>
            </Typography>
            
            
            
            {/* )} */}
          </Toolbar>
        </AppBar>
      </>
    );
  };
  
  export default Nav2;