import React, { useEffect, useState } from 'react'

const PriceDetails = ({price,quantity,platformfee,deliveryfee,totalAmount}) => {

   

   




  return (
    <div className=''>
        <div>
            <p className='font-semibold py-2'>Price Details</p>

            <p className='border bg-gray-200'></p>


           <div className='grid gap-2 my-2'>
           <div className='flex items-center justify-between'>
                <p>Price ({quantity} item)</p>
                <p>{price}</p>
            </div>
            <div className='flex items-center justify-between'>
                <p>Discount</p>
                <p className='text-green-600'>-$600</p>
            </div>
            <div className='flex items-center justify-between'>
                <p>Platform Fee</p>
                <p>${platformfee}</p>
            </div>
            <div className='flex items-center justify-between'>
                <p>Delivery Charges</p>
             
                {/* <p>{deliveryfee}</p> */}
                 {
                price<500 ? (

                    <p className=''>${deliveryfee} </p>
                ):
                (
                  <span className='text-green-500'>Free</span>
                )
                } 
                
            </div>
            <p className='border border-dotted bg-gray-200'></p>
            <div className='flex items-center justify-between'>
                <p className=' font-semibold'>Total Amount</p>
          
                       <p className=''>${totalAmount}</p>
                
             
            </div>
            <p className='border border-dotted bg-gray-200'></p>
            <div>
                <p className='text-green-600'>You will Save $567 on this order</p>
            </div>
            <div className='flex items-center justify-center bg-slate-100 border py-3 px-2 shadow'>
                <p>Safe and secure payments.Easy returns.100% Authentic products.</p>

            </div>
           </div>
        </div>
    </div>
  )
}

export default PriceDetails