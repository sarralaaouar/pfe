import React from "react";
import {
  AppBar,
  Toolbar,
  Badge,
  IconButton,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingBasket, PermIdentity, ExitToApp } from "@material-ui/icons";
import { Link, useHistory, useLocation } from "react-router-dom";

import logo from "../../assests/logo.png";
import UseStyles from "./styles";

const Navbar = ({ totalItems }) => {
  const classes = UseStyles();
  const location = useLocation();
  const navigate = useHistory();
  let userString = localStorage.getItem("disney_user");

  return (
    <div className="header" style={{ marginBottom: "50px" }}>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to=""
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="Disney Store"
              height="25px"
              className={classes.image}
            />
            Disney Store
          </Typography>
          <Typography>{/* <Search></Search> */}</Typography>
          <div className={classes.grow} />
          {/* { location.pathname =='/' && ( */}
          <div className={classes.button}>
            <IconButton
              component={Link}
              to="/cart"
              aria-label="show cart items"
              color="inhert"
            >
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingBasket />
              </Badge>
            </IconButton>
          </div>
          <div className={classes.button}>
            <IconButton
              component={Link}
              to={userString ? "/profile" : "/login"}
              aria-label="login"
              color="inhert"
            >
              <Badge color="secondary">
                <PermIdentity />
              </Badge>
            </IconButton>
          </div>
          {userString && (
            <div className={classes.button}>
              <IconButton
                aria-label="login"
                color="inhert"
                onClick={() => {
                  localStorage.removeItem("disney_user");
                  navigate.push("/login");
                }}
              >
                <Badge color="secondary">
                  <ExitToApp />
                </Badge>
              </IconButton>
            </div>
          )}
          {/* )} */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
