import React, { useState } from "react";

import { MyComponentService } from "./utils/ComponentService";
import { useCss, useTemplate } from "./Hooks/templateHooks";

function buildMenu(tabs, callback) {
  return tabs.map(item => (
    <button
      key={item.title}
      onClick={() => callback(item.key)}
      className="button-tab"
    >
      {item.title}
    </button>
  ));
}
function App() {
  useCss("/style/styles.css");
  const tema = useTemplate();
  const [tab, setTab] = useState("login");
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
      {tema && buildMenu(tema.tabs, setTab)}
      <hr />
      <div className="App">
        <Component products={products} />
      </div>
    </>
  );
}

export default App;
