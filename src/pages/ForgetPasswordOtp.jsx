import React, { useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

const ForgetPasswordOtp = () => {
    const navigate=useNavigate()

    const [data,setData]=useState(["","","","","",""])

    const handleSubmit=(e)=>{
    e.preventDefault()
    
    
    toast.success("otp verified")
        navigate('/change-password')
    }

    const inputRef=useRef([])

 



  return (
    <section className='container mx-auto w-full px-2'> 
    <div className='w-full max-w-lg mx-auto rounded-md my-4 p-4 bg-gray-100 shadow-lg'>
      <p className='px-3 text-center'>Enter OTP</p>

     <form className='grid mt-6 gap-2' onSubmit={handleSubmit}>

       <div className='grid gap-2'>
           <label htmlFor='otp'>Enter Your OTP:</label>
           <div className='flex items-center justify-between gap-2 '>
            {
                data.map((element,index)=>{
                    return(
                        <input
                        key={index}
                        type='text'
                        maxLength={1}
                        ref={(ref)=>{
                            inputRef.current[index]=ref;
                            return ref
                        }}
                        value={data[index]}
                        onChange={(e)=>{
                            const value=e.target.value

                            const newData=[...data]
                            newData[index]=value
                             setData(newData)
                         if(value){
                            inputRef.current[index+1].focus()
                             }
                        }}
                        id='otp'
                        className='p-1 border w-full max-w-16 outline-none rounded-lg text-center'/>
                    )
                })
            }
           </div>
         
       </div>
   


    

       <button  className="bg-green-800 hover:bg-green-700m rounded-md my-3 text-white  p-1 cursor-pointer">Verify OTP</button>
       <a className=''>Already Have an Account? <Link className='cursor-pointer' to={'/login'}>Sign in</Link> </a>
     </form>
      </div>
    
   </section>
  )
}

export default ForgetPasswordOtp