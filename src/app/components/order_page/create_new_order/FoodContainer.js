"use client";
import React, { useEffect, useState, useRef } from "react";
import { foodArrays } from "../../../../../utils/cartData";
import Card from "./Card";
import { AiOutlineSetting } from "react-icons/ai";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";

export default function FoodContainer() {
  const [scrollInd, setScrollInd] = useState("b");
  const [scrollWidth, setScrollWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [visibleItems, setVisibleItems] = useState(1000);
  const itemContainerRef = useRef(null);
  const itemWidth = 250; // Width of each item in pixels
  const scrollOffset = 50; // Offset for scroll calculations

  useEffect(() => {
    const handleScroll = () => {
      if (itemContainerRef.current) {
        const { scrollLeft, offsetWidth } = itemContainerRef.current || {};
        const maxScrollLeft = scrollWidth - offsetWidth;

        if (scrollLeft <= 0) setScrollInd("b");
        else if (scrollLeft >= maxScrollLeft - scrollOffset) setScrollInd("e");
        else setScrollInd("m");
      }
    };

    if (itemContainerRef.current) {
      setScrollWidth(itemContainerRef.current.scrollWidth);
      setContainerWidth(itemContainerRef.current.offsetWidth);
      itemContainerRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (itemContainerRef.current) {
        itemContainerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollWidth]);

  console.log(itemContainerRef);
  const scrollNext = () => {
    if (itemContainerRef.current) {
      const { scrollLeft, offsetWidth } = itemContainerRef.current;
      const maxScrollLeft = scrollWidth - offsetWidth;
      const nextScrollLeft = Math.min(scrollLeft + itemWidth, maxScrollLeft);
      itemContainerRef.current.scrollTo({
        left: nextScrollLeft,
        behavior: "smooth",
      });
      setScrollInd("m");
      // console.log("Next button clicked. Scroll position:", nextScrollLeft);
    }
  };

  const scrollPrev = () => {
    if (itemContainerRef.current) {
      const { scrollLeft } = itemContainerRef.current;
      const prevScrollLeft = Math.max(scrollLeft - itemWidth, 0);
      itemContainerRef.current.scrollTo({
        left: prevScrollLeft,
        behavior: "smooth",
      });
      setScrollInd("m");
    }
  };

  return (
    <div className="overflow-x-auto">
      <div className="relative pr-12 pl-12 flex flex-col w-[850px] h-[829px] overflow-hidden border border-[#CCCCCC] rounded-lg">
        <div className="flex items-center justify-between p-8">
          <div>my menu</div>
          <div className="flex items-center gap-2">
            <AiOutlineSetting size={22} />
            <span>Menu Settings</span>
          </div>
        </div>
        <div className="p-2 border border-[#ccc]">Search bar</div>
        <div className="p-2 border border-[#ccc] my-1">categories</div>
        <div
          className="grid grid-rows-3 grid-flow-col gap-5 overflow-x-hidden w-full"
          ref={itemContainerRef}
        >
          {foodArrays.slice(0, visibleItems).map((food, i) => (
            <Card key={i} food={food} />
          ))}
        </div>
        {scrollInd === "b" || scrollInd === "m" ? (
          <BiRightArrow
            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={scrollNext}
            size={30}
          />
        ) : null}
        {scrollInd === "e" || scrollInd === "m" ? (
          <BiLeftArrow
            className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={scrollPrev}
            size={30}
          />
        ) : null}
      </div>
    </div>
  );
}
