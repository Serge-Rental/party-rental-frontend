/** @format */

import React, { useState, useEffect } from "react";
import "./Checkout.css";
import { useForm } from "react-hook-form";
import StripeContainer from "./StripeContainer";
import useFetchAll from "../servives/useFetchAll";
import Spinner from "./Spinner";

function Checkout({cart}) {
  const urls = cart.map((i) => `products/${i.id}`);
  const { data: products, loading, error } = useFetchAll(urls);
  
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const [shipping, setShipping] = useState([])

  function renderItem(itemInCart) {
    const { id, quantity } = itemInCart;
    console.log("checkout", error)
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

  const onSubmit = (data) => {
    console.log("form data", data)
    setShipping(data)
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        firstName:"",
        lastName:"",
        email: "",
        confirmEmail:"",
        street1: "",
        street2: "",
        city:"",
        state: "",
        zipCode: "",
        phone: ""
        
      });
    }
  }, [formState, shipping, reset]);

  let totalItems = 0
  let totalPrice = 0
  if (!loading){
      totalItems = cart.reduce((total, item) => total + item.quantity, 0);
      totalPrice = products.reduce((total, p, idx) => {
        return total + p.product.price * cart[idx].quantity;
      }, 0);
  }


  return (
    <div className="checkout">
      {/* <h1>Checkout</h1> */}
      
        <section className="user-info">
          <div className="shipping">
            <p>Ship to</p>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className={`${
                errors.firstName?.type === "required" && "error-control"
              }`}
              {...register("firstName", { required: true, maxLength: 20 })}
              placeholder="First Name"
              aria-invalid={errors.firstName ? "true" : "false"}
            />
            {/* {errors.firstName?.type === 'required' && <p role="alert">*First name is required</p>}  */}
            <input
              className={`${
                errors.lastName?.type === "required" && "error-control"
              }`}
              {...register("lastName", { required: true, maxLength: 20 })}
              placeholder="Last Name"
              aria-invalid={errors.firstName ? "true" : "false"}
            />
            {/* {errors.firstName?.type === 'required' && <p role="alert">*Last name is required</p>} */}

            <input
              className={`${
                errors.email?.type === "required" && "error-control"
              }`}
              {...register("email", { required: true, maxLength: 25 })}
              placeholder="Email"
            />
            <input
              className={`${
                errors.confirmEmail?.type === "required" && "error-control"
              }`}
              {...register("confirmEmail", { required: true, maxLength: 25 })}
              placeholder="Confirm Email"
            />
            <input
              className={`${
                errors.street1?.type === "required" && "error-control"
              }`}
              {...register("street1", { required: true, maxLength: 20 })}
              placeholder="Street 1"
            />
            <input {...register("street2")} placeholder="Street 2 (optional)" />
            <input
                className={`${
                    errors.city?.type === "required" && "error-control"
                  }`}
              {...register("city", { required: true, maxLength: 20 })}
              placeholder="City"
            />
            <select
              className={`${
                errors.state?.type === "required" && "error-control"
              }`}
              {...register("state")}
            >
              <option value="newYork">New York</option>
              <option value="newJersey">New Jersey</option>
              <option value="connecticut">Connecticut</option>
            </select>
            <input
              className={`${
                errors.zipCode?.type === "required" && "error-control"
              }`}
              {...register("zipCode", { required: true, maxLength: 20 })}
              placeholder="Zip Code"
            />
            <input
              className={`${
                errors.phone?.type === "required" && "error-control"
              }`}
              {...register("phone", { required: true, maxLength: 20 })}
              placeholder="Phone Number"
            />
            <br></br>
            <button type="submit">
              Confirm and Save
            </button>
            {/* <input type="submit" /> */}
            </form>
            
          </div>
          
          <div className="payment">
            <p>Payment</p>
            <StripeContainer shipping={shipping} />
          </div>
        </section>

        <section className="order-info">
          <div className="order">
            {/* {!loading ? <Spinner /> :
            <> */}
            <p>
                <strong>Subtotal {`(${totalItems})`}</strong> : <span>${totalPrice}</span>
              </p> 
              <p><strong>Shipping</strong>: FREE</p>
            {/* </>
              
            } */}
          </div>
          <div className="review-items">
            <p>Review yours items</p>
            {loading ? <Spinner /> :
            <ul>
              {cart.map(renderItem)}
            </ul>
            }
          </div>
        </section>
      
    </div>
  );
}

export default Checkout;
