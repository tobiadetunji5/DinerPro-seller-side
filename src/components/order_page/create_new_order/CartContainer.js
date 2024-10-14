"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CurrencyFormatter from "../../../../utils/formatCurrency";
import Image from "next/image";
import shoppingCart from "/public/images/shoppingCart.png";
import {
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  initializeCartFromCookies,
} from "@/redux/features/cart/cartSlice";
import { MdDelete } from "react-icons/md";
import Link from "next/link";

export default function CartContainer({ title, path, onClick }) {
  const [loading, setLoading] = useState(true);
  const cartItems = useSelector((state) => state.cart.cartItems) || [];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeCartFromCookies());
    setLoading(false); // Set loading to false immediately after dispatching
  }, [dispatch]);

  if (loading) {
    // loading state
    return <p>Loading...</p>;
  }

  const handleRemoveFromCart = (item) => {
    dispatch(deleteItem({ id: item.id }));
  };

  const handleIncreaseQuantity = (item) => {
    dispatch(increaseQuantity({ id: item.id }));
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseQuantity({ id: item.id }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="w-[400px] border border-primary rounded-lg p-5 overflow-y-auto flex flex-col">
      <h1 className="text-[1.3rem] font-bold py-2">{title}</h1>
      <div className="w-[340px]">
        <ul className="flex items-center justify-between bg-gray-200">
          <li className="">Items</li>
          <li className="w-[90px] text-right items-center">Qty</li>
          <li className="w-[100px] items-center">Amount</li>
        </ul>
        <hr className="border-silver mt-3" />
      </div>
      {cartItems.length === 0 ? (
        <div className="h-full flex flex-col items-center justify-center">
          <div className="relative h-[54px]">
            <Image
              src={shoppingCart}
              fill
              style={{ objectFit: "cover" }}
              alt="shopping-cart"
              sizes="(max-width: 74px) 100vw"
              placeholder="blur"
            />
          </div>
          <p>You have not made any orders</p>
        </div>
      ) : (
        <>
          {cartItems.map((item, i) => {
            // console.log(item);
            return (
              <div
                key={i}
                className="flex items-center justify-between space-x-4 mb-2 w-[380px]"
              >
                <div className="w-2/5">
                  <div className="relative w-[100px] h-[70px] mt-2">
                    <Image
                      src={item.selectedPicture}
                      fill
                      style={{ objectFit: "contain" }}
                      alt={item.itemName}
                      className="rounded-lg"
                      sizes="(max-width: 100px) 100vw"
                      priority
                    />
                  </div>
                  <p>{item.itemName}</p>
                </div>
                <div className="w-1/5">
                  <div className="flex items-center">
                    <button
                      className={`px-2 py-1 border ${
                        item.quantity === 1
                          ? "border-red-700"
                          : "border-red-700"
                      } rounded-md`}
                      onClick={() => handleDecreaseQuantity(item)}
                    >
                      -
                    </button>
                    <p className="p-1">{item.quantity}</p>
                    <button
                      className="px-2 py-1 border border-green-700 rounded-md"
                      onClick={() => handleIncreaseQuantity(item)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="w-1/5 pl-2">
                  <p>
                    <CurrencyFormatter value={item.totalPrice} />
                  </p>
                </div>
                <div className="w-1/5 pl-2">
                  <button onClick={() => handleRemoveFromCart(item)}>
                    <MdDelete size={25} />
                  </button>
                </div>
              </div>
            );
          })}
          <div>
            <div className="p-5 bg-[#F3F3FE] rounded-lg flex flex-row mt-10 justify-between">
              <p>Item total</p>
              <p>
                <CurrencyFormatter value={totalAmount} />
              </p>
            </div>
            <div className="p-5 flex flex-row mt-5 justify-between">
              <Link href={path}>
                <button
                  onClick={onClick}
                  className="border border-green-700 text-green-700 hover:bg-green-700 hover:text-white mr-2 p-5 w-[150px] rounded-lg"
                >
                  Confirm
                </button>
              </Link>

              <button
                className="border border-red-700 text-red-700 hover:bg-red-700 hover:text-white p-5 w-[200px] rounded-lg"
                onClick={handleClearCart}
              >
                Cancel
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
