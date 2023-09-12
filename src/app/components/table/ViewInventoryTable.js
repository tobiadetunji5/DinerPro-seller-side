import React, { useEffect, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { setSelectedItem } from "@/redux/features/selected_item/selectedItemSlice";
import Editform from "@/app/kitchen/inventory/editform";
import { useDispatch } from "react-redux";
import Image from "next/image";

export default function ViewInventory({ data }) {
  // const [tableData, setTableData] = useState(data);
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [editInventory, setEditInventory] = useState(false);

  const dispatch = useDispatch();
  const modalRef = useRef(null);

  // Update the state with the new data

  const openModalForRow = (rowId) => {
    setSelectedRowId(rowId);
    const selectedItem = data.find((row) => row.id === rowId);
    dispatch(setSelectedItem(selectedItem));
    setIsEdit(true);
  };

  useEffect(() => {
    setIsEdit(false);
  }, [editInventory]);

  const closeModal = () => {
    setSelectedRowId(null);
    setIsEdit(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };
    if (isEdit) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isEdit]);

  return (
    <React.Fragment>
      <div>
        <table className="w-full lg:overflow-hidden">
          <thead className="border-b-2 border-b-zinc-300">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Inventory name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Category
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Brand
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Initial Quantity
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Current Quantity
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Quantity Alert
              </th>
              <th>
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200 overflow-auto">
            {data.map((row, index) => (
              <tr key={index} className="border-b-2">
                <td className="px-6 py-4 whitespace-nowrap">{row.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {row.inventoryname}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{row.category}</td>
                <td className="px-6 py-4 whitespace-nowrap">{row.brand}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {row.initialquantity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {row.currentquantity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-lg ${
                      row.quantityalert === "available"
                        ? "bg-[#a5d4c3] text-[#049561] border border-[#049561] py-1 px-3"
                        : "bg-[#e9a996] text-[#BA2D02] border border-[ #BA2D02] py-1 px-5"
                    }`}
                  >
                    {row.quantityalert}
                  </span>
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button onClick={() => openModalForRow(row.id)}>
                    <BsThreeDotsVertical />
                  </button>

                  {selectedRowId === row.id && isEdit && (
                    <div
                      className="absolute bg-white shadow-xl left-[90%] py-3 flex flex-col space-y-2 items-center rounded-md text-black w-[9%] text-sm"
                      ref={modalRef}
                    >
                      <div className="flex justify-between items-center gap-4">
                        <Image
                          priority
                          src="/images/inventory/edit_icon.svg"
                          alt="edit icon"
                          width="20"
                          height="20"
                        />
                        <button onClick={() => setEditInventory(true)}>
                          Edit Item
                        </button>
                      </div>

                      <div className="flex justify-between items-center gap-2">
                        <Image
                          priority
                          src="/images/inventory/delete.svg"
                          alt="delete icon"
                          width="16"
                          height="18"
                        />
                        <button className="justify-end">Delete Item</button>
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Editform
        isVisible={editInventory}
        onClose={() => setEditInventory(false)}
      />
    </React.Fragment>
  );
}
