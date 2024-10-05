"use client";
import React, { useState, useEffect } from "react";
import DataCard from "@/components/card/DataCard";
import HistoryTable from "@/components/inventory/HistoryTable";
import Modalform from "./modalform";
import InventoryManagerModal from "@/components/inventory/InventoryManagerModal";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [createInventory, setCreateInventory] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [createInventory]);

  return (
    <section className="p-4 m-2">
      <div className="flex flex-col justify-between">

        {/* ===============inventory manager button============= */}
        <div className="flex justify-end ">
          <button
            onClick={() => setIsOpen(true)}
            className="relative p-2 mb-3 text-center place-items-end bg-primary text-white font-semibold rounded-md w-[27%]" >
            Inventory Manager
          </button>
          {isOpen && (<InventoryManagerModal
          setCreateInventory={setCreateInventory}/> )}
        </div>

        {/* ================data cards=============== */}
        <div className="flex space-x-2 justify-between items-center mb-3">
          <DataCard
            bgColor="#FFFFFF"
            statColor="#049561"
            head="Total inventory"
            number="20"
            desc="+ increased by 20% since Dec 2022"
          />
          <DataCard
            bgColor="#FFFFFF"
            statColor="#049561"
            head="Total inventory"
            number="20"
            desc="+ increased by 20% since Dec 2022"
          />
          <DataCard
            bgColor="#FFFFFF"
            statColor="#AF290B"
            head="Available inventory"
            number="10"
            desc="- decreased by 20% since Dec 2022"
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
      
      <Modalform
        isVisible={createInventory}
        onClose={() => setCreateInventory(false)}
      />
    </section>
  );
}
