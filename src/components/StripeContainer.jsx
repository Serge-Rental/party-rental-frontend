import React, {useState, useEffect} from 'react';
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from "./PaymentForm"

// This is your test publishable API key.
const PUBLIC_KEY = "pk_test_51N0T1wB9C4gwKyEV7VjH2LL51ogZwz729gpatejayTfypodoNZqdo6uxCiW8vrP33MG8KsdMLH8rKq7iAWH95XeY00QcjDdn79"
const stripeTestPromise = loadStripe(PUBLIC_KEY)

const StripeContainer = ({shipping}) => {
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:3005/payment", {
          method: "POST",
          mode:"cors",
        //   headers: { "Content-Type": "application/json" },
          body: JSON.stringify({}),
        })
          .then(async(res) => {
            var {clientSecret} = await res.json();
            console.log("clientSecret", clientSecret)
            setClientSecret(clientSecret)
        })
        //   .then((data) => console.log("dta", data))
        //     .then((data) => {setClientSecret(data)});
      }, []);
      
    const appearance = {
        theme: 'stripe',
      };
      const options = {
        clientSecret,
        appearance,
      };
      console.log("clientSecret-down", clientSecret)
    
    return (
        <div>
             {clientSecret && (
            <Elements options={options} stripe={stripeTestPromise}>
                <PaymentForm  shipping={shipping}/>
            </Elements>
        )} 
        </div>
      
       
    );
};

export default StripeContainer;