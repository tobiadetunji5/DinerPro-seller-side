import React from "react";
import Image from "next/image";

export default function Card({ food }) {
  return (
    <div className="w-[181px] h-[200px] border border-[#CCCCCC] rounded-lg overflow-hidden">
      <div className="relative w-[100%] h-[119px]">
        <Image
          style={{ objectFit: "cover" }}
          src={food.imageUrl}
          alt="food-image"
          priority
        />
      </div>
    </div>
  );
}
