import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';

const PayManagerModal = () => {

const [openInvoice, setOpenInvoice] = useState(false);

  return (
    <div className='absolute top-[15%] border bg-white border-zinc-400 text-black p-3 w-[15%] 
    flex flex-col text-sm space-y-2 items-center rounded-md justify-around'>
    
    <div className='flex items-center space-x-2 hover:bg-primary'>
    {/*------------icon for creating new inventory----------*/}
    <Image
     priority
     src='/images/payments/paymenteye.svg'
     alt='create icon'
     width='18'
     height='18'
     className=''/>
     <Link href='../kitchen/payments/Invoice'>
     <button>
     Create Invoice
     </button>
     </Link>
    </div>

    <div className='flex items-center space-x-2'>
    {/*----------- icon for viewing inventory-----------*/}
    <Image
     priority
     src='/images/payments/paymenteye.svg'
     alt='view icon'
     width='18'
     height='18'
     className=''/>
    <Link href='/kitchen/payments/saleschannel'>
    <div className=''>By Sales Channel</div>
    </Link>
    </div>

    <div className='flex items-center space-x-2'>
    {/*----------- icon for viewing inventory-----------*/}
    <Image
     priority
     src='/images/payments/paymenteye.svg'
     alt='view icon'
     width='18'
     height='18'
     className=''/>
    <Link href='/kitchen/payments/table'>
    <div className=''>By Payment Method</div>
    </Link>
    </div>
    </div>
  )
}

export default PayManagerModal