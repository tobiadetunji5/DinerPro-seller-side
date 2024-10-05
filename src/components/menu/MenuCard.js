import React, { useState } from "react";
import Image from "next/image";
import CurrencyFormatter from "../../../utils/formatCurrency";
import EditMenuModal from "./EditMenuModal";
import { useDispatch } from "react-redux";
import image from "/public/images/brand_logo/logo1.png";
import { deleteMenu, editMenu } from "@/redux/features/addMenu/addMenuSlice";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function MenuCard({ menuItem }) {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    // dispatch(setEditItem(menuItem));
    setIsModalOpen(true);
  };

  const handleUpdateItem = (editedValues) => {
    dispatch(editMenu(editedValues));
    // console.log("Updated item:", editedValues);
  };

  const handleDeleteItem = (itemId) => {
    dispatch(deleteMenu({ id: itemId }));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-[200px] border border-secondary rounded-[10px] overflow-hidden">
      <div className="w-full h-full">
        <div className="relative w-full h-[119px]">
          <Image
            src={menuItem.selectedPicture || image}
            alt={menuItem.itemName}
            fill
            sizes="(max-width: 235px) 100vw"
          />
        </div>
        <div className="flex flex-col items-start justify-between bg-white p-2 font-bold h-[81px]">
          <div className="flex justify-between w-full">
            <div>
              <p className="text-[.8rem]">{menuItem.itemName}</p>
              <p className="text-[.7rem]">
                <CurrencyFormatter value={menuItem.price} />
              </p>
            </div>
            <button
              className="cursor-pointer"
              onClick={() => handleDeleteItem(menuItem.id)}
            >
              <RiDeleteBin6Line size={30} />
            </button>
          </div>

          <p
            onClick={handleOpenModal}
            className="text-[.6rem] text-primary cursor-pointer justify-center text-center items-center w-full"
          >
            Click to edit
          </p>
        </div>
      </div>

      {isModalOpen && (
        <EditMenuModal
          menuItem={menuItem}
          handleCloseModal={handleCloseModal}
          onUpdateItem={handleUpdateItem}
        />
      )}
    </div>
  );
}
