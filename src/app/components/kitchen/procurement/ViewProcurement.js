"use client";
import React, { useState } from "react";
import { procurementTable } from "../../../../../utils/procurementTable";
import ViewProcurementTable from "./procurement_table/ViewProcurementTable";

export default function ViewProcurement() {
  const [activeButton, setActiveButton] = useState("All");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const pendingProcurements = procurementTable.filter(
    (item) => item.status === "pending"
  );
  // console.log(pendingProcurements);

  const deliveredProcurements = procurementTable.filter(
    (item) => item.status === "delivered"
  );

  return (
    <div className="px-12">
      <div className="p-12 border w-[1440px] h-[829px] border-secondary rounded-lg">
        <div className="flex justify-between">
          <div className="rounded-full bg-[#ffab0271] w-[670px] h-[72px] flex justify-center">
            <div className="flex justify-center text-center items-center">
              <button
                onClick={() => handleButtonClick("All")}
                className={`flex rounded-full py-[16px] px-[40px] mr-[40px] text-white ${
                  activeButton === "All" ? "bg-primary" : ""
                } transition-all duration-300 ease-linear`}
              >
                All
              </button>
              <button
                onClick={() => handleButtonClick("Pending Procurement")}
                className={`flex rounded-full py-[16px] px-[40px] text-white ${
                  activeButton === "Pending Procurement" ? "bg-primary" : ""
                } transition-all duration-300 ease-linear`}
              >
                Pending Procurement
              </button>
              <button
                onClick={() => handleButtonClick("Delivered Procurement")}
                className={`flex rounded-full py-[16px] px-[40px] ml-[40px] text-white ${
                  activeButton === "Delivered Procurement" ? "bg-primary" : ""
                } transition-all duration-300 ease-linear`}
              >
                Delivered Procurement
              </button>
            </div>
          </div>
          <button className="border border-primary text-primary rounded-full py-[16px] px-[32px]">
            <span>icon</span> filter
          </button>
        </div>

        {activeButton === "All" && (
          <div>
            <ViewProcurementTable data={procurementTable} />
          </div>
        )}
        {activeButton === "Pending Procurement" && (
          <div>
            <ViewProcurementTable data={pendingProcurements} />
          </div>
        )}
        {activeButton === "Delivered Procurement" && (
          <div>
            <ViewProcurementTable data={deliveredProcurements} />
          </div>
        )}
      </div>
    </div>
  );
}
