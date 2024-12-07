import React from 'react'

const ShippingDetails = ({data}) => {
  return (
    <div className=''>
        <div className='border-b p-2'>
            <p>Shipping Details</p>
        </div>
        <div className='px-2 mb-2'>
            <p className='text-lg py-2 font-semibold'>{data.fullname}</p>
            <p>{data.houseno}</p>
            <p>{data.area}</p>
            <p>{data.city}</p>
            <p>{data.state}-{data.pincode}</p>
            <p>Phone Number: {data.number}</p>
        </div>
    </div>
  )
}

export default ShippingDetails