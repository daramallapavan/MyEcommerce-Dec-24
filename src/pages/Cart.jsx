import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import PriceDetails from './PriceDetails'
import DeliveryAddress from './DeliveryAddress'
import Axios from '../utils/Axios'
import SummaryApi from '../common/SummaryApi'
import axios from 'axios'
import toast from 'react-hot-toast'
import DeleteCategoryModel from '../components/DeleteCategoryModel'
import fetchDeliveryAddresses from '../utils/fetchDeliveryAddress'

const Cart = () => {

  const [isMobile,setIsMobile]=useState(false)

  const [address,setAddress]=useState({
    fullname: "Daramalla Pavan",
    number: "7286801785",
    alternatenumber:"8457856985",
    pincode: "500074",
    state: "Telangana",
    city: "Hyderabad",
    houseno: "1-50, 3 3 102 A ,",
    area:"Shamshad Manzil,LB Nagar,Lb Nagar Police Station",
    type: "Home"
  })

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
 
  const isAddress= Object.values(address).every(e1=> e1)


  const [cartList,setCartList]=useState([])

  const [total,setTotal]=useState()

  useEffect(()=>{

    const handleResize=()=>{
      setIsMobile(window.innerWidth<=768);

    }
     handleResize();

window.addEventListener("resize",handleResize)
return ()=>{
  window.removeEventListener("resize",handleResize)
}

  },[])

 

  const [cartId,setCartId]=useState();



  const handeSelection=(id)=>{
    setCartList((preveItems)=>
        preveItems.map((item)=>
            item.id===id ? 
            {...item, selected: !item.selected}: item
        )
    )
}
const navigate=useNavigate()

const openDeliveryPage=()=>{
navigate('/deliveryaddress')
}




const getCartItems=async()=>{
   await Axios({
    ...SummaryApi.getCartItems
  }).then((res)=>{
    //console.log(res.data)

    setTotal(res.data.length)
    setCartList(res?.data)
  }).catch((error)=>{
    console.log("error",error)
  })
}

const count=cartList.filter((item)=>item.selected).length

useEffect(()=>{
  getCartItems()
    },[])

    
    const totalPrice=cartList.reduce((sum,product)=>{return sum+ product.price*product.quantity},0);


    const totalQuantity=cartList.reduce((sum,product)=>{return sum+product.quantity},0)

    const selectedItems=cartList.filter((item)=>item.selected)

    const selectedTotalPrice= selectedItems.reduce((sum,product)=>{return sum + product.price*product.quantity},0)

    const selectedTotalQuantity= selectedItems.reduce((sum,product)=>{return sum + product.quantity},0)



    const platformfee=10;

    const deliveryfee=selectedTotalPrice>500? 0:40

    const totalAmount=deliveryfee+selectedTotalPrice+platformfee

const placeOrder=()=>{
 
  
  const data={
    
    items:selectedItems,
    price: selectedTotalPrice,
    quantity: selectedTotalQuantity,
    platformfee: platformfee,
    deliveryfee: deliveryfee,
    totalAmount: totalAmount

  }


      if(selectedItems.length === 0){
          toast.error("No items Selected for order")
        
          return
      }


      if(deliveryAddress.length===0){
        navigate('/deliveryaddress')
        return
      }else{
        // navigate('/orderSummary',
        //   {
        //     state: {

        //       items:selectedItems,
        //       price: selectedTotalPrice,
        //       quantity: selectedTotalQuantity,
        //       platformfee: platformfee,
        //       deliveryfee: deliveryfee,
        //       totalAmount: totalAmount

        //     } 
        //   }
        // )  




        navigate('/orderSummary',{
          state: {
            data: data
          }
        })
        return
      } 
   

    
     // console.log("placing order for . ",selectedItems)
      // toast.success(`Order placed for ${selectedItems.map((item)=>item.name).join(", ")}`)
      
     // navigate('/deliveryaddress')
  }
  

const deleteCartItem=async(id)=>{



 const response= await axios.delete(`http://localhost:9890/newCart/delete/${id}`)

 console.log(response.data);

 getCartItems()

 setOpenDeleteItemModel(false)




}








const [opendeleteItemModel,setOpenDeleteItemModel]=useState(false)


const deleteCart=(id)=>{
  setCartId(id)
  setOpenDeleteItemModel(true)



}

  return (
    <section className=' my-10 lg:px-4 px-2  '>
      <div className='grid lg:grid-cols-[70%,30%] gap-1'>

        <div className='grid gap-2'>

        <div className='flex items-center justify-center  shadow-md border py-2'>
          <p className='font-semibold'>CART</p>
        </div>

        <div className='border shadow-md'>
<div className='flex justify-between items-center px-2 py-4'>
<p>From Saved Addresses </p>
<button className='border px-2 py-1 rounded border-gray-500 text-blue-600 font-bold cursor-pointer'
 onClick={openDeliveryPage} >
  Enter delivery Pincode
  </button>
</div>
        </div>
        <div className='border shadow-md '>
         <div className='flex gap-2 px-2 py-2 '>
          <p className='w-5 h-5 rounded-md border border-gray-600 '></p>
          <p className=''> {count}/{total} items selected</p>
         </div>
        </div>
        <div className='border shadow-md '>
{/* <div className='grid lg:grid-cols-[10%,90%] grid-cols-2 border-b lg:px-4 py-2 gap-5   '>
  <div className='grid gap-2   '>
    <div className='border w-20 h-20'>
      <img
      src={image}
      className='w-full h-full'
      />
    </div>
    <div className='border w-20 '>
      <select className='px-1 outline-none'>
        <option>Qty</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
    </div>
  </div>
  <div className='grid gap-2 px-2 '>
   <div>
    <p className='line-clamp-1 lg:line-clamp-none'><span className='font-semibold'>ZEBRONICS</span> Zeb- Thunder, With 60H, BT v5.3 , Gaming Mode ,ENC ,AUX,mSD,Dual Pairing Bluetooth & Wired Headset (Teal Green,On the Ear)</p>
   <p className='text-xs'>Teal Green, On the Ear</p>

   </div>

   <div className='flex gap-2 '>
   <span className='text-sm line-through'>$1,998</span>
    <p className='text-sm font-semibold'>$420</p>
    <p className='text-green- text-sm'>78% Off</p>
   </div>

   <div className=''>
    <button className='px-2 py-1 border hover:bg-red-500 hover:text-white rounded-md '>Remove</button>
   </div>
  </div>
 

</div> */}
{/* <div className='flex  shadow-md border cursor-pointer lg:px-4 py-2 gap-5'>
  <div className='flex items-center justify-between'>
         <div className='lg:w-20 lg:h-20 w-22 h-22  '>
         <img
            src={image}
             className='w-full h-full  object-cover'
          />
      
         </div>

          <div className='grid gap-2 lg:px-6'>
           
          <p className='line-clamp-1 lg:line-clamp-none'><span className='font-semibold'>ZEBRONICS</span> Zeb- Thunder, With 60H, BT v5.3 , Gaming Mode ,ENC ,AUX,mSD,Dual Pairing Bluetooth & Wired Headset (Teal Green,On the Ear)</p>
          <p className='text-xs'>Teal Green, On the Ear</p>
        
   <div className='flex gap-2 '>
   <span className='text-sm line-through'>$1,998</span>
    <p className='text-sm font-semibold'>$420</p>
    <p className='text-green- text-sm'>78% Off</p>
   </div>
   <div className=''>
    <button className='px-2 py-1 border hover:bg-red-500 hover:text-white rounded-md '>Remove</button>
   </div>
          </div>

  </div>

</div>
<div className='flex  shadow-md border cursor-pointer lg:px-4 py-2 gap-5'>
  <div className='flex items-center justify-between'>
         <div className='lg:w-20 lg:h-20 w-22 h-22  '>
         <img
            src={image}
             className='w-full h-full  object-cover'
          />
      
         </div>

          <div className='grid gap-2 lg:px-6'>
           
          <p className='line-clamp-1 lg:line-clamp-none'><span className='font-semibold'>ZEBRONICS</span> Zeb- Thunder, With 60H, BT v5.3 , Gaming Mode ,ENC ,AUX,mSD,Dual Pairing Bluetooth & Wired Headset (Teal Green,On the Ear)</p>
          <p className='text-xs'>Teal Green, On the Ear</p>
        
   <div className='flex gap-2 '>
   <span className='text-sm line-through'>$1,998</span>
    <p className='text-sm font-semibold'>$420</p>
    <p className='text-green- text-sm'>78% Off</p>
   </div>
   <div className=''>
    <button className='px-2 py-1 border hover:bg-red-500 hover:text-white rounded-md '>Remove</button>
   </div>
          </div>

  </div>

</div>
<div className='flex  shadow-md border cursor-pointer lg:px-4 py-2 gap-5'>
  <div className='flex items-center justify-between'>
         <div className='lg:w-20 lg:h-20 w-22 h-22  '>
         <img
            src={image}
             className='w-full h-full  object-cover'
          />
      
         </div>

          <div className='grid gap-2 lg:px-6'>
           
          <p className='line-clamp-1 lg:line-clamp-none'><span className='font-semibold'>ZEBRONICS</span> Zeb- Thunder, With 60H, BT v5.3 , Gaming Mode ,ENC ,AUX,mSD,Dual Pairing Bluetooth & Wired Headset (Teal Green,On the Ear)</p>
          <p className='text-xs'>Teal Green, On the Ear</p>
        
   <div className='flex gap-2 '>
   <span className='text-sm line-through'>$1,998</span>
    <p className='text-sm font-semibold'>$420</p>
    <p className='text-green- text-sm'>78% Off</p>
   </div>
   <div className=''>
    <button className='px-2 py-1 border hover:bg-red-500 hover:text-white rounded-md '>Remove</button>
   </div>
          </div>

  </div>

</div> */}


<ul>
{
  cartList.map((cart,index)=>{
    return (

      <li key={cart.id+index+" cartMain"} className='py-2'>
         <label className='flex gap-2'>
                            <input
                            type='checkbox'
                            className={`${cart.selected===true ? 'bg-blue-700 border border-green-500':'bg-red-600'}`}
                            checked={cart.selected}
                            onChange={()=>handeSelection(cart.id)}
                            />
                            <div className='flex  shadow-md border cursor-pointer lg:px-4 py-2 gap-5' key={index}>
                               <div className='flex items-center justify-between '>
                                          <div className='lg:w-20 lg:h-20 w-22 h-22 '>
                                           <img
                                              src={cart?.imageUrl}
                                              className=' object-cover overflow-hidden w-22 h-22 '
                                            />
      
                                          </div>

                                <div className='grid gap-2 lg:px-6'>
           
                                      <p className='line-clamp-1 lg:line-clamp-none'><span className='font-semibold'>{cart.name}</span> Zeb- Thunder, With 60H, BT v5.3 , Gaming Mode ,ENC ,AUX,mSD,Dual Pairing Bluetooth & Wired Headset (Teal Green,On the Ear)</p>
                                      <p className='text-xs'>Teal Green, On the Ear</p>
        
                                    <div className='flex gap-2 '>
                                             <span className='text-sm line-through'>$1,998</span>
                                              <p className='text-sm font-semibold'>${cart.price}</p>
                                              <p className='text-green- text-sm'>78% Off</p>
                                    </div>
   <div className=''>
    <button className='px-2 py-1 border hover:bg-red-500 hover:text-white rounded-md'   onClick={()=>deleteCart(cart.id)} >Remove</button>
   </div>
          </div>

         </div>

                            </div>
                           
                        </label>
       
        </li>
    )
  })
}

</ul>



        </div>

{
  !isMobile && (
    <div className='border shadow-lg my-2 text-right py-3 px-2'>
    <Link to={'/orders'} className='px-4 py-1 text-white bg-orange-500'>PLACE ORDER</Link>
  </div>
  )
}
  

        </div>

        <div className='px-4  border lg:mb-0 mb-8'>
          <PriceDetails price={selectedTotalPrice}  totalAmount={totalAmount} platformfee={platformfee} deliveryfee={deliveryfee} quantity={selectedTotalQuantity}/>
        </div>
      
      </div>
   
      {isMobile && (
            <div className='border shadow-2xl my-2   fixed bottom-0 w-full bg-white py-2 '  >
              <div className='flex items-center justify-between px-2'>
                {
                  count===0 ? (
                    <p>No items selected</p>

                  ):(
                    <div className='flex gap-2 justify-center items-center'>
                         <p className='text-xl'> {totalAmount}</p>
                         <p className='line-through text-sm text-gray-600'>1345</p>
            
                    </div>
                   
                  )
                }
                   

                <div className='px-5 py-2'>
                {/* <Link to={'/deliveryaddress'} className='bg-orange-400 rounded px-3 py-1  font-semibold'>Place Order</Link> */}
                <p onClick={placeOrder} className='bg-orange-400 rounded px-3 py-1  font-semibold'>Place Order</p>
                
                </div>
               
              </div>
           
          </div>)
      }


      {
        opendeleteItemModel && (
          <div>
            <DeleteCategoryModel trash={()=>deleteCartItem(cartId)}  close={()=>setOpenDeleteItemModel(false)}/>
          </div>
        )
      }
   

    </section>

  )
}

export default Cart