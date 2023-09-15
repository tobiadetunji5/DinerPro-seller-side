import { closeModal } from "@/redux/features/modal/modalSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function ViewAllupdate({ handleCloseViewUpdateModal }) {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeModal());
    handleCloseViewUpdateModal();
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.classList.contains("bg-black")) {
        handleClose();
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-[729px] h-[500px] mb-16">
        view update
        <div>
          <h1>comments here</h1>
        </div>
        <div>
          <h1>other comments on the procurement here</h1>
        </div>
      </div>
    </div>
  );
}
