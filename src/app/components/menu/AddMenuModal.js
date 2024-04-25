import React, { useEffect, useState, createElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "@/redux/features/modal/modalSlice";
import { addMenu } from "@/redux/features/addMenu/addMenuSlice";
import { v4 as uuidv4 } from "uuid";

export default function AddMenuModal({ handleCloseModal }) {
  const dispatch = useDispatch();
  const [batchClick, setBatchClick] = useState(0);

  const [values, setValues] = useState({
    itemName: "",
    category: "",
    price: "",
    available: true,
    selectedPicture: "",
    batchid: "",
    procurementid: "",
  });

  const categories = [
    "Snacks",
    "Soup",
    "Staple Food",
    "Confectionaries",
    "Drinks",
    "Beef and Fish",
    "Diaries",
    "Sea Food",
  ];

  const handleItemNameChange = (e) => {
    setValues({ ...values, itemName: e.target.value });
  };

  const handleCategoryChange = (e) => {
    setValues({ ...values, category: e.target.value });
  };
  const handleBatchIDChange = (e) => {
    setValues({ ...values, batchid: e.target.value });
  };
  const handleProcurementIDChange = (e) => {
    setValues({ ...values, procurementid: e.target.value });
  };

  const handlePriceChange = (e) => {
    const newPrice = parseInt(e.target.value, 10);
    if (!isNaN(newPrice) && newPrice >= 0) {
      setValues({ ...values, price: newPrice });
    } else {
      setValues({ ...values, price: "" });
    }
  };

  const handleToggleAvailability = () => {
    setValues({ ...values, available: !values.available });
  };

  const handlePictureChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setValues({
          ...values,
          selectedPicture: reader.result,
        });
      };
      reader.readAsDataURL(file);
    } else {
      setValues({
        ...values,
        selectedPicture: null,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form values:", values);
    // dispatch(addMenu(values));
    dispatch(
      addMenu({
        id: uuidv4(),
        itemName: values.itemName,
        category: values.category,
        price: values.price,
        available: true,
        selectedPicture: values.selectedPicture,
        batchid: values.batchid,
        procurementid: values.procurementid,
      })
    );

    handleCloseModal();
    dispatch(closeModal());
  };

  const handleClose = () => {
    dispatch(closeModal());
    handleCloseModal();
  };

  const addBatchIdField = () => {
    setBatchClick(batchClick + 1);
  };

  // event listener to close modal when clicking outside
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
    <aside className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 overflow-scroll">
      <div className="bg-white p-6 rounded-lg w-[808px] h-[709px] overflow-scroll">
        <h2 className="text-xl font-semibold mb-4">Add Menu</h2>

        <div>
          <form onSubmit={handleSubmit} id="menuForm">
            <div>
              <div className="flex items-center p-3 gap-3">
                <div className="border-secondary border rounded-lg h-[178px] w-[228px]">
                  {values.selectedPicture ? (
                    <img
                      src={values.selectedPicture}
                      alt="Selected"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    "No picture selected"
                  )}
                </div>
                <div className="border-secondary border rounded-lg h-[178px] w-[228px] text-center">
                  <label htmlFor="pictureInput" className="cursor-pointer">
                    {values.selectedPicture ? "Change Picture" : "Add Picture"}
                  </label>
                  <input
                    type="file"
                    id="pictureInput"
                    accept="image/*"
                    onChange={handlePictureChange}
                    className="hidden"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Item Name:</label>
              <input
                type="text"
                value={values.itemName}
                onChange={handleItemNameChange}
                className="border border-secondary rounded-lg p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Category:</label>
              <select
                value={values.category}
                onChange={handleCategoryChange}
                className="border border-secondary rounded-lg p-2 w-full"
              >
                <option value="">Select a category</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Price (in Naira):</label>
              <input
                type="number"
                value={values.price}
                onChange={handlePriceChange}
                className="border border-secondary rounded-lg p-2 w-full"
              />
            </div>
            <div className="mb-4 flex items-center">
              <label className="block mb-2 mr-2">Availability:</label>
              <div
                className={`relative w-10 h-6 rounded-full cursor-pointer ${
                  values.available ? "bg-gray" : "bg-primary"
                }`}
                onClick={handleToggleAvailability}
              >
                <div
                  className={`absolute w-4 h-4 rounded-full m-1 transition-transform duration-300 ${
                    values.available ? "bg-white" : "bg-white"
                  }`}
                  style={{
                    transform: values.available
                      ? "translateX(0)"
                      : "translateX(100%)",
                  }}
                ></div>
              </div>
            </div>
            <div className="flex items-center mb-5">
              <label>Source batch 1: </label>
              <div className="gap-3 flex">
                <input
                  type="text"
                  placeholder="Enter Source batch ID"
                  className="border border-secondary rounded-lg p-2"
                  value={values.batchid}
                  onChange={handleBatchIDChange}
                />
                <input
                  type="text"
                  placeholder="Enter Procurement ID"
                  className="border border-secondary rounded-lg p-2"
                  value={values.procurementid}
                  onChange={handleProcurementIDChange}
                />

                <button
                  type="button"
                  onClick={addBatchIdField}
                  className="p-3 bg-primary rounded-full"
                >
                  +
                </button>
              </div>
            </div>

            {batchClick >= 1 && (
              <div className="flex items-center mb-5">
                <label>Source batch 2: </label>
                <div className="gap-3 flex">
                  <input
                    type="text"
                    placeholder="Enter Source batch ID"
                    className="border border-secondary rounded-lg p-2"
                  />
                  <input
                    type="text"
                    placeholder="Enter Procurement ID"
                    className="border border-secondary rounded-lg p-2"
                  />
                </div>
              </div>
            )}

            {batchClick >= 2 && (
              <div className="flex items-center mb-5">
                <label>Source batch 3: </label>
                <div className="gap-3 flex">
                  <input
                    type="text"
                    placeholder="Enter Source batch ID"
                    className="border border-secondary rounded-lg p-2"
                  />
                  <input
                    type="text"
                    placeholder="Enter Procurement ID"
                    className="border border-secondary rounded-lg p-2"
                  />
                </div>
              </div>
            )}

            {batchClick >= 3 && (
              <div className="flex items-center mb-5">
                <label>Source batch 4: </label>
                <div className="gap-3 flex">
                  <input
                    type="text"
                    placeholder="Enter Source batch ID"
                    className="border border-secondary rounded-lg p-2"
                  />
                  <input
                    type="text"
                    placeholder="Enter Procurement ID"
                    className="border border-secondary rounded-lg p-2"
                  />
                </div>
              </div>
            )}

            <div className="flex justify-end">
              <button
                className="bg-primary text-white px-4 py-2 rounded-lg mr-2"
                onClick={handleClose}
              >
                Close
              </button>
              <button
                className="bg-primary text-white px-4 py-2 rounded-lg"
                type="submit"
              >
                add item
              </button>
            </div>
          </form>
        </div>
      </div>
    </aside>
  );
}
