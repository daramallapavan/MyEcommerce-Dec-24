import React from 'react'

import {IoClose} from 'react-icons/io5'
const DeleteCategoryModel = ({close,trash}) => {
  return (
    <section className=' fixed bg-opacity-95 top-0 bottom-0 left-0 right-0 bg-gray-500 flex items-center justify-center px-2'>
    <div className='bg-white   max-w-sm w-full p-2 overflow-hidden'>
            <div className='flex items-center justify-between '>
            <h1 className='font-semibold'>Delete </h1>
            <button onClick={close}  >
                <IoClose size={20} className='hover:text-red-600'/>
            </button>
            </div>
            <div className='mt-2'>
               <p>Are you sure want to delete? </p>

               <div className='flex items-center justify-center gap-3 my-4'>
                <p className='px-2 border rounded shadow cursor-pointer hover:border-red-500' onClick={close}>Cancel</p>

                <p className='px-2 border rounded shadow cursor-pointer hover:border-red-500' onClick={trash} >Delete</p>

               </div>
            </div>

    </div>
   </section>
  )
}

export default DeleteCategoryModel