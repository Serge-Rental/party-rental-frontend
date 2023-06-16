/** @format */

import React, {useMemo, useState} from "react";
import useFetchAll from "../servives/useFetchAll";
import "./Cart.css";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Cart({ cart, updateQuantity, deleteItem }) {
  const urls = cart.map((i) => `products/${i.id}`);
 
  const { data: products, loading, error } = useFetchAll(urls, cart)
  
  const navigate = useNavigate();

  function renderItem(itemInCart) {
    const { id, quantity } = itemInCart;
    const { product } = products.find((p) => p.product.id === parseInt(id));

    return (
      <li key={id} className="cart-item">
        <img src={product.imageURL} alt={product.name} />
        <div className="product-info">
          <h3>{product.name}</h3>
          <div className="product-info-p">
            <p>${product.price}</p>
            <p>
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
            </p>
          </div>
        </div>
      </li>
    );
  }
 
  if (loading) return <Spinner />;
  if (error) throw error;
  
  
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = products.reduce((total, p) => {
    // find matching quantity
    let prodQty = 0; 
    for (let i = 0; i < cart.length; i++) {
      const element = cart[i];
      if (parseInt(element.id) === p.product.id){
        prodQty += element.quantity
      }
    }
   
    return total + (p.product.price * prodQty);
  }, 0);

  return (
    <div className="cart">
      <section>
        <h1>Shopping Cart</h1>
        <ul>{cart.map(renderItem)}</ul>
      </section>
      <div className="subtotal">
        <p>
          Subtotal {`(${totalItems})`} : 
          <span>${totalPrice}</span>
        </p>
        <p>Shipping: FREE</p>
        <button
          disabled={cart.length === 0}
          className="btn-cart btn-primary-cart"
          onClick={() => {
            navigate("/checkout");
          }}
        >
          Proceed to checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
