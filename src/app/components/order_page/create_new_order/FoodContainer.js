"use client";
import React, { useEffect, useState, useRef } from "react";
import { foodArrays } from "../../../../../utils/cartData";
import Card from "./Card";
import { AiOutlineSetting } from "react-icons/ai";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import Link from "next/link";

export default function FoodContainer() {
  const [scrollInd, setScrollInd] = useState("b");
  const [scrollWidth, setScrollWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [visibleItems, setVisibleItems] = useState(9); // Display 9 items at a time
  const [startIndex, setStartIndex] = useState(0); // Index of the first visible item
  const itemContainerRef = useRef(null);
  const itemWidth = 250; // Width of each item in pixels
  const scrollOffset = 50; // Offset for scroll calculations

  useEffect(() => {
    const handleScroll = () => {
      if (itemContainerRef.current) {
        const { scrollLeft, offsetWidth, scrollWidth } =
          itemContainerRef.current;
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
  }, []);

  const scrollNext = () => {
    if (itemContainerRef.current) {
      const { scrollLeft, offsetWidth } = itemContainerRef.current;
      const maxScrollLeft = scrollWidth - offsetWidth;
      const nextScrollLeft = Math.min(
        scrollLeft + itemWidth * 3,
        maxScrollLeft
      );
      itemContainerRef.current.scrollTo({
        left: nextScrollLeft,
        behavior: "smooth",
      });
      setScrollInd("m");
      const nextStartIndex = Math.min(startIndex + 9, foodArrays.length - 9);
      setStartIndex(nextStartIndex);
    }
  };

  const scrollPrev = () => {
    if (itemContainerRef.current) {
      const { scrollLeft } = itemContainerRef.current;
      const prevScrollLeft = Math.max(scrollLeft - itemWidth * 3, 0);
      itemContainerRef.current.scrollTo({
        left: prevScrollLeft,
        behavior: "smooth",
      });
      setScrollInd("m");
      const prevStartIndex = Math.max(startIndex - 9, 0);
      setStartIndex(prevStartIndex);
    }
  };

  return (
    <div className="overflow-x-auto">
      <div className="relative pr-12 pl-12 flex flex-col w-850px h-829px overflow-hidden border border-secondary rounded-lg">
        <div className="flex items-center justify-between p-8">
          <div className="text-lg font-semibold">My Menu</div>
          <Link href="/menu/menu_settings">
            <div className="flex items-center gap-2">
              <AiOutlineSetting size={22} />
              <span className="text-sm">Menu Settings</span>
            </div>
          </Link>
        </div>
        <div className="p-2 border border-secondary">Search bar</div>
        <div className="p-2 border border-secondary my-1">Categories</div>
        <div
          className="grid grid-cols-3 gap-3 mb-1 overflow-x-hidden w-full"
          ref={itemContainerRef}
        >
          {foodArrays
            .slice(startIndex, startIndex + visibleItems)
            .map((food, i) => (
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
