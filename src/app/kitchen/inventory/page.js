'use client'; 

import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Modalform from './modalform';
import Link from 'next/link';
// import {minusIcon} from '../../../../public/images/inventory/minusSymbol.svg';

export default function Page() {
const [isOpen, setIsOpen] = useState(false)
const [createInventory, setCreateInventory] = useState(false)

useEffect(()=>{
  setIsOpen(false);
},[createInventory]);


return (
  <>
<section className='p-4 m-2'>
 <div className='flex flex-col justify-between space-y-2'>

 <div className='flex relative justify-end '>
 <button 
 onClick={() => setIsOpen(true)}
 className='p-2 text-center place-items-end bg-primary text-white font-semibold rounded-md w-1/3'>
 Inventory Manager
 </button>



{/*-------------- modal starts here--------------*/}
{
  isOpen ? (
    <div className='absolute top-[100%] border bg-white border-zinc-400 text-black p-3 w-[20%] flex flex-col text-sm space-y-2 items-center rounded-md'>
    
    <div className='flex justify-between items-center gap-5'>
    {/*------------icon for creating new inventory----------*/}
    <Image
     priority
     src='/images/inventory/add_symbol.svg'
     alt='create icon'
     width='18'
     height='18'/>
     <button 
     onClick={()=> setCreateInventory(true)}
     className='flex space-x-2 justify-between '>
     Create Inventory</button>
    </div>

    <div className='flex justify-between items-center gap-5 space-x-2'>
    {/*----------- icon for viewing inventory-----------*/}
    <Image
     priority
     src='/images/inventory/minus_symbol.svg'
     alt='view icon'
     width='18'
     height='18'/>
    <Link href='/kitchen/inventory/table'>
    <div>View Inventory</div>
    </Link>
    </div>
    </div>
  ): null
}

 </div>

  <div className='flex space-x-2 justify-between items-center'>
  
  <div className='space-y-2 border-zinc-400 bg-primary w-1/3 rounded-lg p-4'>
  <div className='items-right justify-end'>icon</div>
  <h1 className='text-white text-sm font-normal pb-4'>Total Inventory</h1>
  <h5 className='text-white text-3xl font-bold'>20</h5>
  <p className='text-[12px] text-white '>+ increased by 20% since Dec 2022</p>
  </div>
  
  <div className='space-y-2 border border-zinc-400 bg-white w-1/3 rounded-lg p-4'>
  <div className='items-right justify-end'>icon</div>
  <h1 className='text-black text-sm font-normal pb-4'>Minimum inventory alert</h1>
  <h5 className='text-black text-3xl font-bold'>10</h5>
  <p className='text-[12px] text-green-600'>+ increased by 20% since Dec 2022</p>
  </div>

  <div className='space-y-2 border border-zinc-400 bg-white rounded-lg w-1/3 p-4'>
  <div className='items-right justify-end'>icon</div>
  <h1 className='text-black text-sm font-normal pb-4'>Available inventory</h1>
  <h5 className='text-black text-3xl font-bold'>10</h5>
  <p className='text-[12px] text-red-500'>- decreased by 20% since Dec 2022</p>
  </div>
  
  </div>

  <div className='flex mb-5 justify-end'>
  <div className='border p-2 w-1/3 text-center  border-primary rounded-lg'>
  <p>View Custom report</p>
  </div>
  </div>
  
  <div className='border mt-5 h-max flex flex-col flex-grow rounded-lg'>
  <div className='flex justify-between items-center p-3 border-b border-b-zinc-400'>
  <h1>History</h1>
  <h1>View all</h1>
  </div>
  <div className=' p-3 flex items-center justify-around'>
  <div className='text-sm'>
  <p> You have no previous inventory changes <br/>
  create your first inventory item,<br/>
  just click the ' ' button to begin.
  </p>
  </div>
  <Image
  src='/images/inventory/inventory_bg.png'
  alt='bg-image'
  width={200}
  height={100}
  ></Image>
    </div>
  </div>

  </div>
  </section>

  <Modalform isVisible={createInventory} onClose={() => setCreateInventory(false)} /> 
  </>
  )
}