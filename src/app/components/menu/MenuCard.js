import React from "react";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import CurrencyFormatter from "../../../../utils/formatCurrency";

export default function MenuCard({ food }) {
  return (
    <div className="h-[200px] border border-secondary rounded-[10px] overflow-hidden">
      <div className="relative w-[100%] h-[119px]">
        <Image
          style={{ objectFit: "cover" }}
          src={food.imageUrl}
          alt="food-image"
          fill
          priority
          sizes="(max-width: 235px) 100vw"
          placeholder="blur"
        />
      </div>
      <div className="items-start bg-white p-2 justify-between">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[.8rem]">{food.foodName}</p>
            {/* <p className="text-[.7rem] font-semibold">{food.priceTag}</p> */}
            <p className="text-[.7rem]">
              <CurrencyFormatter value={food.priceTag} />
            </p>
          </div>

          <MdDelete size={25} />
        </div>

        <button>
          <p className="text-[.6rem] text-primary">Click to edit</p>
        </button>
      </div>
    </div>
  );
}
