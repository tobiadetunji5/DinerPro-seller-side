import React from "react";
import FoodContainer from "./FoodContainer";
import CartContainer from "./CartContainer";

export default function OrderComponent() {
  return (
    // <div className="flex gap-5 justify-between px-12">
    <div>
      <FoodContainer />
      <CartContainer title="My orders" path="/order/payments" />
    </div>
  );
}
