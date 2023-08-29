import Link from "next/link";
import React, { useState } from "react";
// import { closeModal } from "@/redux/features/modal/modalSlice";
// import { useDispatch } from "react-redux";

export default function CreateProcurementOrder({
  handleCloseProcurementModal,
}) {
  // const dispatch = useDispatch();
  const [showContentA, setShowContentA] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [formB, setFormB] = useState({
    name: "",
    brandName: "",
    quantity: "",
  });
  const [currentContent, setCurrentContent] = useState("A");
  const [recipientEmail, setRecipientEmail] = useState("");

  // const handleClose = () => {
  //   dispatch(closeModal());
  //   handleCloseProcurementModal();
  // };

  const toggleContentA = () => {
    setCurrentContent("A");
    setShowContentA(true);
  };

  const toggleContentB = () => {
    setCurrentContent("B");
    setShowContentA(false);
  };

  const handleProceed = () => {
    setCurrentContent("C");
  };

  // Helper function to handle form input changes in "content b"
  const handleFormBChange = (e) => {
    const { name, value } = e.target;

    // // Ensure that the value is not negative
    // const newValue = Math.max(0, parseInt(value) || 0);
    const newValue =
      name === "quantity" ? Math.max(0, parseInt(value) || 0) : value;

    setFormB({
      ...formB,
      [name]: newValue,
    });
  };

  return (
    <aside className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="absolute bg-white p-6 rounded-lg w-[808px] h-[458px] border-secondary">
        <h1 className="text-[20px] font-bold">Create Procurement Order</h1>
        {currentContent !== "C" && (
          <div className="rounded-full bg-[#ffab0271] w-[441px] h-[57px] flex justify-center">
            <div className="flex justify-center text-center items-center">
              <button
                className={`rounded-full p-3 mr-3 text-white ${
                  showContentA ? " bg-primary" : ""
                } transition-all duration-300 ease-linear`}
                onClick={toggleContentA}
              >
                Select from existing Category
              </button>
              <button
                className={`rounded-full p-3 ml-3 text-white ${
                  !showContentA ? " bg-primary" : " "
                } transition-all duration-300 ease-linear`}
                onClick={toggleContentB}
              >
                Create new Inventory
              </button>
            </div>
          </div>
        )}
        <div>
          {currentContent === "A" && (
            <div className="flex flex-col mt-5">
              {/* Content A */}
              <div className="flex">
                <label className="text-[20px] font-bold">Inventory:</label>
                <select
                  className="border border-secondary w-[300px] h-[43px] ml-5"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="category1">Category 1</option>
                  <option value="category2">Category 2</option>
                </select>
              </div>

              <div className="flex mt-5">
                <label className="text-[20px] font-bold">Enter Quantity:</label>
                <input
                  className="border border-secondary w-[300px] h-[43px] ml-5"
                  type="number"
                  value={formB.quantity}
                  onChange={handleFormBChange}
                  name="quantity"
                />
              </div>
            </div>
          )}

          {currentContent === "B" && (
            <div className="flex flex-col mt-5">
              {/* Content B */}
              <div className="flex">
                <label className="text-[20px] font-bold">Enter Name:</label>
                <input
                  className="border border-secondary w-[300px] h-[43px] ml-5"
                  type="text"
                  value={formB.name}
                  onChange={handleFormBChange}
                  name="name"
                />
              </div>

              <div className="flex mt-5">
                <label className="text-[20px] font-bold">
                  Enter Brand Name:
                </label>
                <input
                  className="border border-secondary w-[300px] h-[43px] ml-5 "
                  type="text"
                  value={formB.brandName}
                  onChange={handleFormBChange}
                  name="brandName"
                />
              </div>

              <div className="flex mt-5">
                <label className="text-[20px] font-bold">Enter Quantity:</label>
                <input
                  className="border border-secondary w-[300px] h-[43px] ml-5"
                  type="number"
                  value={formB.quantity}
                  onChange={handleFormBChange}
                  name="quantity"
                />
              </div>
            </div>
          )}

          {currentContent === "C" && (
            <div className="mt-5">
              <h1>Recipient's email</h1>
              <div className="mt-5 flex">
                <label className="text-[20px] font-bold">
                  Recipient's email:
                </label>
                <input
                  className="border border-secondary w-[300px] h-[43px] ml-5"
                  type="email"
                  id="recipient-email"
                  value={recipientEmail}
                  onChange={(e) => setRecipientEmail(e.target.value)}
                />
                <Link href="/kitchen/procurement/procurement_view_inventory">
                  <button className="w-[174px] h-[43px] bg-primary border border-primary text-white">
                    send order
                  </button>
                </Link>
              </div>
              {/* <div className="mt-20 flex justify-center">
                
                  <button className="text-white bg-[#049561] w-[272px] h-[43px]">
                    order sent
                  </button>
                
              </div> */}
            </div>
          )}
        </div>
        {currentContent !== "C" && (
          <div className="flex justify-center mt-20">
            <button
              className="bg-primary w-[272px] p-[15px] text-white"
              onClick={handleProceed}
            >
              Proceed
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
