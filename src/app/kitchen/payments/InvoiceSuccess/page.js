import React from 'react'
import OrderSuccess from "@/app/components/order_page/payments/OrderSuccess";

const page = () => {
  return (
    <div>
    <OrderSuccess 
    title='Back to payments' 
    path="/kitchen/payments"/>
  </div>
  )
}

export default page