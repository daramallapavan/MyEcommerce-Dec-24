import Axios from '../utils/Axios'
import SummaryApi from '../common/SummaryApi'

const UploadImage = async(image)=>{
    try {
        const formData = new FormData()
        formData.append('file',image)

        const response = await Axios({
            ...SummaryApi.uploadImage,
            data : formData
        })

        if(response===null){
            console.log("empty response")
        }
        console.log("upload image response",response)

    } catch (error) {
        console.log("error",error)
    }
}

export default UploadImage