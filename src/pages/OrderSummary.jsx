import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {IoDocumentText} from 'react-icons/io5'
import PriceDetails from './PriceDetails';
import axios from 'axios';
import { useSelector } from 'react-redux';

const OrderSummary = () => {

  const data=useSelector((state)=>state?.placeOrder?.selectedCartItems)

  console.log("cartItemsListOrder",data)


  //const deliveryData=useSelector((state)=>state?.deliveryAddress?.data)

  //console.log("deliveryData....",deliveryData)

  const [deliveryAddress,setDeliveryAddress]=useState([])

  //const location=useLocation()

  //const data= location.state?.data;

  const selectedItems=data.items

  const itemprice=data.price
  
  const itemquantity=data.quantity

  const platformfee=data.platformfee

  const deliveryfee=data.deliveryfee

  const totalAmount=data.totalAmount

  const delivery=deliveryAddress[deliveryAddress.length-1]

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

    const navigate=useNavigate()

    const onClickChange=()=>{

        navigate('/selectAddress')
    }


    const openPayment=()=>{
        navigate('/payment',
            {
                state: {
                    deliveryaddressid: delivery.id,
                    totalAmount: totalAmount,
                    selectedItemPrice: itemprice,
                    itemquantity: itemquantity,
                    platformfee: platformfee,
                    selectedItems: selectedItems

                }
            }
        )
    }

  return (
   <section>
     <div className='grid gap-2 px-2'>

        <div className='flex items-center justify-center shadow-md py-2 border'>
            <p className='font-semibold'>Order Summary</p>
        </div>

        <div className='shadow-md border py-2 px-2 grid gap-2'>
            <div className='flex justify-between items-center'>
                <p className='font-semibold'>Deliver to:</p>
                <button className='px-2 py-1 border text-blue-700 border-gray-300 rounded-md' onClick={onClickChange} >change</button>
            </div>
            <div className='flex gap-2'>
                <p className='font-semibold'>{delivery?.fullname}</p>
                <p className='px-2 bg-gray-200 rounded'>{delivery?.type}</p>
            </div>
            <div className='grid gap-2'>  
                <p>{delivery?.houseno}, {delivery?.area},{delivery?.city},{delivery?.pincode}</p>
                <p></p>
            </div>
            <div>
                <p>{delivery?.number}</p>
            </div>
        </div>


        <div className='border shadow-md  flex justify-between items-center px-2 py-3'>
            <div className='flex items-center justify-center gap-2'>
                <p className='text-gray-500'><IoDocumentText size={25}/></p>
            <p>Invoice</p>
            </div>
          
            <p className='font-semibold text-blue-800'>Add Email</p>
        
        </div>
        
        <div className='  shadow-md border' >

        {
            selectedItems.map((item,index)=>{
            return (
        <div className='flex items-center justify-between border shadow-md ' key={index+"items......"}>
                <div className='lg:w-20 lg:h-20 w-22 h-22 '>
                 <img
                    src={item.imageUrl}
                    size={20}
                    className=' object-cover overflow-hidden w-22 h-22 '
                  />

                </div>

                <div className='grid gap-2 lg:px-6'>

                     <p className='line-clamp-1 lg:line-clamp-none'><span className='font-semibold'>ZEBRANICS</span> Zeb- Thunder, With 60H, BT v5.3 , Gaming Mode ,ENC ,AUX,mSD,Dual Pairing Bluetooth & Wired Headset (Teal Green,On the Ear)</p>
                     <p className='text-xs'>Teal Green, On the Ear</p>

                    <div className='flex gap-2 '>
                         <span className='text-sm line-through'>$1,998</span>
                          <p className='text-sm font-semibold'>$600</p>
                          <p className='text-green- text-sm'>78% Off</p>
                     </div>

                </div>

        </div>
            )
            })
        }
        
         

        </div>


        <div className='p-2 border shadow-md'>
            <PriceDetails price={itemprice} quantity={itemquantity}  totalAmount={totalAmount} platformfee={platformfee} deliveryfee={deliveryfee}/>
        </div>

        <div className='p-2 border shadow-lg sticky bottom-0  bg-white '> 
            <div className='flex items-center justify-between'>
                <div className='grid gap-1'>
                    <p className='line-through'>1,999</p>
                    <p className='font-semibold text-lg'>{totalAmount}</p>
                </div>
                <div>
                    <button className='font-semibold px-6 py-2 bg-orange-400 rounded' onClick={openPayment}>Continue</button>
                </div>

            </div>

        </div>
    </div> 

   </section>
  )
}

export default OrderSummary