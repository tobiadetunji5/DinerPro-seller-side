import React from "react";
import Form from "./Form";
import Checkout from "./Checkout";

export default function IndexPayments() {
  return (
    <div className="flex gap-5 justify-between px-12">
      <Form />
      <Checkout />
    </div>
  );
}
