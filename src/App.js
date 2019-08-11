import React, { useState } from "react";

import "./styles.css";
import { MyComponentService } from "./utils/ComponentService";

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
  const Component = MyComponentService[tab];
  const products = [
    {
      name: "Product 1",
      price: "100"
    },
    {
      name: "Product 2",
      price: "200"
    }
  ];
  return (
    <>
      {buildMenu(jsonTemplate.tabs, setTab)}
      <hr />
      <div className="App">
        <Component products={products} />
      </div>
    </>
  );
}

export default App;
