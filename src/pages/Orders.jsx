import React, { useState } from 'react'
import {FaAngleRight} from 'react-icons/fa6'
import { useLocation, useNavigate } from 'react-router-dom'

const Orders = () => {

  const [image,setImage]=useState('/src/assets/boAt Airdopes 111 1.webp')

  

  const navigate=useNavigate()

  const location=useLocation()

  const orders=location.state?.orders

  console.log("ordersList",orders)

  const openViewOrder=(id)=>{

   const order= orders.find(order=>order.id===id);
    navigate('/orderView',
      {
        state: {
          id: id,
          order: order
        }
      }
    )
  }
  return (
   <section className=''>
    <div className='px-2'>
        <div className='flex justify-between gap-2 px-5  shadow-lg border py-2 sticky  w-full items-center top-16 bg-white  '>
               <div className='full'>
                      <input type='text'
                       placeholder='Search your order here'
                       className='px-2 py-1 outline-none border rounded-md border-gray-300 '
                        />
                </div>
           <div>
             <p>Filters</p>
          </div>


        </div>

        
        <div>
        {
       
       orders.map((order,index)=>{
         return (
           <div className='flex py-4  shadow-md border cursor-pointer 'key={index+"orders"} onClick={()=>{openViewOrder(order?.id)}}>
                   <div className='flex items-center justify-between' >
       
           <div className='lg:w-20 lg:h-20 w-20 h-20  '>
           <img
              src={image}
              size={25}
               className='w-full h-full  object-cover'
            />
           </div>
  
            <div className='px-2'>
             
                <p className='font-semibold'>Concelled on Jun 25 </p>
                {/* <p className='line-clamp-1'>Boult Ammo 40H Playtime,ZEN ENC Mic , 40ms Low Latency Gaming Mode, Interactive LED Bluetooth HeadSet</p> */}
          <p className='line-clamp-1'>{order.orderNumber}</p>
  
            </div>
            <div className='px-2 lg:hidden block'>
            <p><FaAngleRight/></p>
            </div>
  
          
                   </div>
            
            </div>
         )
       })
     }
        </div>

         


         {/* <div className='flex  shadow-md border cursor-pointer ' onClick={openViewOrder}>

<div className='flex items-center justify-between'>
  
<div className='lg:w-20 lg:h-20 w-22 h-22  '>
<img
  src={image}
   className='w-full h-full  object-cover'
/>
</div>

<div className='px-2'>
 
    <p className='font-semibold'>Concelled on Jun 25 </p>
    <p className='line-clamp-1'>Boult Ammo 40H Playtime,ZEN ENC Mic , 40ms Low Latency Gaming Mode, Interactive LED Bluetooth HeadSet</p>


</div>
<div className='px-2 lg:hidden block'>
<p><FaAngleRight/></p>
</div>


</div>


         </div>
          <div className='flex  shadow-md border cursor-pointer ' onClick={openViewOrder}>

<div className='flex items-center justify-between'>
  
<div className='lg:w-20 lg:h-20 w-22 h-22  '>
<img
  src={image}
   className='w-full h-full  object-cover'
/>
</div>

<div className='px-2'>
 
    <p className='font-semibold'>Concelled on Jun 25 </p>
    <p className='line-clamp-1'>Boult Ammo 40H Playtime,ZEN ENC Mic , 40ms Low Latency Gaming Mode, Interactive LED Bluetooth HeadSet</p>


</div>
<div className='px-2 lg:hidden block'>
<p><FaAngleRight/></p>
</div>


</div>


        </div>
        <div className='flex  shadow-md border cursor-pointer ' onClick={openViewOrder}>

<div className='flex items-center justify-between'>
  
<div className='lg:w-20 lg:h-20 w-22 h-22  '>
<img
  src={image}
   className='w-full h-full  object-cover'
/>
</div>

<div className='px-2'>
 
    <p className='font-semibold'>Concelled on Jun 25 </p>
    <p className='line-clamp-1'>Boult Ammo 40H Playtime,ZEN ENC Mic , 40ms Low Latency Gaming Mode, Interactive LED Bluetooth HeadSet</p>


</div>
<div className='px-2 lg:hidden block'>
<p><FaAngleRight/></p>
</div>


</div>


        </div> */}
    

    </div>

    {
      
    }
   </section>
  )
}

export default Orders