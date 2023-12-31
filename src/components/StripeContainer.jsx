import React, {useState, useEffect} from 'react';
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from "./PaymentForm"

// This is your test publishable API key.
const PUBLIC_KEY = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
const stripeTestPromise = loadStripe(PUBLIC_KEY)

const StripeContainer = ({totalPrice, emptyCart, cart}) => {
    const [clientSecret, setClientSecret] = useState('');
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:3005/payment", {
          method: "POST",
          mode:"cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ items: [{ id: "xl-tshirt", amount: totalPrice }]}),
        })
          .then(async(res) => {
            var {clientSecret} = await res.json();
            console.log("clientSecret", clientSecret)
            setClientSecret(clientSecret)
        })
        //   .then((data) => console.log("dta", data))
        //     .then((data) => {setClientSecret(data)});
      }, [totalPrice]);
      
    const appearance = {
        theme: 'stripe',
      };
      const options = {
        clientSecret,
        appearance
      };
    
    return (
        <div>
             {clientSecret && (
            <Elements options={options} stripe={stripeTestPromise}>
                <PaymentForm  emptyCart={emptyCart} cart={cart}/>
            </Elements>
        )} 
        </div>
      
       
    );
};

export default StripeContainer;