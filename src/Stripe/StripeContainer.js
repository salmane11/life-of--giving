import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51KbMTdJLPSKAHZMjauZx3ZGg06G1VacpYZhB4ST3g2uzS0QnsjFTi9tC1Vl0b5TQjFl6pv1J5EfBHoD6nUWgmnUC0032Xd2VRx";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;