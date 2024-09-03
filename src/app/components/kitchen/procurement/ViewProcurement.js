"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { procurementTable } from "../../../../../utils/procurementTable";
import ViewProcurementTable from "./procurement_table/ViewProcurementTable";
import Image from "next/image";
import Filter from "../../inventory/Filter";
import ProcurementService from "@/services/ProcurementService";

export default function ViewProcurement() {
  const searchParams = useSearchParams();

  const [activeButton, setActiveButton] = useState("All");
  const [newProcurement, setNewProcurement] = useState(false);
  const [procurementData, setProcurementData] = useState([]);

  // useEffect(() => {
  //   setProcurementData(procurementTable);
  // }, [activeButton]);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleCategory = (category) => {
    // setFilteredData(filterData(category));
    // setActiveCategory(category.toLowerCase());
    // setFilterClicked(false);

    // handleSearch(category);
    console.log("Clicked");
    document.getElementById("my_modal_2").close();
  };

  const pendingProcurements = procurementData.filter(
    (item) => item.status === "pending"
  );
  // console.log(pendingProcurements);

  const deliveredProcurements = procurementData.filter(
    (item) => item.status === "delivered"
  );

  useEffect(() => {
    if (searchParams.get("newProcurement") === "success") {
      setNewProcurement(true);
    }
  }, []);

  useEffect(() => {
    if (newProcurement) {
      setTimeout(() => {
        setNewProcurement(false);
      }, 3000);
    }
  }, [newProcurement]);

  useEffect(() => {
    async function fetchData() {
      if (true) {
        console.log(procurementData);

        const data = await ProcurementService.procurements();

        console.log("Data is", data);
        if (data.success) {
          console.log("Data", data);
          const successData = data.success;
          setProcurementData(successData);
        } else {
          console.log("Error fetching data");
        }
      }
    }
    fetchData();
  }, [activeButton]);

  return (
    <div className="px-12 overflow-scroll">
      {newProcurement && (
        <div role="alert" className="alert alert-success mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Your procurement has been delivered!</span>
        </div>
      )}
      <div className="p-12 border w-full h-[829px] border-secondary rounded-lg overflow-scroll">
        <div className="flex justify-between overflow-scroll">
          <div className="rounded-full bg-[#ffab0271] w-[670px] h-[72px] flex justify-center overflow-scroll">
            <div className="flex justify-center text-center items-center overflow-scroll">
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
          {/* <button className="border border-primary text-primary rounded-full py-[16px] px-[32px]">
            <span>icon</span> filter
          </button> */}

          <div
            onClick={() => document.getElementById("my_modal_2").showModal()}
            className="flex justify-between align-center gap-5
        border border-primary rounded-full py-1 px-7 text-primary hover:bg-primary hover:text-white"
          >
            <Image
              priority
              src="/images/inventory/filter.svg"
              alt="filter icon"
              width="24"
              height="24"
            />
            <button>Filter</button>
          </div>
        </div>

        <Filter handleCategory={handleCategory} />

        {procurementData[0] ? (
          <div>
            {activeButton === "All" && (
              <div>
                <ViewProcurementTable data={procurementData} />
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
        ) : (
          <div className="h-3/4 w-full flex justify-center content-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}
      </div>
    </div>
  );
}
