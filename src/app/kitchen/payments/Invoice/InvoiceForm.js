import React from 'react'
import InvoiceTableModal from './InvoiceTableModal';
import { useState, useEffect } from 'react';

const InvoiceForm = () => {
   const [details, setDetails] = useState({
        name: '',
        quantity: 0,
        amount: 0
    });
    const [detailsArr, setDetailsArr] = useState([]);
    const [isEdit, setIsEdit] = useState(false);

    const openModalForRow = () => {
        setIsEdit(true);
    }
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setDetails((prev)=>({
            ...prev, [name] : value
        }))
    };
    
    let {name, quantity, amount} = details;
    const handleSubmit = () => {
        setDetailsArr([...detailsArr, {name, quantity, amount}]);
        // console.log('i am detailsArr:', detailsArr);
        // console.log('i am details :', details);
        setDetails({name:'', quantity:'', amount:''})
    }
    
        useEffect(() => {
            console.log("detailsArray has changed:", detailsArr);
            console.log("details has changed:", details);
        }, [detailsArr, details]);
            

  return (
    <div className='relative py-5 border border-zinc-400 rounded-lg flex flex-col flex-grow justify-between gap-5
    overflow-auto'>

        <div className='space-y-3'>
            <h1 className='font-bold text-lg ml-8'>Item details</h1>
            <hr className='text-zinc-400' />
        </div>

        {/* ==========Form starts Here ============= */}
        {/*
        // * create the small table to update based on number of items added
        // *create button that can remove said items
        // * as well as a button that saves it too. Phew!
        */}
        
        <form className='mx-8 space-y-4'>
            <div className='flex flex-col gap-4'>
                <label htmlFor='name' className='font-bold text-base ml-4'>Item name</label>
                <input type='text' name='name' value={details.name} placeholder='Enter first name' onChange={handleChange}
                    className='p-3 border border-zinc-400 rounded-md' />
            </div>

            <div className='flex flex-col gap-4'>
                <label htmlFor='quantity' className='font-bold text-base ml-4'>Quantity</label>
                <input type='number' name='quantity' value={details.quantity} 
                placeholder='Enter quantity' onChange={handleChange}
                    className='p-3 border border-zinc-400 rounded-md' />
            </div>

            <div className='flex flex-col gap-4'>
                <label htmlFor='amount' className='font-bold text-base ml-4'>Amount</label>
                <input type='number' name='amount' value={details.amount} placeholder='Amount' onChange={handleChange}
                    className='p-3 border border-zinc-400 rounded-md' />
            </div>

        </form>

        <div className='mx-8 space-x-6'>
            <button className='text-zinc-500 font-medium bg-white border border-zinc-400 rounded-md px-8 py-1 w-[25%]'>
                Remove
            </button>
            <button onClick={handleSubmit}
            className='text-white font-medium bg-zinc-500 border border-zinc-400 rounded-md px-8 py-1 w-[25%]'>
                Save item
            </button>
        </div>

      <InvoiceTableModal info={detailsArr}/>
      {/* <div>
        <table  className='w-full lg:overflow-hidden'>
            <tbody className='border border-zinc-400'>

{detailsArr.map((info, index)=>{
                <tr>
                <td className="pl-8 py-4 whitespace-nowrap"> 
                    <input type='checkbox' name='tickbox' className='w-[18px] h-[18px]'/>
                </td>
                <td className="px-2 py-4 whitespace-nowrap">#1</td>
                <td className="px-2 py-4 whitespace-nowrap">{detailsArr.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">3</td>
                <td className="px-2 py-4 whitespace-nowrap">3000</td>
                <td className="px-2 py-4 whitespace-nowrap text-left text-sm font-medium ">
                    <button onClick={() => openModalForRow()}>
                        <BsThreeDotsVertical />
                    </button>

                    {isEdit && (
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
                    )}
                </td>
                </tr>        
            </tbody>
        </table>
    </div> */}
    
    </div>

  )
}

export default InvoiceForm