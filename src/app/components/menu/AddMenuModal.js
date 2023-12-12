import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "@/redux/features/modal/modalSlice";
import { addItem } from "@/redux/features/addItem/addItemSlice";

export default function AddMenuModal({ handleCloseModal, handleAddItem }) {
  const dispatch = useDispatch();
  const menuItems = useSelector((state) => state.menu.items);

  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [isAvailable, setIsAvailable] = useState(true);
  const [selectedPicture, setSelectedPicture] = useState(null);

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
    setItemName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handlePriceChange = (e) => {
    const newPrice = parseInt(e.target.value, 10);
    if (!isNaN(newPrice) && newPrice >= 0) {
      setPrice(newPrice);
    } else {
      setPrice("");
    }
  };

  const handleToggleAvailability = () => {
    setIsAvailable(!isAvailable);
  };

  // const handlePictureChange = (e) => {
  //   const file = e.target.files[0];

  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setSelectedPicture(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };
  const handlePictureChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedPicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newItem = {
  //     itemName,
  //     categories,
  //     price,
  //     isAvailable,
  //     picture: selectedPicture,
  //   };
  //   dispatch(addItem(newItem));
  //   console.log("Updated Menu Items:", menuItems);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      itemName,
      category,
      price,
      isAvailable,
      picture: selectedPicture,
    };
    handleAddItem(newItem);
    dispatch(addItem(newItem));
    console.log("Updated Menu Items:", menuItems);
  };

  const handleClose = () => {
    dispatch(closeModal());
    handleCloseModal();
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
    <aside className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-[808px] h-[709px]">
        <h2 className="text-xl font-semibold mb-4">Add Menu</h2>
        <div>
          <div className="flex items-center p-3 gap-3">
            <div className="border-secondary border rounded-lg h-[178px] w-[228px]">
              {selectedPicture ? (
                <img
                  src={selectedPicture}
                  alt="Selected"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                "No picture selected"
              )}
            </div>
            <div className="border-secondary border rounded-lg h-[178px] w-[228px] text-center">
              <label htmlFor="pictureInput" className="cursor-pointer">
                {selectedPicture ? "Change Picture" : "Add Picture"}
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
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2">Item Name:</label>
              <input
                type="text"
                value={itemName}
                onChange={handleItemNameChange}
                className="border border-secondary rounded-lg p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Category:</label>
              <select
                value={category}
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
                value={price}
                onChange={handlePriceChange}
                className="border border-secondary rounded-lg p-2 w-full"
              />
            </div>
            <div className="mb-4 flex items-center">
              <label className="block mb-2 mr-2">Availability:</label>
              <div
                className={`relative w-10 h-6 rounded-full cursor-pointer ${
                  isAvailable ? "bg-primary" : "bg-gray"
                }`}
                onClick={handleToggleAvailability}
              >
                <div
                  className={`absolute w-4 h-4 rounded-full m-1 transition-transform duration-300 ${
                    isAvailable ? "bg-white" : "bg-white"
                  }`}
                  style={{
                    transform: isAvailable
                      ? "translateX(100%)"
                      : "translateX(0)",
                  }}
                ></div>
              </div>
            </div>
            <div className="flex items-center">
              <label>Source batch: </label>
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
