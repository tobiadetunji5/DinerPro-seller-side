"use client";
import React, { useState } from "react";
import { foodArrays } from "../../../../utils/cartData";
import { AiOutlineSetting } from "react-icons/ai";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import MenuCard from "./MenuCard";
import { openModal } from "@/redux/features/modal/modalSlice";
import { useDispatch } from "react-redux";
import AddMenuModal from "./AddMenuModal";

export default function MenuSetting() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    dispatch(openModal()); // Dispatch the openModal action
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col border border-secondary rounded-lg px-5">
      <div className="flex items-center justify-between p-8">
        <div className="text-lg font-semibold">My Menu items</div>

        <button
          className="flex items-center gap-2 bg-primary p-[15px] rounded-lg text-white"
          onClick={handleOpenModal}
        >
          <span>+</span>
          <span className="text-sm">Add Menu modal</span>
        </button>
      </div>
      <div className="p-2 border border-secondary">Search bar</div>
      <div className="p-2 border border-secondary my-1">Categories</div>
      <div className="grid grid-cols-5 gap-3 mb-1 overflow-x-hidden w-full">
        {foodArrays.map((food, i) => (
          <MenuCard key={i} food={food} />
        ))}
      </div>
      {isModalOpen && <AddMenuModal handleCloseModal={handleCloseModal} />}
    </div>
  );
}
