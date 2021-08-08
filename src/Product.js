import React from "react";
import "./product.css";
function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <p>the lean strtup</p>

        <p className="product_price">
          <small>$</small>
          <strong>99.99</strong>
        </p>
        <div className="product_rating">
          <p>🌟</p>
          <p>🌟</p>
          <p>🌟</p>
        </div>
      </div>

      <img
        src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        alt=""
      />

      <button>add to card</button>
    </div>
  );
}

export default Product;
