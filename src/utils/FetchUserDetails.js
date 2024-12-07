
import axios from 'axios'

const fetchUserDetails=async()=>{

    try {
        const response=await axios.get('http://localhost:9890/user/userDetails')
       return response
        
    } catch (error) {
        console.log(error)
    }
}

export default fetchUserDetails