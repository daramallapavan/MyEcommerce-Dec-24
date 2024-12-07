import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import ManyMoreQuantity from '../components/ManyMoreQuantity';
import { setStoreCartData } from '../store/cartSlice';

import { FaCartArrowDown } from "react-icons/fa";
import toast from 'react-hot-toast';
import Axios from '../utils/Axios';
import SummaryApi from '../common/SummaryApi';

const ProductView = () => {


  


  const cartDauserCart=useSelector((state)=>state.cart)
  const dispatch=useDispatch()

  const [quantity,setQuantity]=useState(1)

const location=useLocation()

const navigate=useNavigate()

const product=location.state;



  const [mainImage,setMainImage]=useState(`${product.images[0]}`);


  const [openManyQuantityPopUp,setOpenManyQuantityPopUp]=useState(false)


  const onOptionChanges=()=>{

    setOpenManyQuantityPopUp(true)

  }

  const [isMobile,setIsMobile]=useState(false)

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



  const handleQuantityChanges=(e)=>{

    setQuantity(Number(e.target.value))
  }

  const addTOCart=()=>{

    const changeproduct={
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      imageUrl: product.images[0]
    }

    try {

      const response=Axios({
        ...SummaryApi.addToCartNew,
        data: changeproduct
      })

      toast.success('Item Added in Cart')
      
    } catch (error) {
      console.log("error",error)
    }

    navigate('/cart')

 
  

    

 
 
  }


  return (
    <div className='container mx-auto my-5 px-2'>
        <div className='grid lg:grid-cols-[400px,1fr] '>
            <div className='grid   '>

              <div className='lg:w-[380px]  cursor-pointer  overflow-hidden flex items-center justify-center'>
                  <img 
                 src={mainImage}
                  />
              </div>

              <div className='grid gap-2 grid-cols-4 lg:w-[380px]  mt-1' >
                  {
                    product?.images?.map((imageUrl,index)=>{
                      return(
                        <div className='grid border cursor-pointer' key={index} onClick={()=>setMainImage(imageUrl)} >
                        <img
                          src={imageUrl}
                          
                          />
                        </div>
                      )

                    })
                  }
                 
              </div>

            </div>

            <div className='grid bg-gray-50  '>
              <div className='px-2 '>
              <p className='text-xl font-semibold py-2'>{product.name}</p>
              <p className='py-2'>Price : ${product.price}</p>
              <p className='text-black py-1'>JIT stands for Just-In-Time and it is used for improving the performance during run time.  the Java source code (.java) conversion to byte code (.class) occurs with the help of the java c compiler.
              Then, the .class files are loaded at run time by JVM and with the help of an interpreter.</p>
              <div className=' gap-1 py-2 mb-10 '>
                <p>Quantity</p>
                <select
                className='outline-none border  py-1 px-2 cursor-pointer'
                onChange={handleQuantityChanges}
                value={quantity}
                
                >
                  <option className=''>Select Quantity</option>
                  <option className='' value={1} >1</option>
                  <option className='' value={2}>2</option>
                  <option className='' value={3}>3</option>
                  <option className='' value={4}>4</option>
                  <option className='' value={5} >5</option>
                  <option className='' value={6}>6</option>
                  <option className='' value={7}>7</option>
                  <option className='' value={8}>8</option>
                  <option className='' value={9}>9</option>
                  <option className='' value={10}>10</option>
              
             


                </select>
              </div>
              </div>
             
             
              
             
          
              <div className='text-center    '>
                {
                  isMobile ? (
                    <div className='bottom-0 fixed w-full lg:hidden block border bg-white'>
                    <button className='text-black px-4 py-2 font-bold w-1/2' onClick={addTOCart}>Add to cart </button>
                    <button className='text-black px-4 py-2 font-semibold  bg-orange-400 w-1/2' >Buy now</button>
                    </div>
                  ):(
                    <div className=' mx-auto w-fit flex gap-2'>
                    <button className=' px-4 py-2 bg-gray-500 text-white ' onClick={addTOCart}>ADDTOCART</button>
                    <button className=' px-4 py-2 bg-green-500 text-white ' >BUY NOW</button>
                    </div>
                  )
                }
             
            
             </div> 

          
            </div>

      </div>

{
  !isMobile && 
  (
    <div className='my-5 border bg-gray-500 py-1 px-2 text-white '>
    <div className='flex items-center gap-5  justify-start'>
<p>Description</p>




    </div>

  </div>
  )

}
       

        {
          openManyQuantityPopUp && (
           <ManyMoreQuantity  close={()=>setOpenManyQuantityPopUp(false)}/>
          )
        }
  </div>
  )
}

export default ProductView