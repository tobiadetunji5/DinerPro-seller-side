"use client";
import React, { useState } from "react";
import { openModal } from "@/redux/features/modal/modalSlice";
import { useDispatch } from "react-redux";
import Procurement_manager_modal from "./Procurement_manager_modal";
import Image from "next/image";
import DataCard from "@/app/components/card/DataCard";
import ProcurementImage from "../../../../../public/images/icons/Image_one.svg";
import { procurementTable } from "../../../../../utils/procurementTable";
import Link from "next/link";
import HistoryTable from "@/app/components/inventory/HistoryTable";

export default function Procurement_page() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    dispatch(openModal());
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const countAll = procurementTable.length; // Total count of all items

  const countPending = procurementTable.filter(
    (item) => item.status === "pending"
  ).length;

  const countDelivered = procurementTable.filter(
    (item) => item.status === "delivered"
  ).length;

  return (
    <section className="p-4 m-2">
      <div className="flex flex-col justify-between">
        {/* ===============inventory manager button============= */}
        <div className="flex justify-end ">
          <button
            onClick={handleOpenModal}
            className="relative p-2 mb-3 text-center place-items-end bg-primary text-white font-semibold rounded-md w-[27%]"
          >
            Procurement Manager
          </button>{" "}
          {isModalOpen && (
            <Procurement_manager_modal handleCloseModal={handleCloseModal} />
          )}
        </div>

        {/* ================data cards=============== */}
        <div className="flex space-x-2 justify-between items-center mb-3">
          <DataCard
            bgColor="#FFFFFF"
            statColor="#049561"
            head="Total procurement"
            number="0"
            desc="+ increased by 0% since Dec 2022"
          />
          <DataCard
            bgColor="#FFFFFF"
            statColor="#049561"
            head="Total procurement"
            number="0"
            desc="+ increased by 0% since Dec 2022"
          />
          <DataCard
            bgColor="#FFFFFF"
            statColor="#AF290B"
            head="Available procurement"
            number="0"
            desc="- decreased by 0% since Dec 2022"
          />
        </div>

        {/* ===================view custom report=============== */}
        <div className="flex mb-10 justify-end">
          <div className="border p-2 w-[27%] text-center border-primary rounded-lg">
            <p>View Custom report</p>
          </div>
        </div>
        <HistoryTable />
      </div>
      {/* <Modalform
      isVisible={createInventory}
      onClose={() => setCreateInventory(false)}
      /> */}
    </section>
    // <div className="px-10 relative">
    //   <button
    //     className="absolute top-0 right-[48px] p-3 bg-primary text-white rounded-lg w-[25%]"
    //     onClick={handleOpenModal}
    //   >
    //     <h1 className="text-[20px]">Procurement Manager</h1>
    //   </button>
    //   {isModalOpen && (
    //     <Procurement_manager_modal handleCloseModal={handleCloseModal} />
    //   )}

    //   <div className="pt-16">
    //     <section className="flex justify-between space-x-2">
    //       <div className="border border-secondary h-[200px] rounded-lg px-8 py-5 bg-primary text-white">
    //         <h1 className="font-medium">Total Procurement notices</h1>
    //         <h1 className="font-bold text-[36px] mt-5">{countAll}</h1>
    //         <p className="mt-5">+ increased by 20% since December 2022</p>
    //       </div>
    //       <div className="border border-secondary w-[400px] h-[200px] rounded-lg px-8 py-5">
    //         <h1 className="font-medium">Pending Procurement notices</h1>
    //         <h1 className="font-bold text-[36px] mt-5">{countPending}</h1>
    //         <p className="mt-5 text-green-600">
    //           + increased by 20% since December 2022
    //         </p>
    //       </div>
    //       <div className="border border-secondary w-[400px] h-[200px] rounded-lg  px-8 py-5">
    //         <h1 className="font-medium">Delivered Procurement</h1>
    //         <h1 className="font-bold text-[36px] mt-5">{countDelivered}</h1>
    //         <p className="mt-5 text-red-600">
    //           - decreased by 20% since December 2022
    //         </p>
    //       </div>
    //     </section>
    //   </div>

    //   <Link
    //     className="absolute top-[280px] right-[48px] p-3 border border-primary bg-white text-primary rounded-lg w-[272px] cursor-pointer text-center"
    //     href="/kitchen/procurement/procurement_view_inventory"
    //   >
    //     <h1 className="text-[20px]">View Custom report</h1>
    //   </Link>

    //   <div className="border border-secondary w-[93%] h-[440px] absolute top-[350px] rounded-lg">
    //     <div className="flex justify-between p-6 text-[24px]">
    //       <h1>History</h1>
    //       <h1 className="underline underline-offset-4 text-primary">
    //         View all
    //       </h1>
    //     </div>

    //     <hr className="text-secondary" />
    //     <section className="flex justify-evenly text-center items-center">
    //       <div>
    //         <h1 className="font-medium">
    //           You have no previous inventory changes
    //         </h1>
    //         <h3 className="font-medium mt-10">
    //           Create your first inventory item
    //         </h3>
    //         <p>just click the "procurement manager" button above</p>
    //       </div>
    //       <div className="mt-5">
    //         <Image
    //           src={ProcurementImage}
    //           style={{ objectFit: "contain", width: "299px", height: "316px" }}
    //           alt="no previous inventory"
    //         />
    //       </div>
    //     </section>
    //   </div>
    // </div>
  );
}
