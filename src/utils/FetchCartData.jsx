
import axios from 'axios'

const fetchCartData=async()=>{

    try {
        const response=await axios.get('http://localhost:9890/newCart/getCart')
       return response?.data
        
    } catch (error) {
        console.log(error)
    }
}

export default fetchCartData