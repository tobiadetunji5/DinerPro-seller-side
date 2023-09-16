"use client"
import React, { useEffect } from 'react';
import { useState } from 'react';
import StepIndicator from './StepIndicator';
import InvoiceForm from './InvoiceForm';
import Checkout from '@/app/components/order_page/payments/Checkout';
import Form from '@/app/components/order_page/payments/Form';
import CartContainer from '@/app/components/order_page/create_new_order/CartContainer';

const InvoicePage = () => {

    const stage = ['Item Details', 'Checkout', 'Confirm'];
    const [page, setPage] = useState(0);
    const [visible, setVisible] = useState(true)

    const pageDisplay = () => {

        if (page == 0) {
            return <InvoiceForm />
        } else if (page == 1) {
            return (
                <div className='flex justify-between mt-8'>
                    <Form />
                    <CartContainer
                        title='Item details'
                        path=""
                        onClick={() => setPage((prevState) => prevState + 1)} />
                </div>
            )
        } else {
            return (
                <div className='flex justify-between mt-8'>
                    <Form />
                    <Checkout
                      path="/kitchen/payments/InvoiceSuccess"/>
                </div>
            )
        }
    }

    useEffect(() => {
        if (page == 1 || page == 2) {
            setVisible(false)
        }
    }, [page])
    return (
        // Step indicator

        // ============Main border====================
        <div className=' relative flex flex-col justify-evenly border border-zinc-400 rounded-lg m-5 h-[87vh]'>

            {/* ====================Stage Indicator============== */}
            <div>
                <StepIndicator stage={stage} page={page} />
            </div>

            {/* =================Display body================= */}
            <section className='overflow-auto'>
                {pageDisplay()}
            </section>

            {/* ==============page controller================== */}
            {visible && (
         <div className=' absolute top-[90%] left-[70%] flex items-end justify-end mr-8'>
            <button disabled={page == stage.length - 1}
            onClick={() => setPage((prevState) => prevState + 1)}
                className=' text-white font-medium bg-black border border-black rounded-md px-8 py-1'>
                Continue
            </button>
        </div> 
            )}
        </div>
    )
}

export default InvoicePage