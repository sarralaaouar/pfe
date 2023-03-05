import React from "react";

export default function Bestp(props) {
  return (
    <div>
      <div className="card">
        <img className="product--image" src={props?.url} alt="product image" />
        <p className="name_product">{props?.name}</p>
        <p>
          <button onClick={() => props?.onAddToCart(props?.id, 1)}>
            Add to Cart
          </button>
        </p>
      </div>
    </div>
  );
}
