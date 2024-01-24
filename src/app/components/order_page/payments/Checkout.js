"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CurrencyFormatter from "../../../../../utils/formatCurrency";
import Image from "next/image";
import {
  initializeCartFromCookies,
  deleteItem,
} from "@/redux/features/cart/cartSlice";
import { MdDelete } from "react-icons/md";
import Link from "next/link";

export default function Checkout({ title, path }) {
  const [loading, setLoading] = useState(true);
  const cartItems = useSelector((store) => store.cart.cartItems) || [];
  // console.log(cartItems);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(initializeCartFromCookies());
    setLoading(false);
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleRemoveFromCart = (item) => {
    dispatch(deleteItem({ id: item.id }));
  };

  //calculate the subtotal
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  //discount value
  const discount = 1000;
  //calculating total amount
  const total = subtotal - discount;

  return (
    <div className="w-[30%] border border-primary rounded-lg h-[92vh] p-5 overflow-y-auto flex flex-col">
      <h1 className="text-[1.3rem] font-bold py-2">{title}</h1>
      <div>
        <ul className="flex items-center justify-between space-x-4 bg-gray-200">
          <li className="w-2/5">Items</li>
          <li className="w-1/5 items-center">Qty</li>
          <li className="w-2/5">Amount</li>
        </ul>
        <hr className="border-silver mt-3" />
      </div>

      {cartItems ? (
        cartItems.map((item) => {
          return (
            <div
              key={item.id}
              className="flex items-center justify-between space-x-4 mb-2"
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
                  <p className="p-1">{item.quantity}</p>
                </div>
              </div>
              <div className="w-1/5">
                <p>
                  <CurrencyFormatter value={item.totalPrice} />
                </p>
              </div>
              <div className="w-1/5">
                <button onClick={() => handleRemoveFromCart(item)}>
                  <MdDelete size={25} />
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <p>cart items loading...</p>
      )}
      <div className="p-5">
        <hr className="border-[#ccc] mt-5" />
        <div className="flex justify-between mt-5">
          <p>subtotal: </p>
          <CurrencyFormatter value={subtotal} />
        </div>
        <div className="flex justify-between">
          <p>discount: </p>
          <CurrencyFormatter value={discount} />
        </div>
        <hr className="border-[#ccc] mt-5" />
        <div className="flex justify-between mt-5">
          <p>total: </p>
          <CurrencyFormatter value={total} />
        </div>
      </div>
      <div className="flex justify-center">
        <Link href={path}>
          <button className="bg-primary p-5 w-[311px] rounded-lg">
            Print Invoice
          </button>
        </Link>
      </div>
    </div>
  );
}
