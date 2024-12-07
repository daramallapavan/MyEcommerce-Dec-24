import React from 'react'
import { ImFolderUpload } from "react-icons/im";
const CategoryModel = ({close}) => {
  return (
   <section className=' fixed bg-opacity-95 top-0 bottom-0 left-0 right-0 bg-gray-500 flex items-center justify-center px-2'>
    <div className='bg-white   max-w-md w-full p-2 overflow-hidden'>
            <div className='flex items-center justify-between'>
            <h1 className='font-semibold'>Add Product</h1>
            <button onClick={close} >
                close
            </button>
            </div>
            <div>
                <form className='grid gap-1'>
                  <div className='grid gap-1 '>
                    <label>Name</label>
                    <input 
                    type='text'
                    placeholder='enter product name'
                    className='outline-none border bg-blue-50 rounded px-2 py-1'
                    />
                  </div>
                  <div className='grid gap-1 '>
                    <label>Description</label>
                    <textarea 
                    type='text'
                    placeholder='enter product name'
                    className='outline-none border bg-blue-50 rounded px-2 py-1 resize-none '
                    rows={2}
                    />
                  </div>
                  <div className='flex gap-4 my-2'>
        
                  <label htmlFor='productImage1' className='bg-blue-50 h-24 w-24 border rounded flex justify-center items-center cursor-pointer'>
                          <div className='text-center flex justify-center items-center flex-col'>
                        
                                    <ImFolderUpload size={25}/> 
                                   <p className='text-sm'>Upload Image</p>
                            
                          </div>
                          <input 
                            type='file'
                            id='productImage1'
                            className='hidden'
                            accept='image/*'
                      
                          />

                  </label>
                  <label htmlFor='productImage2' className='bg-blue-50 h-24 w-24 border rounded flex justify-center items-center cursor-pointer'>
                          <div className='text-center flex justify-center items-center flex-col'>
                        
                                    <ImFolderUpload size={25}/> 
                                   <p className='text-sm'>Upload Image</p>
                            
                          </div>
                          <input 
                            type='file'
                            id='productImage2'
                            className='hidden'
                            accept='image/*'
                      
                          />

                  </label>
                  <label htmlFor='productImage3' className='bg-blue-50 h-24 w-24 border rounded flex justify-center items-center cursor-pointer'>
                          <div className='text-center flex justify-center items-center flex-col'>
                        
                                    <ImFolderUpload size={25}/> 
                                   <p className='text-sm'>Upload Image</p>
                            
                          </div>
                          <input 
                            type='file'
                            id='productImage3'
                            className='hidden'
                            accept='image/*'
                      
                          />

                  </label>
                  <label htmlFor='productImage4' className='bg-blue-50 h-24 w-24 border rounded flex justify-center items-center cursor-pointer'>
                          <div className='text-center flex justify-center items-center flex-col'>
                        
                                    <ImFolderUpload size={25}/> 
                                   <p className='text-sm'>Upload Image</p>
                            
                          </div>
                          <input 
                            type='file'
                            id='productImage4'
                            className='hidden'
                            accept='image/*'
                      
                          />

                  </label>
                    </div>

           
                
              
                </form>
            </div>

    </div>
   </section>
  )
}

export default CategoryModel