import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    height: "550px",
  },

  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
    // maxHeight: "100%",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    // maxHeight: "100%",
    // height: "300px",
  },
  desc: {
    fontSize: "12px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "4" /* number of lines to show */,
    lineClamp: "4",
    WebkitBoxOrient: "vertical",
  },

  product__card: {
    justifyContent: "flex-end",
    display: "flex",
    // maxHeight: "100%",
  },

  product__image: {
    display: "block",
    marginLeft: "auto",
    width: "100%",
    // maxHeight: "400px",
    // height: "100%",
    maxHeight: "300px",
  },
}));
