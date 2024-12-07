import React from 'react'

const OrderPriceDetails = ({data}) => {
  return (
    <div className=''>
    <div>
        <p className=' py-2'>Price Details</p>

        <p className='border bg-gray-200'></p>


       <div className='grid gap-2 my-2'>
       <div className='flex items-center justify-between'>
            <p>List Price</p>
            <p className='line-through'>$4,999</p>
        </div>
        <div className='flex items-center justify-between'>
            <p>Selling Price</p>
            <p className=''>$1,399</p>
        </div>
        <div className='flex items-center justify-between'>
            <p>Extra Discount</p>
            <p>-$600</p>
        </div>
        <div className='flex items-center justify-between'>
            <p>Special Price</p>
            <p >${data?.itemprice}</p>
        </div>
        <div className='flex items-center justify-between'>
            <p>Delivery Charge</p>
            <p className='text-green-500'>{data?.deliveryfee} </p>
        </div>
        <div className='flex items-center justify-between'>
            <p>Handling Fee</p>
            <p >${data?.platformfee}</p>
        </div>
        <p className='border border-dotted bg-gray-200'></p>
        <div className='flex items-center justify-between'>
            <p className=' '>Total Amount</p>
            <p className=''>${data?.totalAmount}</p>
        </div>
     
      
       </div>
    </div>
</div>
  )
}

export default OrderPriceDetails