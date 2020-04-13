import axios from 'axios';


const instance = axios.create({
    baseURL : 'https://myapp-55c95.firebaseio.com/',
    timeout : 5000
})
instance.interceptors.request.use(function(config){
    console.log(config);
    return config;
} , function(err) {
    return Promise.reject(err)
})
instance.interceptors.response.use(function(response) {
    return response;
},function(err) {
    return Promise.reject(err);
})
export default instance;
