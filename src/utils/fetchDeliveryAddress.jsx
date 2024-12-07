import axios from 'axios'

const fetchDeliveryAddresses=async()=>{

    try {
        const response=await axios.get('http://localhost:9890/delivery/get')
       return response?.data
        
    } catch (error) {
        console.log(error)
    }
}

export default fetchDeliveryAddresses