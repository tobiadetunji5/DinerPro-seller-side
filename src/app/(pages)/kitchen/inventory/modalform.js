'use client'
// import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { inventoryData } from "../../../../utils/Inventorydata";
import InventoryService from "@/services/InventoryService";
import { Form, Formik } from "formik";
import Input_Text from "@/components/form-inputs/Input_Text"
import Select from "@/components/form-inputs/Select";
import { TbCurrencyNaira } from "react-icons/tb";
import { BsQuestionCircle } from "react-icons/bs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Checkbox from "@/components/form-inputs/Checkbox";
import { useSharedContext } from "@/context/SharedContext";

export default function Modalform({ isVisible, onClose }) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { setInventory_successDetails} = useSharedContext()
  const details={
    existingId: "",
    name: "",
    category: "",
    brand: "",
    quantityNumber: "",
    quantityUnit: "",
    price: "",
    minimumQuantity: "",
    mInventory_unit: "",
    minimumAlert: false
  };

  const {isLoading,status,data, mutate, error} = useMutation({
    mutationKey: 'inventory',
    mutationFn: InventoryService.createInventory,
    onSuccess: async (res) => {
      // Invalidate and refetch the inventory list
      await queryClient.invalidateQueries(['inventoryList']);
      await queryClient.refetchQueries(['inventoryList']);
      setInventory_successDetails(res.data)
      router.push('/kitchen/inventory/success');
    },
    
  })
  const handleSubmit = (values)=>{
    mutate(values)
  }
  
  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-screen h-full inset-0 bg-black bg-opacity-25">
      <div className="absolute bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col rounded-lg space-y-7 px-5 py-6">
        <div className=" flex items-center justify-between">
          <p className="text-2xl font-semibold"> Add Inventory</p>

          <button onClick={onClose}>
            <Image
              priority
              src="/images/inventory/close_icon.svg"
              alt="view icon"
              width="24"
              height="24"
            />
          </button>
        </div>

        {error && (
          <div role="alert" className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Error! {error.message}</span>
          </div>
        )}
        {status == 'success' && (
          <div role="alert" className="alert alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Success adding a new inventory </span>
          </div>
        )}

        {/*---------------------FORM STARTS HERE--------------*/}

        {isLoading || status == 'pending'? (
          <div className="w-[700px] h-[500px]">
            <div className="h-3/4 w-full flex justify-center content-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          </div>
        ) : (
          <Formik 
           initialValues={details}
           onSubmit={handleSubmit}
           >
            {
              formik=>(
              <Form className="flex flex-col gap-3 w-[700px]">
                <Input_Text
                rounded='rounded-md'
                height='h-8'
                name="existingId" 
                label="Existing Id:"
                width="w-[300px]"
                placeholder="Input existing id"
                row={true}
                />
                <Input_Text
                rounded='rounded-md'
                height='h-8'
                name="name" 
                label="Item name:"
                width="w-[300px]"
                placeholder="Input item name"
                row={true}
                />

                <Select
                height="h-8"
                rounded="rounded-md"
                name="category"
                inputWidth="w-[300px]"
                label="Category:"
                gap="gap-4"
                row={true}
                >
                  <option defaultValue="select category">select category</option>
                  <option value="grocery">Groceries and seasonings</option>
                  <option value="flour">Flour based supplies</option>
                  <option value="grain">Grain food</option>
                  <option value="vegetables">Vegetables</option>
                  <option value="fruit">Fruits</option>
                  <option value="meat">Meat and chicken</option>
                  <option value="tuber">Tubers</option>
                  <option value="dairy">Dairy products</option>
                  <option value="egg">Egg</option>
                  <option value="oil">Oils</option>
                  <option value="cereal">Cereals</option>
                  <option value="fish">Fish</option>
                </Select>

                <Input_Text
                rounded='rounded-md'
                height='h-8'
                name="brand" 
                label="Brand:"
                width="w-[300px]"
                placeholder="Input brand name"
                row={true}
                />

                <div className="flex items-center gap-2">
                <Input_Text
                rounded='rounded-md'
                height='h-8'
                name="quantityNumber" 
                label="quantity:"
                width="w-[300px]"
                placeholder="Input number"
                row={true}
                />

                <Select
                height="h-8"
                rounded="rounded-md"
                name="quantityUnit"
                inputWidth="w-[300px]"
                hasLabel={false}
                row={true}
                >
                  <option defaultValue="select unit">select unit</option>
                  <option value="bag">Bag</option>
                  <option value="litre">Litres(l)</option>
                  <option value="grams">Gram(g)</option>
                  <option value="kilo">Kilograms(kg)</option>
                  <option value="sachet">Sachets</option>
                  <option value="pound">Pound(9libs)</option>
                  <option value="tuber">Tubers</option>
                  <option value="ounz">Ounze(oz)</option>
                  <option value="tonne">Tonne</option>
                  <option value="cups">Cup</option>
                  <option value="basket">Basket</option>
                </Select>
                </div>

                <Input_Text
                rounded='rounded-md'
                height='h-8'
                name="price"
                icon_placeholder={true}
                placeholder_icon={
                <TbCurrencyNaira size={20}
                 className={`absolute top-1/2  -translate-y-1/2 left-2 text-zinc-300 
                  ${formik.values.price?'hidden': 'block'}`}/>} 
                label='Price:'
                width="w-[300px]"
                // placeholder="Input number"
                row={true}
                />

                <div className="flex gap-2 items-center">
                  <Checkbox
                  name="minimumAlert"
                  label={<>Set minimum inventory alert notification <BsQuestionCircle/></>}
                  />
              </div>

              {formik.values.minimumAlert && (
                <div className="flex justify-between gap-2">
                  <Input_Text
                  rounded='rounded-md'
                  label="Quantity:"
                  name="minimumQuantity"
                  width="w-[300px]"
                  row={true}
                  height="h-8"
                  placeholder="Input number"
                  />

                  <Select
                    name="mInventory_unit"
                    inputWidth="w-[300px]"
                    height="h-8"
                    row={true}
                    hasLabel={false}
                  >
                    <option value={formik.values.quantityUnit ? "here" : 'Unit'}>
                      {formik.values.quantityUnit ? formik.values.quantityUnit : 'Unit'}
                    </option>
                  </Select>
                </div>
              )}

                <div className="flex justify-center items-center mt-8">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-primary p-2 w-[15vw] rounded-lg text-white"
                  >
                    Add Inventory
                  </button>
                </div>
              </Form>

              )
            }
          </Formik>
        )}
      </div>
    </div>
  );
}
