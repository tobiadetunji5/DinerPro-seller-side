'use client'; 

import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
// import Modalform from './modalform';
import Link from 'next/link';
import DataCard from '@/app/components/card/DataCard';
import PaymentsTable from '@/app/components/table/PaymentsHistory';

// <Modalform isVisible={createInventory} onClose={() => setCreateInventory(false)} /> 
  
export default function Page() {
const [isOpen, setIsOpen] = useState(false)
const [createInventory, setCreateInventory] = useState(false)

useEffect(()=>{
  setIsOpen(false);
},[createInventory]);


return (
  <>
<section className='p-4 m-2'>
 <div className='flex flex-col justify-between'>

 <div className='flex justify-end '>
 <button 
 onClick={() => setIsOpen(true)}
 className='relative p-2 mb-3 text-center place-items-end bg-primary text-white font-semibold rounded-md w-[27%]'>
 Payments Manager
 </button>



{/*-------------- modal starts here--------------*/}
{
  isOpen ? (
    <div className='absolute top-[15%] border bg-white border-zinc-400 text-black p-3 w-[15%] 
    flex flex-col text-sm space-y-2 items-center rounded-md'>
    
    <div className='flex justify-between items-center gap-5 hover:bg-primary'>
    {/*------------icon for creating new inventory----------*/}
    <Image
     priority
     src='/images/inventory/paymenteye.svg'
     alt='create icon'
     width='18'
     height='18'/>
     <button 
     onClick={()=> setCreateInventory(true)}
     className='flex space-x-2 justify-between '>
     Create Invoice</button>
    </div>

    <div className='flex justify-between items-center gap-5 space-x-2'>
    {/*----------- icon for viewing inventory-----------*/}
    <Image
     priority
     src='/images/inventory/paymenteye.svg'
     alt='view icon'
     width='18'
     height='18'/>
    <Link href='/kitchen/inventory/table'>
    <div>By Sales Channel</div>
    </Link>
    </div>

    <div className='flex justify-between items-center gap-5 space-x-2'>
    {/*----------- icon for viewing inventory-----------*/}
    <Image
     priority
     src='/images/inventory/paymenteye.svg'
     alt='view icon'
     width='18'
     height='18'/>
    <Link href='/kitchen/inventory/table'>
    <div>By Payment Method</div>
    </Link>
    </div>
    </div>
  ): null
}

 </div>
{/*-------------- Data Cards--------------*/}
 <div className='flex space-x-2 justify-between items-center mb-3 '>
<DataCard
bgColor={'#FFFFFF'}
statColor={'#049561'}
head='Total inventory'
number='20'
desc='+ increased by 20% since Dec 2022'/>

<DataCard
bgColor={'#FFFFFF'}
statColor={'#049561'}
head='Total payments'
number='20'
desc='+ increased by 20% since Dec 2022'/>

<DataCard
bgColor={'#FFFFFF'}
statColor={'#AF290B'}
head='Unreconciliated'
number='10'
desc='- decreased by 20% since Dec 2022'/>
 </div> 

 {/*-------------- Custom report Button--------------*/}
  <div className='flex mb-10 justify-end'>
  <div className='border p-2 w-[27%] text-center  border-primary rounded-lg'>
  <p>View Custom report</p>
  </div>
  </div>

  {/*--------------Inventory History Table--------------*/}
  <PaymentsTable/>

  </div>
  </section>

  </>
  )
}