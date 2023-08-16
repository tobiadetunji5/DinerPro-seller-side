import React, { useState } from "react";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import CurrencyFormatter from "../../../../utils/formatCurrency";
import { useDispatch } from "react-redux";
import EditMenuModal from "./EditMenuModal";
import { openModal } from "@/redux/features/modal/modalSlice";

export default function MenuCard({ food }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true); // Set modal open state first
    dispatch(openModal()); // Then dispatch action
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-[200px] border border-secondary rounded-[10px] overflow-hidden">
      <button onClick={handleOpenModal} className="w-full h-full">
        <div className="relative w-full h-[119px]">
          <Image
            style={{ objectFit: "cover" }}
            src={food.imageUrl}
            alt="food-image"
            placeholder="blur"
            fill
            priority
            sizes="(max-width: 235px) 100vw"
          />
        </div>
        <div className="flex flex-col items-start justify-between bg-white p-2 hover:bg-primary font-bold h-[81px]">
          <div className="flex items-start justify-between w-full">
            <div>
              <p className="text-[.8rem]">{food.foodName}</p>
              <p className="text-[.7rem]">
                <CurrencyFormatter value={food.priceTag} />
              </p>
            </div>

            <MdDelete size={25} className="cursor-pointer" />
          </div>
          <p className="text-[.6rem] cursor-pointer">Click to edit</p>
        </div>
      </button>
      {isModalOpen && <EditMenuModal handleCloseModal={handleCloseModal} />}
    </div>
  );
}
