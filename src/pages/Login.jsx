import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import SummaryApi from '../common/SummaryApi'
import Axios from '../utils/Axios'

const Login = () => {

  const navigate=useNavigate()

const handleChange=(e)=>{

    const { name,value}=e.target
    setData((preve)=>{

        return {
            ...preve,
            [name]: value

    }
    })
}

const [data,setData]=useState({
  email:"",
  password:""

})

  const validValue= Object.values(data).every(e1=> e1)



  const email=data?.email

  const handleSubmit=(e)=>{
    e.preventDefault()
    
    
    const response=Axios({
      ...SummaryApi.login,
      data: data
    }).then((data)=>{
      toast.success(data.data)

      setData({
        email:"",
        password:""
      })
      localStorage.setItem('email',email)
      navigate('/')
    }).catch((error)=>{
      toast.error(error.response.data)
    })
    
    }
    

  return (
    <section className=' w-full px-2 '> 
     <div className='w-full max-w-lg mx-auto rounded-md my-4 p-4 bg-gray-100 shadow-lg'>
       <p className='px-3 text-center'>Welcome to Ecommerce</p>

      <form className='grid mt-6 gap-2' onSubmit={handleSubmit}>

        <div className='grid gap-1'>
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


        <div className='text-end'>
          <Link to={'/forget-password'} className='cursor-pointer hover:underline'>ForgetPassword? </Link>
        
        </div>


     

        <button  className={`${validValue ? "bg-green-800 hover:bg-green-700" : "bg-gray-500" } rounded-md  text-white  p-1 cursor-pointer `} >Login</button>
        <p className='cursor-pointer mb-3 '> Don't Have an Account? <Link to={'/register'} className='cursor-pointer hover:underline'>SignUp</Link></p>
      </form>
       </div>
     
    </section>
  )
}

export default Login