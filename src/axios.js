import axios from 'axios';

const instance = axios.create({
    //baseURL: 'https://my-demoblog.firebaseio.com/'
    baseURL: 'https://prueba-ef8eb.firebaseio.com/'
});

export default instance;