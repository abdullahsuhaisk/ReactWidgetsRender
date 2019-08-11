import React from "react";

const Products = props => {
  console.log(props);
  return (
    <div className="tab-Products">
      <span>Products Component</span>
      <hr />
      {props.products.map((product, key) => {
        return (
          <div className="products" key={key}>
            <span>{product.name}</span>
            <span>{product.price}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
