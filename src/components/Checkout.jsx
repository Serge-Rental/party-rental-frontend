/** @format */

import React, { useState, useEffect } from "react";
import "./Checkout.css";
import StripeContainer from "./StripeContainer";
import useFetchAll from "../servives/useFetchAll";
import Spinner from "./Spinner";

function Checkout({ cart, emptyCart }) {
  const urls = cart.map((i) => `products/${i.id}`);
  const { data: products, loading, error } = useFetchAll(urls);

  function renderItem(itemInCart) {
    const { id, quantity } = itemInCart;
    console.log("checkout", error);
    const { product } = products.find((p) => p.product.id === parseInt(id));

    return (
      <li key={id} className="checkout-item">
        <img src={product.imageURL} alt={product.name} />
        <div className="item-info">
          <h3>{product.name}</h3>
          <div className="item-info-p">
            <p>${product.price}</p>
            <p>Qty: {quantity}</p>
            {/* <p>
              <select
                aria-label={`Select quantity for ${product.name}`}
                onChange={(e) => updateQuantity(id, parseInt(e.target.value))}
                value={quantity}
              >
                <option value="1">Qty: 1</option>
                <option value="2">Qty: 2</option>
                <option value="3">Qty: 3</option>
                <option value="4">Qty: 4</option>
                <option value="5">Qty: 5</option>
              </select>
            </p>
            <p
              className="remove-item"
              onClick={() => {
                deleteItem(id);
              }}
            >
              Remove
            </p> */}
          </div>
        </div>
      </li>
    );
  }

  let totalItems = 0;
  let totalPrice = 0;
  if (!loading) {
    totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    totalPrice = products.reduce((total, p, idx) => {
      return total + p.product.price * cart[idx].quantity;
    }, 0);
  }

  return (
    <div className="checkout">
      {/* <h1>Checkout</h1> */}

      <section className="user-info">
        <section className="payment">
          <p>Shipping & Payment</p>
          <StripeContainer
            cart={cart}
            emptyCart={emptyCart}
            totalPrice={totalPrice}
          />
        </section>
      </section>

      <section className="order-info">
        <div className="order">
          {/* {!loading ? <Spinner /> :
            <> */}
          <p>
            <strong>Subtotal {`(${totalItems})`}</strong> :{" "}
            <span>${totalPrice}</span>
          </p>
          <p>
            <strong>Shipping</strong>: FREE
          </p>
          {/* </>
              
            } */}
        </div>
        <div className="review-items">
          <p>Review yours items</p>
          {loading ? <Spinner /> : <ul>{cart.map(renderItem)}</ul>}
        </div>
      </section>
    </div>
  );
}

export default Checkout;
