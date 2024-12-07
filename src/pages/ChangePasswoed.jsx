import React from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const ChangePasswoed = () => {

    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        
        toast.success(" you have successfully logged in")
            navigate('/')
            
        
        
        
        }
  return (
    <section className='container mx-auto w-full px-2'> 
    <div className='w-full max-w-lg mx-auto rounded-md my-4 p-4 bg-gray-100 shadow-lg'>
      <p className='px-3 text-center'>Change Password</p>

     <form className='grid mt-6 gap-2' onSubmit={handleSubmit} >
  
   
       <div className='grid gap-1'>
           <label htmlFor='password'>Enter New Password :</label>
           <input
            type='text'
            name='password'

           className='outline-none  border p-1 rounded-lg'
           required
           />
       </div>

       <div className='grid'>
           <label htmlFor='confirmpassword'>Confirm Your Password :</label>
           <input
            type='text'
            name='confirmpassword'
           className='outline-none  border p-1 rounded-lg'
           required
           />
       </div>
    

       <button  className= "bg-green-800 hover:bg-green-700  rounded-md  text-white my-2 p-1 cursor-pointer " >Save</button>
     
 
     </form>
      </div>
    
   </section>
  )
}

export default ChangePasswoed