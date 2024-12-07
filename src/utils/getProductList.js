
import axios from 'axios'

const getProductList=async()=>{

    try {
        const response=await axios.get('http://localhost:9890/product/products')
       return response?.data
        
    } catch (error) {
        console.log(error)
    }
}

export default getProductList