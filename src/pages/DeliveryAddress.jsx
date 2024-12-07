import React, { useState } from 'react'
import {FaArrowLeft} from 'react-icons/fa6'
import toast from 'react-hot-toast'
import Axios from '../utils/Axios'
import SummaryApi from '../common/SummaryApi'
import { useLocation, useNavigate } from 'react-router-dom'

const DeliveryAddress = () => {

  const [alternateMobile,setAlternateMobile]=useState(false)

  const navigate=useNavigate()

  

  const location=useLocation()

  const name=location.state.name



  
  const [typeSelect,setTypeSelect]=useState("")

  const [data,setData]=useState({
    fullname: "",
    number: "",
    alternatenumber:"",
    pincode: "",
    state: "",
    city: "",
    houseno: "",
    area:"",
    type: "Work"
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

  const handleOnSubmit=(e)=>{

    e.preventDefault()


    if(name==='/selectAddress'){
      Axios({
        ...SummaryApi.addDeliveryAddress,
        data: data
      }).then((res)=>{
        console.log("response",res?.data)
  
        setData(
          {
            fullname: "",
            number: "",
            alternatenumber:"",
            pincode: "",
            state: "",
            city: "",
            houseno: "",
            area:"",
            type: ""
          }
        )
        navigate('/selectAddress',
          {
            state: res?.data
          }
        )
      }).catch((error)=>{
        console.log("error",error)
      })

    }else{
      Axios({
        ...SummaryApi.addDeliveryAddress,
        data: data
      }).then((res)=>{
        console.log("response",res?.data)
  
        setData(
          {
            fullname: "",
            number: "",
            alternatenumber:"",
            pincode: "",
            state: "",
            city: "",
            houseno: "",
            area:"",
            type: ""
          }
        )
        navigate('/orderSummary',
          {
            state: res?.data
          }
        )
      }).catch((error)=>{
        console.log("error",error)
      })
    }
  
   

   

   }

  return (
    <section className='  bg-white '>


       <div className='grid gap-2 '>

        <div className='flex items-center justify-center  shadow-md py-2'>
          <p className='font-semibold'>DELIVERY ADDRESS</p>
        </div>
         {/* <div className='flex gap-4 shadow-md border py-5 items-center px-2 sticky top-0 bg-gray-100'>
          <p><FaArrowLeft/></p>
          <p>Add delivery address</p>
        </div>  */}

         {/* <div className='flex items-center justify-between shadow-md border px-4 py-2 text-sm '>
          <p>Address</p>
          <p>Order Summary</p>
          <p>Payment</p>

        </div>  */}
        <div className='px-2   my-2 '>
          <form onSubmit={handleOnSubmit}>
            <div className='grid gap-2'>
              <div>
              <input
              type='text'
               name='fullname'
               value={data.fullname}
              placeholder='Full Name'
              onChange={handleChange}
              className='border py-2 w-full border-gray-300 rounded outline-none px-2'
              />
              </div>
             <div>
             <input
              type='text'
              placeholder='Phone Number'
              onChange={handleChange}
              name='number'
              value={data.number}
              className='border py-2 w-full border-gray-300 rounded px-2 outline-none'
              />
             </div>

              <div>
              {
                !alternateMobile &&(
<p className='text-xs text-blue-600 cursor-pointer'  onClick={()=>setAlternateMobile(true)}>+Add Alternate Phone Number</p>
                )              }
               

              {
                alternateMobile && 
                (
                  <input
                  type='text'
                  placeholder='Add Alternate Phone Number'
                  onChange={handleChange}
                  name='alternatenumber'
                  value={data.alternatenumber}
                  className='border py-2  w-full border-gray-300 rounded px-2 outline-none'
                  />
                )


              }
             </div> 

             <div >
  
            
              <input
              type='text'
              placeholder='Pincode'
              name='pincode'
              value={data.pincode}
              onChange={handleChange}
              className='border py-2 w-full border-gray-300 rounded outline-none px-2'
              />
              
          
             </div>
             
             <div >
              <div className='w-full gap-2 flex '>
              <input
              type='text'
              placeholder='State'
              value={data.state}
              name='state'
              onChange={handleChange}
              className='border py-2 w-1/2 border-gray-300 rounded outline-none px-2'
              />
                <input
              type='text'
              placeholder='City'
              value={data.city}
              name='city'
              onChange={handleChange}
              className='border py-2 w-1/2 border-gray-300 rounded outline-none px-2'
              />
              </div>
          
             </div>

             <div>
              <input
              type='text'
              placeholder='House No., Building Name '
              onChange={handleChange}
              value={data.houseno}
              name='houseno'
              className='border py-2 w-full border-gray-300 rounded outline-none px-2'
              />
              </div>


              <div>
              <input
              type='text'
              placeholder='Road name,Area,Colony '
              onChange={handleChange}
              value={data.area}
              name='area'
              className='border py-2 w-full border-gray-300 rounded outline-none px-2'
              />
              </div>

              <div className='grid gap-2'>
                <p className='text-sm text-gray-600'>Type of address</p>
                <div className='flex gap-4'>
                  <p 
                    className={`px-4 py-1 border bg-gray-100 cursor-pointer rounded-full border-gray-400 
                       ${typeSelect==="Home"? 'border-orange-500':''}`}
                    onClick={()=>setTypeSelect('Home')} >
                      Home
                  </p>
                  <p className={`px-4 py-1 border bg-gray-100 cursor-pointer rounded-full border-gray-400 
                       ${typeSelect==="Work" ? 'border-orange-500':''}`}
                      onClick={()=>setTypeSelect('Work')}>
                    Work
                  </p>

                </div>


              </div>
           
              
              <div className='mt-2'>
                <button className='bg-orange-500 text-white rounded  w-full  px-4 py-1'>Save Address</button>
              </div>


              

            </div>
          </form>
        </div> 
    
      </div> 
  
   </section>
  )
}

export default DeliveryAddress