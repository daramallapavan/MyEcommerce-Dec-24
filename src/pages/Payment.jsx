import React, { useState } from 'react'
import {FaChevronDown,FaChevronUp} from 'react-icons/fa'
import {CiBank} from 'react-icons/ci'
import {SiPhonepe} from 'react-icons/si'
import {CiWallet} from 'react-icons/ci'


import {CiCreditCard1} from 'react-icons/ci'
import { useLocation, useNavigate } from 'react-router-dom'
import Axios from '../utils/Axios'
import SummaryApi from '../common/SummaryApi'
const Payment = () => {

    const location=useLocation()

    const navigate=useNavigate()
    const addressId=location.state?.deliveryaddressid

    const totalAmount=location.state?.totalAmount
    const itemprice=location.state?.selectedItemPrice
    const itemquantity=location.state?.itemquantity
    const platformfee=location.state?.platformfee
    const selectedItems=location.state?.selectedItems
    

    const deliveryfee=itemprice>500? 'FREE':40
    
const [openPrice,setOpenPrice]=useState(false)

const [openCahOnDelivery,setOpenCashOnDelivery]=useState(false)


const [openWallet,SetOpenWallet]=useState(false)






const [pricedetails,setpricedetails]=useState({
    itemprice: itemprice,
    itemquantity: itemquantity,
    platformfee : platformfee,
    deliveryfee: deliveryfee,
    totalAmount: totalAmount,
    discount: false
})



const [order,setorder]=useState({
    orderItemsList: selectedItems,
    deliveryAddressId: addressId,
    priceInformation: pricedetails,
    paymentTYpe: "Cash On Delivery"

})

const cashOnDeliveryHandle=()=>{

    //console.log("order",order)

    Axios({
        ...SummaryApi.addOrder,
        data: order
    }).then((res)=>{
       // console.log("orderresponse",res?.data)
        navigate('/orders',
            {
                state: {
                    orders: res?.data
                }
            }
        )
    }).catch((error)=>{
        console.log("error",error)
    })

}

  return (
    <section>
        <div className='grid gap-2 px-2'>

            <div className='flex items-center justify-center border shadow-md py-3'>
                <p className='font-semibold  text-lg'>Payments</p>
            </div>

            <div className='border shadow-md bg-blue-100  px-2  sticky top-0' >

                {
                    openPrice ? (
                        <>
                    <div className='flex items-center justify-between py-2'>
                        <p>Price ({itemquantity} item) </p>
                        <p>${itemprice}</p>
                    </div>
                    <div className='flex items-center justify-between py-2'>
                        <p>Delivery Charges </p>
                        <p className='text-green-700'>{deliveryfee}</p>
                    </div>
                    <div className='flex items-center justify-between py-2'>
                        <p>Platform fee </p>
                        <p>${platformfee}</p>
                    </div>

              
                        <p className='border border-dashed bg-gray-300'></p>
              
                    <div className='flex items-center justify-between py-2 text-blue-700' onClick={()=>setOpenPrice(false)}>
                     <div className='flex gap-2 items-center justify-center'>
                        <p>Total Amount </p>
                        <p className=''><FaChevronUp size={20}/></p>

                     </div>
                     <div>
                        <p className='font-semibold text-lg'>${totalAmount}</p>
                     </div>
                </div>
                        </>
                    ):
                    (
                        <div className='flex items-center justify-between py-2 text-blue-700' onClick={()=>setOpenPrice(true)}>
                        <div className='flex gap-2 items-center justify-center'>
                           <p>Total Amount </p>
                           <p><FaChevronDown size={20}/ ></p>
   
                        </div>
                        <div>
                        <p className='font-semibold text-lg'>${totalAmount}</p>
                        </div>
                   </div>
                    )
                }
             
              
              

            </div>

            <div className='border shadow-md bg-green-100 px-2 py-2'>

                <div className='flex items-center justify-between'>

                    <div className='grid gap-2 text-green-900'>

                        <p className='font-semibold'>5% Cashback</p>
                        <p className='text-sm '>Claim now with payment offers</p>


                    </div>

                    <div>
                        <p className='rounded-full'>Image</p>
                    </div>

                </div>

            </div>

            <div className='border shadow-md px-2 py-3'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center justify-center gap-2'>
                        <p><CiCreditCard1 size={25}/></p>
                        <p className='font-semibold'>Credit /Debit / ATM Card</p>
                    </div>
                    <div>
                        <p><FaChevronDown/></p>
                    </div>
                </div>
                
            </div>

            <div className='border shadow-md px-2 py-3'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center justify-center gap-2'>
                       <p ><CiBank size={25}/></p>
                        <p className='font-semibold'>Net Banking</p>
                    </div>
                    <div>
                        <p><FaChevronDown/></p>
                    </div>
                </div>
                
            </div>

            <div className='border shadow-md px-2 py-3'>

                {
                    openWallet ?
                    (


                    <div className='grid gap-3'>
                        <div className='flex items-center justify-between ' onClick={()=>SetOpenWallet(false)}  >
                               <div className='flex items-center justify-center gap-2'>
                                     <p><CiWallet size={25}/></p>
                                     <p className='font-semibold'>Wallets</p>
                                </div>
                                <div>
                                     <p><FaChevronUp/></p>
                                </div>
                        </div>

                        <div className='flex items-center justify-between ' >
                               <p>Phonepe Wallet</p>

                               <p><SiPhonepe size={25}/></p>
                        </div>

                        <div className='flex items-center justify-center'>
                            <div className='grid gap-2'>
                               <p>Phonepe linked mobile number</p>

                               <div className='flex gap-2'>
                               <div>
                               <input type="text"
                               placeholder='number'
                                className='outline-none border rounded-md border-gray-600 px-2 py-1'
                                />
                                </div>
                                <div className='bg-blue-900 '>
                                    <p className='font-semibold  px-6 py-1 text-white'>Link</p>
                                    </div>
                                </div>   

                                <button className='bg-orange-500 px-4 py-2 font-semibold '>Pay $425</button>
                            </div>   
                           
                           
                        </div>   

                         
                    </div>

                        
                    ):
                    (
                        <div className='flex items-center justify-between ' onClick={()=>SetOpenWallet(true)}>
                               <div className='flex items-center justify-center gap-2'>
                                     <p><CiWallet size={25}/></p>
                                     <p className='font-semibold'>Wallets</p>
                                </div>
                                <div>
                                     <p><FaChevronDown/></p>
                                </div>
                        </div>
                    )
                }
                
                
            </div>

            <div className='border shadow-md px-2 py-3'>
                <div className='flex items-center justify-between'>
                    <div>
                        <p className='font-semibold'>UPI</p>
                    </div>
                    <div>
                        <p><FaChevronDown/></p>
                    </div>
                </div>
                
            </div>

            <div className='border shadow-md px-2 py-3'>
                


                { openCahOnDelivery ? (

                    <div className=' bg-gray-100' >

                       <div className='flex items-center justify-between' onClick={()=>setOpenCashOnDelivery(false)}>
                          <div className='px-2 py-1' >
                         <p className='font-semibold'>Cash on Delivery</p>
                         </div>
                          <div>
                              <p><FaChevronUp/></p>
                           </div>
                        </div> 
                    
                        <div className='bg-white rounded-md py-2 my-3 px-2 '>

                            <div className='grid gap-3'>
                                <p className='text-sm'>Due to handling consts,a nominal fee of $7 will be charged</p>

                                <button onClick={cashOnDeliveryHandle} className='bg-orange-400 py-2 px-4 font-semibold'>Place Order</button>
                            </div>    
                            
                        </div> 
                    </div>  
                    ):(
                        <div className='flex items-center justify-between'  onClick={()=>setOpenCashOnDelivery(true)}>
                          <div >
                         <p className='font-semibold'>Cash on Delivery</p>
                         </div>
                          <div>
                              <p><FaChevronDown/></p>
                           </div>
                        </div>
                    )
                }
                  
            </div>

              
                
        </div>
            


    </section>
  )
}

export default Payment