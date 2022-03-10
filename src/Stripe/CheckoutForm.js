import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      //send token to backend here
      try{
        const { id } = paymentMethod;
        const response = await axios.post(
            "http://localhost:7000/stripe/charge", {
                amount: 999,
                id: id,
            }
        );
        console.log("Stripe 35 | data", response.data.success);
        if(response.data.success){
            console.log("CheckoutForm.js 25 | payment successful!");
        }
      } catch (error){
        console.log("CheckoutForm.js 28 | ", error);
      }
    } else {
      setError(error.message)
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '50%', backgroundColor: 'white' }}>
      <CardElement />
      <button>Pay</button>
      <span style={{color:"red"}}>{error ? error : null}</span>
    </form>
  );
};