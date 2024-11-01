import React from "react";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";
import CurrencyFormatter from "../../../utils/formatCurrency";
import { useDispatch, useSelector } from "react-redux";
import { addToCart as addToCartAction } from "@/redux/features/cart/cartSlice";
import image from "/public/images/brand_logo/logo1.png";

export default function Card({ food }) {
  // const cartItems = useSelector((state) => state.cart);
  // console.log(cartItems);
  const dispatch = useDispatch();
  // const cart = useSelector((state) => state.cart) || [];

  const addToCart = () => {
    dispatch(
      addToCartAction({ ...food, selectedPicture: food.selectedPicture })
    );
  };

  const blurDataURL = `${food.imageUrl}?w=16&h=16&blur=16&auto=format%2Ccompress`;
  return (
    <button onClick={addToCart} className="">
      <div className="w-[240px] h-[200px] border border-secondary rounded-[10px] overflow-hidden">
        <div className="relative w-[100%] h-[119px]">
          <Image
            style={{ objectFit: "cover" }}
            src={food.selectedPicture || image}
            alt="food-image"
            fill
            priority
            sizes="(max-width: 235px) 100vw"
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
        </div>
        <div className="items-start bg-white p-2 justify-between hover:bg-primary font-bold">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[.8rem]">{food.itemName}</p>
              {/* <p className="text-[.7rem] font-semibold">{food.priceTag}</p> */}
              <p className="text-[.7rem]">
                <CurrencyFormatter value={food.price} />
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

          <p className="text-[.6rem]">Click to Order</p>
        </div>
      </div>
    </button>
  );
}
