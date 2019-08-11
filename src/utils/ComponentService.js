import React from "react";
import WishList from "../features/WhishList";
import Login from "../features/Login";
import Products from "../features/Products";

export const MyComponentService = {
  login: Login,
  product: props => Products(props),
  wishlist: WishList
};
