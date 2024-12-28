import React, { useState } from 'react'
import Search from './Search'
import { Link, useNavigate } from 'react-router-dom'
import { GoTriangleDown, GoTriangleUp  } from "react-icons/go";
import { FaUser } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Header = () => {

  const [openUserMenu,setOpenUserMenu] = useState(false)
  const navigate=useNavigate()



  const logOut=()=>{
    localStorage.clear()
    navigate('/login')
  
  }
  const isLogin=()=>{
    if(localStorage.getItem('email')){
      return ;
    }
  }
  return (
    <section className='shadow-md bg-gray-100 sticky top-0'>
        <div className='container mx-auto h-16 flex items-center justify-between  px-3'>
            <div className='flex gap-2'>
            <Link to={'/'} className='font-semibold outline-none'>Home</Link>
            <Link to={'/cart'}>Cart</Link>
       
          
    
            </div>

            <div className='hidden lg:block'>
            <Search/>

            </div>

            {/* <div className='  items-center gap-10'>
                                        {
                                            user?.id ? (
                                                <div className='relative'>
                                                    <div onClick={()=>setOpenUserMenu(preve => !preve)} className='flex select-none items-center gap-1 cursor-pointer'>
                                                        <p>Account</p>
                                                        {
                                                            openUserMenu ? (
                                                                  <GoTriangleUp size={25}/> 
                                                            ) : (
                                                                <GoTriangleDown size={25}/>
                                                            )
                                                        }
                                                       
                                                    </div>
                                                    {
                                                        openUserMenu && (
                                                            <div className='absolute right-0 top-12 w-full'>
                                                                <div className='bg-white rounded p-4 min-w-52 lg:shadow-lg'>
                                                                   <p>{user?.name}</p>
                                                                   <p className='p-[0.5px] bg-black'></p>
                                                                   <div className='grid gap-2 mt-2'>
                                                                    <p className='hover:bg-gray-100'>My Orders</p>
                                                                    <p className='hover:bg-gray-100'>Cart</p>
                                                                    <p className='hover:bg-gray-100'>Addresses</p>
                                                                    <p className='hover:bg-gray-100'>Logout</p>
                                                                    <p className='hover:bg-gray-100'>My Orders</p>
                                                                    <p className='hover:bg-gray-100'>Cart</p>
                                                                    <p className='hover:bg-gray-100'>Addresses</p>
                                                                    <p className='hover:bg-gray-100'>Logout</p>
                                                                    <p className='hover:bg-gray-100'>My Orders</p>
                                                                    <p className='hover:bg-gray-100'>Cart</p>
                                                                    <p className='hover:bg-gray-100'>Addresses</p>
                                                                    <p className='hover:bg-gray-100'>Logout</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                    
                                                </div>
                                            ) : (
                                               <div className='flex gap-1 items-center justify-center'>
                                                 <Link to={'/login'} className='text-lg px-2'>Login</Link>
                                                 <Link to={'/'} className='text-lg'>
                                                       <FaUser/>
                                                        </Link>
                                            
                                              
                                                </div>
                                                
                                            )
                                        }

             </div> */}


             <div>
             <div className='flex gap-1 items-center justify-center'>
                                                 <Link to={'/login'} className='text-lg px-2'>Login</Link>
                                                 <Link to={'/'} className='text-lg'>
                                                       <FaUser/>
                                                        </Link>
                                            
                                              
                                                </div>
                                                
             </div>
           
        </div>
    </section>
  )
}

export default Header