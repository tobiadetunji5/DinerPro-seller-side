import React, { useEffect, useRef, useState } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import Image from 'next/image';

const InvoiceTableModal = ({info}) => {
    const [isEdit, setIsEdit] = useState(false);

    const openModalForRow = () => {
        setIsEdit(true);
    }

    // const modalRef = useRef(null);
    // const dataArray = [info]
    // console.log('i am row:', dataArray.name)
    return (
        <>
            <div>
                <table  className='w-full lg:overflow-hidden'>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='border border-zinc-400'>
                        {/* {info.map((row)=>{ */}
                        <tr>
                        <td className="pl-8 py-4 whitespace-nowrap"> 
                            <input type='checkbox' name='tickbox' className='w-[18px] h-[18px]'/>
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap">#1</td>
                        <td className="px-2 py-4 whitespace-nowrap">her</td>
                        <td className="px-6 py-4 whitespace-nowrap">6</td>
                        <td className="px-2 py-4 whitespace-nowrap">90</td>
                        <td className="px-2 py-4 whitespace-nowrap text-left text-sm font-medium ">
                            <button onClick={() => openModalForRow()}>
                                <BsThreeDotsVertical />
                            </button>

                            {/* {isEdit && (
                                <div className='absolute bg-white shadow-xl left-[80%] top-[72%] p-2 flex flex-col 
                                space-y-2 items-center rounded-md text-black text-sm'
                                    // ref={modalRef}
                                    >
                                    <div className='flex justify-between items-center gap-4'>
                                        <Image
                                            priority
                                            src='/images/inventory/edit_icon.svg'
                                            alt='edit icon'
                                            width='20'
                                            height='20' />
                                        <button
                                            onClick={() => setEditInventory(true)}>
                                            Edit details</button>
                                    </div>

                                    <div className='flex justify-between items-center gap-2'>
                                        <Image
                                            priority
                                            src='/images/inventory/delete.svg'
                                            alt='delete icon'
                                            width='16'
                                            height='18' />
                                        <button className='justify-end'>
                                            Delete Item</button>
                                    </div>

                                </div>
                            )} */}
                        </td>
                        </tr>
                        {/* // })} */}
                    </tbody>
                </table>
            </div>
        </>
    )
                            }

export default InvoiceTableModal