"use client";
import React, { useState } from "react";
import { foodArrays } from "../../../../utils/cartData";
import { AiOutlineSetting } from "react-icons/ai";
import { MdFilterList } from "react-icons/md";
import MenuCard from "./MenuCard";
import { openModal } from "@/redux/features/modal/modalSlice";
import { useDispatch } from "react-redux";
import AddMenuModal from "./AddMenuModal";
import { categories } from "../../../../utils/categoriesData";

export default function MenuSetting() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(15);
  const gridRows = 3;
  const gridCols = 5;

  const handleOpenModal = () => {
    dispatch(openModal());
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMenuItems = foodArrays.slice(indexOfFirstItem, indexOfLastItem);

  const emptySlots = gridCols * gridRows - currentMenuItems.length;

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageCount = Math.ceil(foodArrays.length / itemsPerPage);
  const currentPageCount = Math.min(currentPage, pageCount);

  return (
    <div className="flex flex-col border w-[1500px] h-[829px] border-secondary rounded-lg px-5">
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold p-2">My Menu items</div>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search menu"
          className="border border-secondary rounded-[40px] w-[280px] h-[37px] p-2 outline-none focus:ring-2 focus:ring-primary"
        />
        <div className="border border-secondary rounded-[40px] w-[130px] h-[37px] cursor-pointer flex items-center justify-center text-secondary">
          <MdFilterList size={30} color="grey" />
          <span>Filter</span>
        </div>
      </div>
      <div className="p-2 flex items-center">
        {categories.map((category) => (
          <div
            key={category.id}
            className="px-2 border border-primary rounded-lg mx-2 whitespace-nowrap shadow-md text-primary cursor-pointer"
          >
            {category.name}
          </div>
        ))}
        <button
          className="ml-[200px] flex items-center gap-2 bg-primary p-[15px] rounded-lg text-white"
          onClick={handleOpenModal}
        >
          <span>+</span>
          <span className="text-sm">Add Menu modal</span>
        </button>
      </div>
      <div
        className={`grid grid-cols-${gridCols} grid-rows-${gridRows} gap-3 mb-1 overflow-x-hidden w-full`}
      >
        {currentMenuItems.map((food, i) => (
          <MenuCard key={i} food={food} />
        ))}
        {emptySlots > 0 &&
          Array.from({ length: emptySlots }).map((_, index) => (
            <div key={currentMenuItems.length + index} />
          ))}
      </div>
      <div className="flex justify-between px-2 mt-4">
        <div>
          Showing {indexOfFirstItem + 1} - {indexOfLastItem}
        </div>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={foodArrays.length}
          currentPage={currentPageCount}
          pageCount={pageCount}
          paginate={paginate}
        />
      </div>
      {isModalOpen && <AddMenuModal handleCloseModal={handleCloseModal} />}
    </div>
  );
}

// Pagination component
const Pagination = ({ currentPage, pageCount, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`px-2 mr-1  cursor-pointer ${
              currentPage === number
                ? "font-semibold border border-primary"
                : ""
            }`}
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
      </ul>
    </nav>
  );
};
