import axios from 'axios';
import { toast } from 'react-toastify';

const apiClient = axios.create({
  baseURL: 'https://dinerpro-backend-cdq6.onrender.com'
});

apiClient.interceptors.response.use(
(response) =>{
  console.log('success :', response.data)
  return response
},
  (error) => {
   console.log('error:', error)
   if(error.message === 'Network Error') return toast.error('Check internet connection')
    if (error.response) return toast.error(error.response.data.message)
    return Promise.reject(error);
  }
);

export const apiClient2 = axios.create({
  baseURL: 'https://dinerpro-backend-cdq6.onrender.com'
})
apiClient2.interceptors.request.use(
  (config)=>{
    
  }
)

export default apiClient;