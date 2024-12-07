import axios from 'axios'
import React, { useState } from 'react'
import Axios from '../utils/Axios'
import SummaryApi from '../common/SummaryApi'
import ViewImage from './ViewImage'

const AddProduct = () => {

  const [data,setData]=useState({
    name : "",
    description : "",
    quantity: "",
    price: "",
    category: "",
    brand: "",
    availability: "",
    imageUrls: [
      {
        name: ""
      }
    ]

    
  })



  const [images,setImages]=useState(["","","",""])



  const [ImageURL,setImageURL] = useState("")

  

  const handleImageUrlChange=(index,newUrl)=>{


    setImages((preve)=>{
      const updatedImages=[...preve]
      updatedImages[index]=newUrl;

      setData((preve)=>{
        return{
          ...preve,
          imageUrls : [...preve.imageUrls,updatedImages]
        }
      })

      return updatedImages;
    })





    console.log("image",images)

  }



  const handleOnChange = (e)=>{
    const { name, value} = e.target 

    setData((preve)=>{
      return{
          ...preve,
          
          [name]  : value
      }
    })
  }


  const handleOnSubmit=(e)=>{
    e.preventDefault()


       Axios({
        ...SummaryApi.createProduct,
        data: data
        
      }).then((res)=>{
        console.log("response",res)
  
  
        if(data){
         setData({
          name : "",
          description : "",
          quantity: "",
          price: "",
          category: "",
          brand: "",
          availability: "",
          imageUrls: [
            {
              name: ""
            }
          ]
         })
        }
  
      }).catch((eror)=>{
        console.log(eror)
      })

      console.log("product",data)
  }

  return (
   <section>
  
    <div className='p-4 '>

      

      {/* <button onClick={addnewImage}>Add Image</button> */}

     
      <form className='grid gap-2 ' onSubmit={handleOnSubmit}>
        <div className='grid gap-1'>
          <label>Name</label>
          <input
          type='text'
          name='name'
          className='outline-none border px-2 py-1 rounded'
          value={data.name}
          onChange={handleOnChange}
          placeholder='enter name'
          />
        </div>
        <div className='grid gap-1'>
          <label>Description</label>
          <input
          type='text'
          name='description'
          className='outline-none border px-2 py-1 rounded'
          value={data.description}
          onChange={handleOnChange}
          placeholder='enter description'
          />
        </div>
        <div className='grid gap-1'>
          <label>quantity</label>
          <input
          type='text'
          name='quantity'
          value={data.quantity}
          className='outline-none border px-2 py-1 rounded'
          onChange={handleOnChange}
          placeholder='enter quantity'
          />
        </div>
        <div className='grid gap-1'>
          <label>price</label>
          <input
          type='text'
          className='outline-none border px-2 py-1 rounded'
          name='price'
          value={data.price}
          onChange={handleOnChange}
          placeholder='enter price'
          />
        </div>
        <div className='grid gap-1'>
          <label>category</label>
          <input
          type='text'
          name='category'
          value={data.category}
          className='outline-none border px-2 py-1 rounded'
          onChange={handleOnChange}
          placeholder='enter category'
          />
        </div>
        <div className='grid gap-1'>
          <label>brand</label>
          <input
          type='text'
          className='outline-none border px-2 py-1 rounded'
          name='brand'
          value={data.brand}
          onChange={handleOnChange}
          placeholder='enter brand'
          />
        </div>
        <div className='grid gap-1'>
          <label>availability</label>
          <input
          type='text'
          name='availability'
          className='outline-none border px-2 py-1 rounded'
          value={data.availability}
          onChange={handleOnChange}
          placeholder='enter availability'
          />
        </div>


        <div className='grid grid-cols-4'>
    { images.map((imageUrl,index)=> (
          <div key={index} className=''>
           

       <input type='text'
      value={imageUrl}
      className='text-sm ellipsis line-clamp-1'
      onChange={(e)=>{
        handleImageUrlChange(index,e.target.value)
      }}
      placeholder='enter image url'
      />
       { imageUrl ? (
                <img
                src={imageUrl}
                alt={`Image ${index}`}
                className='w-20 h-20 '
                onClick={()=>{
                setImageURL(imageUrl)
                }}   
                />
            
              ) : (
                <p></p>
              // <div className='w-20 h-20 bg-red-400 flex items-center justify-center border '>
              //   <p>no image</p>
              //   </div>
           ) }

        {
          ImageURL &&
          <ViewImage url={ImageURL} close={()=>setImageURL("")}/>
        }

          </div>  
      ))
      }
    </div>

      
     

        <button 
         className='my-3 hover:bg-green-600 hover:text-white  mx-auto px-4 py-1 rounded-md border  border-green-500 '
         
         >Submit</button>
      </form>
    </div>
    </section>
  )
}

export default AddProduct