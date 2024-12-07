import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../common/SummaryApi'
import Axios from '../utils/Axios'
import SummaryApi from '../common/SummaryApi'

const Register = () => {


    const [data,setData]=useState({
        name:"",
        email:"",
        password:"",
      
      
      })
 

      const email=data?.email


    const navigate=useNavigate()


const handleSubmit=async(e)=>{
e.preventDefault()


const response=Axios({



  ...SummaryApi.register,
  data: data
}).then((data)=>{
  toast.success(data.data)
navigate(`/registration-verify-otp/${email}`)
}).catch((error)=>{
  toast.error(error.response.data)
})

}

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
       <p className='px-3 text-center'>Welcome to Ecommerce</p>

      <form className='grid mt-6 gap-2' onSubmit={handleSubmit}>
        <div className='grid'>
            <label htmlFor='name'>Name :</label>
            <input
             type='text'
            className='outline-none p-1 border rounded-lg'
            name='name'
            value={data.name}
            onChange={handleChange}
       
            placeholder='enter your full name'
            required
            />
        </div>
        <div className='grid'>
            <label htmlFor='email'>Email :</label>
            <input
             type='text'
             name='email'
             onChange={handleChange}
value={data.email}
            className='outline-none p-1 border rounded-lg'
            placeholder='enter email address'
            required
            />
        </div>
        <div className='grid'>
            <label htmlFor='password'>Password :</label>
            <input
             type='text'
             name='password'
             onChange={handleChange}
        value={data.password}
            className='outline-none  border p-1 rounded-lg'
            required
            />
        </div>

        
     

        <button disabled={!validValue}  className={`${validValue ? "bg-green-800 hover:bg-green-700" : "bg-gray-500" } rounded-md  text-white my-2 p-1 cursor-pointer `} >Register</button>
      
      <a className=''>Already Have an Account? <Link className='cursor-pointer' to={'/login'}>Sign in</Link> </a>
      </form>
       </div>
     
    </section>
  )
}

export default Register