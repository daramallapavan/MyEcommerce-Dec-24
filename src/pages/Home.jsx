import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Axios from '../utils/Axios'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { setProductList } from '../store/productSlice'
import getProductList from '../utils/getProductList'





const Home = () => {

  const [image,setImage]=useState(true)


  const navigate=useNavigate()


  const [productList]=useState(
    [
      {
          "id": 1,
          "name": "boAt Airdopes 111 1",
          "price": "250",
          "quantity": "10",
          "images": [
            '/src/assets/boAt Airdopes 115 1.webp',
            "/src/assets/boAt Airdopes 111 3.webp",
            "/src/assets/boAt Airdopes 111 1.webp",
            "/src/assets/boAt Airdopes 381 1.webp"
          ],
        
        
      },
      {
          "id": 2,
          "name": "boAt Airdopes 111 2",
          "price": "250",
          "quantity": "10",
          "images": [
            "/src/assets/boAt Airdopes 111 3.webp",
            "http://localhost:9890/image/download/2",
            "http://localhost:9890/image/download/2",
            "http://localhost:9890/image/download/2"
          ]
      },
      {
          "id": 3,
          "name": "boAt Airdopes 111 3",
          "price": "250",
          "quantity": "10",
          "images": [
            "/src/assets/boAt Airdopes 115 1.webp",
            "http://localhost:9890/image/download/2",
            "http://localhost:9890/image/download/2",
            "http://localhost:9890/image/download/2"
          ]
      },
      {
          "id": 4,
          "name": "boAt Airdopes 111 4",
          "price": "250",
          "quantity": "10",
          "images": [
            "/src/assets/boAt Airdopes 111 1.webp",
            "http://localhost:9890/image/download/2",
            "http://localhost:9890/image/download/2",
            "http://localhost:9890/image/download/2"
          ]
      },
      {
        "id": 5,
        "name": "boAt Airdopes 111 5",
        "price": "250",
        "quantity": "10",
        "images": [
          "/src/assets/boAt Airdopes 381 1.webp",
          "http://localhost:9890/image/download/2",
          "http://localhost:9890/image/download/2",
          "http://localhost:9890/image/download/2"
        ]
    }
  ]
  )


const getDataFromDatabase=async()=>{

  const response=await getProductList()

  setProductList(response)
}

 

  const onProductViewChange=(id)=>{
    const foundProduct=findproductById(id)

    navigate('/productView',{
      state: foundProduct
    })
    
  }
  
  const findproductById=(id)=>{
    return  productList.find((product)=>product.id===id);
  }

  return (
  <div>
    <div className='container mx-auto my-5'>
      <p>Product Section</p>


      <div className='grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 px-2 my-2'>

        {
          productList.map((product,index)=>{
            return (
     
           
              <div className='grid border text-center min-h-80 hover:shadow-lg cursor-pointer ' key={index} onClick={()=>onProductViewChange(product.id)}>
   
   <div className='h-60 border border-b'>
   {image ? (
            <div className='h-full'>
              <img
              src={product?.images[0]}
              className='h-full object-cover'
              />
              </div>
          ):(
            <div className='flex items-center justify-center bg-gray-50 h-full'>
              <p>No Image</p>
              </div>
          )
        }

   </div>
      
        <div className='mr-auto w-fit block px-2'>
        <p>{product.name}</p>
        <p>Price: <span className='text-red-700'>${product.price}</span></p>
        </div>
        <div>

        </div>
       
       
      </div>
            
              
            )
          })
        }
   
   

    </div> 
    

    </div>

  </div>
  )
}

export default Home