import React, { useState } from "react";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import CurrencyFormatter from "../../../../utils/formatCurrency";

export default function MenuCard({ menuItem }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-[200px] border border-secondary rounded-[10px] overflow-hidden">
      <button onClick={handleOpenModal} className="w-full h-full">
        <div className="relative w-full h-[119px]">
          <Image
            src={menuItem.picture}
            alt={menuItem.itemName}
            fill
            sizes="(max-width: 235px) 100vw"
          />
        </div>
        <div className="flex flex-col items-start justify-between bg-white p-2 hover:bg-primary font-bold h-[81px]">
          <div>
            <p className="text-[.8rem]">{menuItem.itemName}</p>
            <p className="text-[.7rem]">
              <CurrencyFormatter value={menuItem.price} />
            </p>
          </div>
          <p className="text-[.6rem] cursor-pointer">Click to edit</p>
        </div>
      </button>

      {isModalOpen && (
        <EditMenuModal
          menuItem={menuItem}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
}
