import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'


const Dashboard = () => {


  const [selectedItem,setSelectedItem]=useState("")

  const onSelectedChange=()=>{

  }

  return (
    <section className='bg-white'>
    <div className=' grid lg:grid-cols-[250px,1fr]  '>
            {/**left for menu max-h-[calc(100vh-96px)]*/}
            <div className='py-2 sticky top-24 hidden lg:block z-50 min-h-[89vh] overflow-y-auto  w-full h-full border-r shadow-lg bg-gray-600 text-white'>

              <div className='grid gap-1 px-2'>
                <p  className='px-4 py-1 hover:bg-gray-200 hover:text-black rounded'>Dashboard</p>
                <Link to={'/dashboard/profile'} onChange={()=>{setSelectedItem("profile")}} className={selectedItem==="profile" ? 'bg-red-800  ':'  px-4 py-1 hover:bg-gray-200 rounded hover:text-black'} >Profile</Link>
                <Link  to={'/dashboard/category'} className='px-4 py-1 hover:bg-gray-200 hover:text-black rounded'>
                  Category
                  </Link>
                <Link  to={'/dashboard/product'} className='px-4 py-1 hover:bg-gray-200 rounded hover:text-black'>Product</Link>
                <Link to={'/dashboard/addProduct'}  className='px-4 py-1 hover:bg-gray-200 rounded hover:text-black'>Upload Product</Link>
             
              </div>
                {/* <UserMenu/> */}
            </div>


            {/**right for content  min-h-[75vh]*/}
            <div className=' shadow-lg    min-h-[89vh]  '>
                <Outlet/>
            </div>
    </div>
</section>
  )
}

export default Dashboard