import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
//react icons
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiCircleMore } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
//selectedItem slice
import { setSelectedItem } from "@/redux/features/selected_item/selectedItemSlice";
import { useDispatch } from "react-redux";
//components
import ProcurementTableHead from "./ProcurementTableHead";
import EditStatusModal from "./EditStatusModal";
// redux
import { openModal } from "@/redux/features/modal/modalSlice";

export default function ViewProcurementTable({ data }) {
  const [selectedRowId, setSelectedRowId] = useState(null); // Initializing as null to hide the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditStatusModalOpen, setIsEditStatusModalOpen] = useState(false);
  const [editingStatus, setEditingStatus] = useState(null);
  const [nextStatus, setNextStatus] = useState(null);
  const [tableData, setTableData] = useState(data);

  const dispatch = useDispatch();
  const modalRef = useRef(null);

  const handleEditStatusModalOpen = (status) => {
    dispatch(openModal());
    setIsEditStatusModalOpen(true);
    setIsModalOpen(false);
    setEditingStatus(status);
    setNextStatus(["pending", "delivered"]);
  };

  function getNextStatus(currentStatus) {
    const statusProgression = ["pending", "delivered"];

    // Find the index of the current status in the progression
    const currentIndex = statusProgression.indexOf(currentStatus);

    // If the current status is not found or is the last status, return null
    if (currentIndex === -1 || currentIndex === statusProgression.length - 1) {
      return null;
    }
    return statusProgression[currentIndex + 1];
  }

  const handleUpdateStatus = (newStatus) => {
    // Update the status for the selected row in your data
    const updatedData = tableData.map((item) =>
      item.id === selectedRowId ? { ...item, status: newStatus } : item
    );

    // Update the state with the new data
    setTableData(updatedData);
    setIsEditStatusModalOpen(false); // Close the modal
  };

  const handleEditStatusModalClose = () => {
    setIsEditStatusModalOpen(false);
  };

  const openModalForRow = (rowId) => {
    setSelectedRowId(rowId);
    const selectedItem = data.find((item) => item.id === rowId);
    dispatch(setSelectedItem(selectedItem));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedRowId(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };
    if (isModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isModalOpen]);

  return (
    <div className="w-full mt-10">
      <table className="min-w-full divide-y divide-gray-200">
        <ProcurementTableHead />
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.itemName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.category}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.brand}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    item.status === "delivered"
                      ? "bg-green-100 text-green-800 border border-green-800 p-1"
                      : "bg-[#FFA902] text-[#5e4a22] border border-[#5e4a22] p-1"
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button onClick={() => openModalForRow(item.id)}>
                  <BsThreeDotsVertical />
                </button>

                {selectedRowId === item.id && isModalOpen && (
                  <div
                    className="absolute rounded-lg shadow-xl border border-secondary bg-white p-3 flex flex-col gap-2"
                    ref={modalRef}
                  >
                    <button
                      className="flex items-center gap-2"
                      onClick={() => handleEditStatusModalOpen(item.status)}
                    >
                      <MdOutlineModeEditOutline /> <span>edit status</span>
                    </button>

                    <button className="flex items-center gap-2">
                      <RiDeleteBin6Line /> <span>delete order</span>
                    </button>

                    <Link
                      href={`/kitchen/procurement/procurement_report/${item.id}`}
                    >
                      <button className="flex items-center gap-2">
                        <CiCircleMore /> <span>view details</span>
                      </button>
                    </Link>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {isEditStatusModalOpen && (
        <EditStatusModal
          handleCloseEditStatusModal={handleEditStatusModalClose}
          initialStatus={editingStatus}
          nextStatus={nextStatus}
          updateStatus={handleUpdateStatus}
        />
      )}
    </div>
  );
}
