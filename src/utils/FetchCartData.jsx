
import axios from 'axios'

const fetchCartData=async()=>{

    try {
        const response=await axios.get('http://localhost:9890/cart/getCartItems')
       return response.data
        
    } catch (error) {
        console.log(error)
    }
}

export default fetchCartData