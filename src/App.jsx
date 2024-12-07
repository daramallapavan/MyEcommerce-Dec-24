
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import toast, {Toaster} from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import getProductList from './utils/getProductList'
import { setProductList } from './store/productSlice'
import fetchCartData from './utils/FetchCartData'
import { setStoreCartData } from './store/cartSlice'
import fetchUserDetails from './utils/FetchUserDetails'
import { setUserDetails } from './store/userSlice'
function App() {


  const dispatch=useDispatch();

  const getCartData = async()=>{
    const cart = await fetchCartData()
    dispatch(setStoreCartData(cart))
}


const getUserDetails = async()=>{
  const user = await fetchUserDetails()
  dispatch(setUserDetails(user?.data))
}

useEffect(()=>{

  getCartData()

  getUserDetails()
},[])



// const productSlice=useSelector((state)=>state?.product)

// const getProducts=async()=>{
//   const productData=await getProductList()

//   dispatch(setProductList(productData?.data))

//   console.log("response",productData?.data)


//   console.log("product store",productSlice)

  
// }


// useEffect(()=>{
// getProducts()
// },[])

  return (
   <>
    <Header/>
   <div>
   <Outlet/>
   </div>
   <Toaster
   position='top-center'
   toastOptions={
    
    {
      style: {
        background: '#000',
        color: '#fff'
      
      }
    }
   }
   />

 
   </>
  )
}

export default App
