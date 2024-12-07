import React from 'react'
import UploadImage from './UploadImage'

const Product = () => {


  const handleUploadImage=async(e)=>{

    const file = e.target.files[0]

    if(!file){
      return 
    }

   await UploadImage(file)

   


  }
  return (
    <section className='my-5 px-5 w-full'>
      <div className='w-25'>
        <label htmlFor='productImage' className='bg-blue-50 h-24 w-25 border rounded flex justify-center items-center cursor-pointer'>
          <div className='text-center flex justify-center items-center flex-col'>

          <p>Upload Image</p>

          </div>
          <input 
                type='file'
                id='productImage'
                className='hidden'
                accept='image/*'
                onChange={handleUploadImage}
              />


        </label>

      </div>
    </section>
  )
}

export default Product