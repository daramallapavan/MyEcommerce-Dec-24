import React from 'react'

const ManyMoreQuantity = ({close}) => {
  return (
<section className='fixed top-0 right-0 left-0 bottom-0 bg-gray-500 bg-opacity-95 flex items-center justify-center px-2'>
    <div className='w-full max-w-md bg-white p-4'>
      <div className='flex items-center justify-between'>
      <p>Add More Quantity</p>
      <p className='hover:text-red-800' onClick={close} >Close</p>
      </div>


        <div className='grid gap-3 py-2'>
            <p>Quantity</p>
            <input type='text'
            className='border outline-none bg-gray-50 w-full px-4 py-1'
            placeholder='enter quantity '/>

        </div>
        <div className='text-center  '>
            <button className='hover:bg-green-600  border-green-600 px-4 border rounded shadow-md py-1'>ADD</button>
        </div>
    </div>

</section>
  )
}

export default ManyMoreQuantity