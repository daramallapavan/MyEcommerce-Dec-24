import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

const ForgetPassword = () => {
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
    e.preventDefault()
    
    toast.success(
        "OTP sent to Email"
    )
    navigate('/forget-password-verify-otp')
    
    }

    const [data,setData]=useState({
        email:""
      
      })
    
    const handleChange=(e)=>{
    
        const { name,value}=e.target
        setData((preve)=>{
    
            return {
                ...preve,
                [name]: value
    
        }
        })
    }
    
   
    
      const validValue= Object.values(data).every(e1=> e1)
    
    
    
  return (
    <section className='container mx-auto w-full px-2'> 
    <div className='w-full max-w-lg mx-auto rounded-md my-4 p-4 bg-gray-100 shadow-lg'>
      <p className='px-3 text-center'>Forget-Password</p>

     <form className='grid mt-6 gap-2 ' onSubmit={handleSubmit} >

       <div className='grid gap-1'>
           <label htmlFor='email'>Email :</label>
           <input
            type='text'
            name='email'
            value={data.email}
            onChange={handleChange}
           className='outline-none p-1 border rounded-lg'
           placeholder='enter email address'
           required
           />
       </div>

       <button  className={`${validValue ? "bg-green-800 hover:bg-green-700" : "bg-gray-500" } rounded-md my-3 text-white  p-1 cursor-pointer `} >Send OTP</button>
       <a className=''>Already Have an Account? <Link className='cursor-pointer' to={'/login'}>Sign in</Link> </a>
     </form>
      </div>
    
   </section>
  )
}

export default ForgetPassword