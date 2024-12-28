
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import toast, {Toaster} from 'react-hot-toast'
import { useEffect } from 'react'
import fetchCartData from './utils/FetchCartData'
import { useDispatch } from 'react-redux'
import { addToCart } from './redux/CartSlice'

function App() {

  const dispatch=useDispatch()

  const getCartData = async()=>{
     const cart=await fetchCartData();

     if(cart.length!==0){
      dispatch(addToCart(cart))
      console.log("databasecart",cart)
     }

 

    
}

useEffect(()=>{
   getCartData()
 },[])





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
