import React, { useState } from "react";
//react icons
import { TfiClose } from "react-icons/tfi";

export default function EditStatusModal({
  handleCloseEditStatusModal,
  initialStatus,
  updateStatus,
}) {
  const [newStatus, setNewStatus] = useState(initialStatus);
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleStatusChange = (e) => {
    console.log(`Selected status: ${e.target.value}`);
    setNewStatus(e.target.value);
    setConfirmationMessage("New status selected!!!");
  };
  const handleConfirm = () => {
    console.log(`Updated status: ${newStatus}`);
    updateStatus(newStatus);
    handleCloseEditStatusModal();
  };

  // const statusMessage =
  //   newStatus === "pending"
  //     ? "Pending status selected."
  //     : "Delivered status selected.";

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-[729px] h-[500px] mb-16">
        <div className="flex justify-between">
          <h1 className="font-bold">Edit Procurement Status</h1>
          <button onClick={handleCloseEditStatusModal}>
            <TfiClose className="font-bold text-[24px]" />
          </button>
        </div>
        <div className="font-medium mt-5">choose procurement status</div>
        <div className="flex flex-col mt-10 gap-3">
          <label>
            <input
              type="radio"
              value="pending"
              checked={newStatus === "pending"}
              onChange={handleStatusChange}
            />
            Pending
          </label>
          <label>
            <input
              type="radio"
              value="delivered"
              checked={newStatus === "delivered"}
              onChange={handleStatusChange}
            />
            Delivered
          </label>
        </div>
        {/* <p>{statusMessage}</p> */}
        {confirmationMessage && (
          <p className="mt-10 border bg-green-800 rounded-lg text-center text-white p-3 font-medium">
            {confirmationMessage}
          </p>
        )}

        <div className="justify-center flex">
          <button
            className="border bg-primary border-primary w-[194px] text-center text-white p-3 rounded-lg mt-5"
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
