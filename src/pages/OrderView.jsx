import React, { useState } from 'react'
import ShippingDetails from '../components/ShippingDetails'
import PriceDetails from './PriceDetails'
import OrderPriceDetails from './OrderPriceDetails'
import { useLocation } from 'react-router-dom'

const OrderView = () => {
    const [image,setImage]=useState('/src/assets/boAt Airdopes 111 1.webp')

    const location=useLocation()

    const id=location.state?.id
 

    const order=location.state?.order


   const imgUrl= order.orderItemsList[0]?.imageUrl
   
  return (
    <div className='px-2 my-5'>
        <div className='grid gap-2'>
        <div className='border px-2 py-2 shadow-sm '>
            <p>Order ID - {order?.orderNumber}</p>
             
        </div>
        <div className='flex justify-between items-center border p-2 shadow-sm '>
       <div>
       <p className='line-clamp-2 text-lg'>Boult Ammo 40H Playtime,ZEN ENC Mic , 40ms Low Latency Gaming Mode, Interactive LED Bluetooth HeadSet</p>

       <p className='text-gray-500'>Black</p>
       <p className='text-gray-500'>Seller: IndiFlahMart</p>
       <p className='font-semibold text-lg'>$804</p>
       </div>


        <img
  src={imgUrl}
   className='w-20 h-20  object-cover'
/>

        </div>

        <div className='shadow-sm border'>
            <ShippingDetails data={order?.delivery}/>
        </div>

        <div className='shadow-sm border px-2'>
            <OrderPriceDetails data={order?.priceInformationDto}/>
        </div>

        <div className='shadow-sm border px-2 py-2  '>
            <div className='flex gap-2 items-center'>
                <p className='w-3 h-3 rounded-full bg-black border border-red-700'></p>
    
                <p> {order?.paymentTYpe}: ${order?.priceInformationDto?.totalAmount}.0</p>
            </div>
        </div>




        </div>
  
    </div>
  )
}

export default OrderView