"use client";
import React, { useState } from "react";
//redux
import { openModal } from "@/redux/features/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
//components
import DefectReportModal from "./DefectReportModal";
import SupplierReport from "./SupplierReport";
import AddSupplierModal from "./AddSupplierModal";
import ShareReportModal from "./ShareReportModal";
import ViewAllupdate from "./ViewAllupdate";

export default function ProcurementReport() {
  const dispatch = useDispatch();
  const [displayReport, setDisplayReport] = useState("defect");
  const [isDefectModalOpen, setIsDefectModalOpen] = useState(false);
  const [isAddSupplierModalOpen, setIsAddSupplierModalOpen] = useState(false);
  const [isShareReportModalOpen, setIsShareReportModalOpen] = useState(false);
  const [isViewUpdateModalOpen, setIsViewUpdateModalOpen] = useState(false);

  const selectedItem = useSelector((state) => state.selectedItem);

  // view update modal
  const handleUpdateModalOpen = () => {
    dispatch(openModal());
    setIsViewUpdateModalOpen(true);
  };

  const handleCloseViewUpdateModal = () => {
    setIsViewUpdateModalOpen(false);
  };

  // share report modal
  const handleSharReportModalOpen = () => {
    dispatch(openModal());
    setIsShareReportModalOpen(true);
  };

  const handleCloseShareReportModal = () => {
    setIsShareReportModalOpen(false);
  };

  const handleAddSupplierModalOpen = () => {
    dispatch(openModal());
    setIsAddSupplierModalOpen(true);
  };

  const handleCloseAddSupplierModal = () => {
    // Add logic to close the modal here

    setIsAddSupplierModalOpen(false);
  };

  const handleDefectModalOpen = () => {
    dispatch(openModal());
    setIsDefectModalOpen(true);
  };

  const handleCloseDefectModal = () => {
    // Add logic to close the modal here

    setIsDefectModalOpen(false);
  };

  return (
    <div className="px-12">
      <div className="p-12 border w-full h-[829px] border-secondary rounded-lg">
        <section>
          <div className="flex justify-between">
            <div>
              <h1 className="font-medium">
                <span>Procurement </span>
                {selectedItem ? selectedItem.id : "N/A"}{" "}
                <span className="font-medium text-secondary">time stamp</span>
              </h1>
            </div>
            <div>
              <span className="mr-2">status</span>
              <button
                className="bg-primary p-3 rounded-lg shadow-lg"
                onClick={handleSharReportModalOpen}
              >
                share report
              </button>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-10">
            <div>
              <h1 className="text-secondary font-medium">Item Name</h1>
              <h1 className="font-bold">
                {selectedItem ? selectedItem.itemName : "N/A"}
              </h1>
            </div>
            <div>
              <h1 className="text-secondary font-medium">Brand</h1>
              <h1 className="font-bold">
                {selectedItem ? selectedItem.brand : "N/A"}
              </h1>
            </div>
            <div>
              <h1 className="text-secondary font-medium">
                Stock turnover circle
              </h1>
              <h1 className="font-bold">the item name</h1>
            </div>
            <div>
              <h1 className="text-secondary font-medium">Quantity</h1>
              <h1 className="font-bold">
                {selectedItem ? selectedItem.quantity : "N/A"}
              </h1>
            </div>

            <div>
              <h1 className="text-secondary font-medium">Recipient email</h1>
              <h1 className="font-bold">
                {selectedItem ? selectedItem.email : "N/A"}
              </h1>
            </div>
          </div>
        </section>
        <section className="mt-10">
          <div className="flex items-center justify-center text-center space-x-4">
            <div className="w-1/2">
              <button
                onClick={() => setDisplayReport("defect")}
                className={`${
                  displayReport === "defect"
                    ? "border-primary text-primary"
                    : "bg-gray-300 text-gray-700 hover:border-primary"
                } py-2 rounded-tl-lg rounded-bl-lg w-full border shadow-lg`}
              >
                Defect report
              </button>
            </div>
            <div className="w-1/2">
              <button
                onClick={() => setDisplayReport("supplier")}
                className={`${
                  displayReport === "supplier"
                    ? "border-primary text-primary"
                    : "bg-gray-300 text-gray-700 hover:border-primary"
                } py-2 rounded-tr-lg rounded-br-lg w-full border shadow-lg`}
              >
                Supplier report
              </button>
            </div>
          </div>
        </section>
        {/* Content for both reports */}
        <section className="mt-10 p-10">
          {displayReport === "defect" && (
            <div>
              <div className="flex justify-between">
                <aside>
                  <h1>Defect 1 </h1>
                  <p>Title of defect : Enter defect title</p>
                  <p> Quantity affected: 5 bottles</p>
                  <p>Report date: DD-MM-YYYY</p>
                  <p>Last updated: DD-MM-YYY</p>
                </aside>
                <aside>
                  <button
                    className="bg-primary p-3 rounded-lg shadow-lg"
                    onClick={handleDefectModalOpen}
                  >
                    add defect
                  </button>
                </aside>
              </div>
              <div className="flex justify-between border rounded p-10 h-[119px] mt-20">
                <aside>
                  <h1>last defect update</h1>
                  <p>Enter description</p>
                </aside>
                <aside>
                  <button
                    className="bg-primary p-3 rounded-lg shadow-lg"
                    onClick={handleUpdateModalOpen}
                  >
                    view all updates
                  </button>
                </aside>
              </div>
            </div>
          )}
          {displayReport === "supplier" && (
            <div>
              <div className="flex justify-between mb-5">
                <h1 className="font-bold">
                  {selectedItem ? selectedItem.brand : "N/A"}
                </h1>
                <div>
                  <button
                    className="bg-primary p-3 rounded-lg shadow-lg"
                    onClick={handleAddSupplierModalOpen}
                  >
                    add supplier
                  </button>
                </div>
              </div>
              <SupplierReport />
            </div>
          )}
        </section>
      </div>
      {isDefectModalOpen && (
        <DefectReportModal handleCloseDefectModal={handleCloseDefectModal} />
      )}
      {isAddSupplierModalOpen && (
        <AddSupplierModal
          handleCloseAddSupplierModal={handleCloseAddSupplierModal}
        />
      )}
      {isShareReportModalOpen && (
        <ShareReportModal
          handleCloseShareReportModal={handleCloseShareReportModal}
        />
      )}
      {isViewUpdateModalOpen && (
        <ViewAllupdate
          handleCloseViewUpdateModal={handleCloseViewUpdateModal}
        />
      )}
    </div>
  );
}
