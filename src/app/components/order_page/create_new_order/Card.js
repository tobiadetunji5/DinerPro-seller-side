import React from "react";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";
import CurrencyFormatter from "../../../../../utils/formatCurrency";
import { useDispatch, useSelector } from "react-redux";
import { addToCart as addToCartAction } from "@/redux/features/cart/cartSlice";

export default function Card({ food }) {
  // const cartItems = useSelector((state) => state.cart);
  // console.log(cartItems);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addToCartAction({ ...food, imageUrl: food.imageUrl }));
  };
  return (
    <div className="w-[240px] h-[200px] border border-secondary rounded-[10px] overflow-hidden">
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

          <AiFillHeart
            size={25}
            // className={` ${
            //   like ? "text-red-500" : "text-[#ccc]"
            // } cursor-pointer`}
            className="text-secondary"
          />
        </div>

        <button onClick={addToCart}>
          <p className="text-[.6rem] text-primary">Click to Order</p>
        </button>
      </div>
    </div>
  );
}
