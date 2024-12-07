import React, { useState } from 'react'

const Profile = () => {


  return (
    <div>
        <div className='px-2 py-2'>
            <p className=''>My Profile</p>
    
          <div >
          <input
            type='text'
            placeholder='Enter Your Name'
            className='px-4 py-2 outline-none border bg-gray-50 rounded-md' />
          </div>
          <div>
          <label htmlFor='selectImage'>

<div className='w-36 h-36 border shadow-lg bg-gray-50  flex items-center justify-center my-2'>
   <p>Select Image</p>
   <input
   type='file'
   id='selectImage'
   className='hidden'
    />
   <div >

   </div>
</div>
</label>
          </div>
          


        </div>
    </div>
  )
}

export default Profile