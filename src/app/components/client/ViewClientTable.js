import React, { useEffect, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { setSelectedItem } from "@/redux/features/selected_item/selectedItemSlice";
import Editform from "@/app/kitchen/inventory/editform";
import { useDispatch } from "react-redux";
import Image from "next/image";
import Link from "next/link";

export default function ViewClient({ data }) {
  // const [tableData, setTableData] = useState(data);
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [editInventory, setEditInventory] = useState(false);
  const [dataDetail, setDataDetail] =  useState(data)

  const dispatch = useDispatch();
  const modalRef = useRef(null);

  // Update the state with the new data

  const openModalForRow = (rowId) => {
    setSelectedRowId(rowId);
    const selectedItem = data.find((row) => row.id === rowId);
    dispatch(setSelectedItem(selectedItem));
    setIsEdit(true);
  };

  const handleDelete =(rowId) => {
    const newList = data.filter((row) => row.id !== rowId)
     setDataDetail(newList);
     console.log('i am working')
     }

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
        <table className="w-full">
          <thead className="border-b-2 border-b-zinc-300 sticky top-0 bg-white w-full mt-1">
            <tr>
            <th scope='col'
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            ID</th>
            <th  scope='col'
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inventory name</th>
            <th  scope='col'
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
            <th  scope='col'
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brand</th>
            <th  scope='col'
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Initial Quantity</th>
            <th  scope='col'
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Quantity</th>
            <th  scope='col'
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity Alert</th>
            <th  scope='col'
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200 overflow-auto">
            {dataDetail.map((row, index) => (
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
                          src="/images/inventory/delete.svg"
                          alt="edit icon"
                          width="20"
                          height="20"
                        />
                        <button onClick={() => handleDelete(row.id)}
                        //  onClick={() => setEditInventory(true)}
                         >
                          Delete Client
                        </button>
                      </div>

                      <div className="flex justify-between items-center gap-2">
                        <Image
                          priority
                          src="/images/inventory/edit_icon.svg"
                          alt="delete icon"
                          width="16"
                          height="18"
                        />
                        <Link href='/kitchen/client/view_details_clients'>
                        {/* <Link href='/kitchen/client/checkout'> */}
                        <button className="justify-end" >
                          View Details</button>
                        </Link>
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
