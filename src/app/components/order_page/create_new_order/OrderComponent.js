import React from "react";
import FoodContainer from "./FoodContainer";
import CartContainer from "./CartContainer";

export default function OrderComponent() {
  return (
    <div className="flex items-start justify-between px-12">
      <FoodContainer />
      <CartContainer />
    </div>
  );
}
