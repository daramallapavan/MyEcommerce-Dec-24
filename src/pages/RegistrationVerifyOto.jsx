import axios from 'axios'
import React, { useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { baseUrl } from '../common/SummaryApi'

const RegistrationVerifyOtp = () => {
    const navigate=useNavigate()

   

    const [data,setData]=useState(["","","","","",""])


     const otp= data.join("");

     const {email}=useParams();


    const handleSubmit=(e)=>{
    e.preventDefault()

    axios.post(`http://localhost:8080/user/verifyAndRegister?email=${email}&otp=${otp}`)
    .then((res)=>{
           toast.success(res.data)
         navigate('/login')
    }).catch((error)=>{
    toast.error(error.response.data)
    })
    
    
      
    
    }
    
    

    const inputRef=useRef([])

 
    const validValue= Object.values(data).every(e1=> e1)


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
   


    

       <button  className={`${validValue ? "bg-green-800 hover:bg-green-700" : "bg-gray-500" } rounded-md  text-white  p-1 cursor-pointer `} >Verify OTP & Register</button>
       <a className=''>Already Have an Account? <Link className='cursor-pointer' to={'/login'}>Sign in</Link> </a>
     </form>
      </div>
    
   </section>
  )
}

export default RegistrationVerifyOtp