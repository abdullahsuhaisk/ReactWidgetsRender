import React, { useState } from "react";
import WishList from "./WhishList";
import Login from "./login";
import Products from "./Products";

import "./styles.css";

const MyComponentService = {
  login: <Login />,
  product: <Products />,
  wishlist: <WishList />
};

const jsonTemplate = {
  tabs: [
    {
      title: "Login",
      key: "login"
    },
    {
      title: "Wishlist",
      key: "wishlist"
    },
    {
      title: "Products",
      key: "product"
    }
  ]
};

function buildMenu(tabs, callback) {
  return tabs.map(item => (
    <button key={item.title} onClick={() => callback(item.key)}>
      {item.title}
    </button>
  ));
}
function App() {
  const [tab, setTab] = useState(jsonTemplate.tabs[0].key);
  return (
    <>
      {buildMenu(jsonTemplate.tabs, setTab)}
      <hr />
      <div className="App">{MyComponentService[tab]}</div>
    </>
  );
}

export default App;
