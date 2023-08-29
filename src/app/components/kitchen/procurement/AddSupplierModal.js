import React, { useEffect, useState } from "react";
import { closeModal } from "@/redux/features/modal/modalSlice";
import { useDispatch } from "react-redux";

export default function AddSupplierModal({ handleCloseAddSupplierModal }) {
  const dispatch = useDispatch();
  const [supplierForm, setSupplierForm] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  const handleAddSupplierFormChange = (e) => {
    const { name, value } = e.target;

    setSupplierForm({
      ...supplierForm,
      [name]: value,
    });
  };

  const handleSupplierSubmit = (e) => {
    e.preventDefault();
    console.log(supplierForm);
    handleSupplierClose();
  };

  const handleSupplierClose = () => {
    dispatch(closeModal());
    handleCloseAddSupplierModal();
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.classList.contains("bg-black")) {
        handleSupplierClose();
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
        <h1 className="font-bold">Add Suppliers Report</h1>
        <form
          className="flex flex-col gap-2 p-3"
          onSubmit={handleSupplierSubmit}
        >
          <div className="flex flex-col">
            <label className="font-medium">Supplier Name:</label>
            <input
              type="text"
              className="border border-secondary w-[300px] h-[43px]"
              value={supplierForm.name}
              onChange={handleAddSupplierFormChange}
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Supplier Address:</label>
            <input
              type="text"
              className="border border-secondary w-[300px] h-[43px]"
              value={supplierForm.address}
              onChange={handleAddSupplierFormChange}
              name="address"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Supplier email:</label>
            <input
              type="email"
              className="border border-secondary w-[300px] h-[43px]"
              value={supplierForm.email}
              onChange={handleAddSupplierFormChange}
              name="email"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Supplier phone:</label>
            <input
              type="tel"
              className="border border-secondary w-[300px] h-[43px]"
              value={supplierForm.phone}
              onChange={handleAddSupplierFormChange}
              name="phone"
            />
          </div>
          <div className="flex justify-center mt-7">
            <button className="bg-primary rounded-lg px-4 py-2 shadow-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
