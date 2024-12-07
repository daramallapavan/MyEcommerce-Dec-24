import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const SelectAddress = () => {

   
    const navigate=useNavigate()

    const location=useLocation()

    const pathName=location.pathname;

    //console.log("location",location.pathname)

   //  const deliverys= location.state;


     //console.log("delevery Response from select address",deliverys)

     const [deliveryAddress,setDeliveryAddress]=useState([])
     const getDeliveryAddress=()=>{
  
        axios.get('http://localhost:9890/delivery/get')
        .then((res)=>{
    
          setDeliveryAddress(res?.data);
  
          return res?.data
        }).catch((error)=>{
          console.log("error",error)
        })
      }
    
      useEffect(()=>{
        getDeliveryAddress()
  
      },[])

    const openNewDeliveryAddress=()=>{

        navigate('/deliveryaddress',{
            state: {
                name: pathName
            }
        })
    }


    const openOrderSummary=(id)=>{

        console.log(id)


        // navigate('/orderSummary',{
        //     state: {
        //         selectedDeliveryAddress: deliveryAddress
        //     }
        // })


         // navigate('/orderSummary')
    }
  return (
   <section>
    <div className='grid gap-2 px-2'>
       
        <div className='flex items-center justify-center shadow-md py-2 border'>
            <p className='font-semibold'>Select Address</p>
        </div>

        <div className='border shadow-md  py-3 px-2 cursor-pointer ' onClick={openNewDeliveryAddress}>
            <p className='text-blue-800 text-lg '><span className='text-3xl'>+</span> Add a new address</p>
        </div>


           {
                deliveryAddress.map((delivery,index)=>{
                    return (
                        <div className='border shadow-md py-3 px-2 grid gap-3' key={index+delivery?.id+"select address"}>

        

                        <div className='flex items-center justify-between'>
                            <div className='flex gap-2'>
                                <p>{delivery?.fullname}</p>
                                <p className='px-2 bg-gray-200 rounded'>Work</p>
                            </div>
                            <div className='shadow-md border' onClick={openNewDeliveryAddress}>
                                <p className='px-4 py-1 text-sm text-blue-800'>Edit</p>
                            </div>
            
                        </div>
                        <div className='grid gap-2'>  
                        <p>{delivery.houseno}, {delivery.area},{delivery.city},{delivery.pincode}</p>
                        </div>
                        <div>
                            <p>{delivery.number}</p>
                        </div>

                        <div onClick={()=>openOrderSummary(delivery.id)} className='flex items-center justify-center rounded-md  bg-orange-400 py-2 mx-auto px-4'>
                          <p  className='text-white font-semibold' >DELIVER HERE</p>

                         </div>
                    </div>
                
                    )
                })
            }
      

     
       
    </div>
  
   </section>
  )
}

export default SelectAddress