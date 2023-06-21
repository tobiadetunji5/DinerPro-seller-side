import React from "react";
import { foodArrays } from "../../../../../utils/cartData";
import Card from "./Card";

export default function FoodContainer() {
  return (
    <div className="overflow-x-auto">
      <div className="relative pr-12 pl-12 flex flex-col w-[700px] h-[830px] overflow-hidden border border-[#CCCCCC] rounded-lg">
        <div className="flex">
          <div>my menu</div>
          <div>menu settings</div>
        </div>
        <div>
          {foodArrays.map((food, i) => (
            <Card key={i} food={food} />
          ))}
        </div>
      </div>
    </div>
  );
}
