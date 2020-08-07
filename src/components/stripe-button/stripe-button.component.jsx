import React from "react";
import StripeCheckout from "react-stripe-checkout";

import Logo from "../../assets/logo.svg";

//price need to be in cents
const StripeCheckoutButton = ({ price }) => {
  const publishableKey =
    "pk_test_51HCtW2DYHg7OfpodHLfwmR8GKYIgx1zJMkYj2rwAWTOxLH9HppTLxh30pXatVSmepWsEmMpo4YrmmQOWuzxwEtWj00DkoIgEJ7";
  const priceForStripe = price * 100;

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful");
  };

  return (
    <StripeCheckout
      amount={priceForStripe}
      billingAddress
      currency="CAD"
      description={`Your total is CAD$${price}`}
      image={Logo}
      label="Pay Now"
      name="Fav Restaurant"
      panelLabel="Pay Now"
      shippingAddress
      stripeKey={publishableKey}
      token={onToken}
    />
  );
};

export default StripeCheckoutButton;
