"use client";
import React from "react";
// import { foodArrays } from "../../../../utils/cartData";
import Card from "./Card";
import { AiOutlineSetting } from "react-icons/ai";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import Link from "next/link";
import { categories } from "../../../utils/categoriesData";
import { useSelector } from "react-redux";
import { store } from "@/redux/store";

export default function FoodContainer() {
  const addMenuItems = useSelector((store) => store.addMenu);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const catSlideLeft = () => {
    var cat_slider = document.getElementById("cat_slider");
    cat_slider.scrollLeft = cat_slider.scrollLeft - 500;
  };
  const catSlideRight = () => {
    var cat_slider = document.getElementById("cat_slider");
    cat_slider.scrollLeft = cat_slider.scrollLeft + 500;
  };
  return (
    <div className="relative pr-12 pl-12 flex flex-col  border border-secondary rounded-lg w-[900px] h-[829px]">
      <div className="flex items-center justify-between p-8">
        <h1 className="text-lg font-semibold">My Menu</h1>
        <Link href="/menu/menu_settings">
          <div className="flex items-center gap-2  border-gray p-1 border rounded-lg hover:bg-primary font-bold">
            <AiOutlineSetting size={22} />
            <span className="text-sm">Menu Settings</span>
          </div>
        </Link>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search menu"
          className="border border-secondary rounded-[40px] p-2 outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div className="flex items-center p-2">
        <div
          id="cat_slider"
          className="my-1 flex overflow-x-auto relative scrollbar-hide scroll scroll-smooth"
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className="px-2 border border-primary rounded-lg mx-2 w-full whitespace-nowrap shadow-md text-primary cursor-pointer"
            >
              {category.name}
            </div>
          ))}
        </div>
        <BiRightArrow
          onClick={catSlideRight}
          className="absolute right-10 cursor-pointer"
        />
        <BiLeftArrow
          onClick={catSlideLeft}
          className="absolute left-10 cursor-pointer"
        />
      </div>

      <div
        id="slider"
        className="grid grid-rows-3 gap-x-6 gap-y-4 grid-flow-col overflow-x-auto scroll whitespace-nowrap scroll-smooth scrollbar-hide"
      >
        {/* {foodArrays.map((food, i) => (
          <Card key={i} food={food} />
        ))} */}
        {addMenuItems.map((menuItem, i) => (
          <Card key={i} food={menuItem} />
        ))}
        <BiRightArrow
          onClick={slideRight}
          size={30}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
        />
        <BiLeftArrow
          onClick={slideLeft}
          size={30}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
        />
      </div>
    </div>
  );
}
