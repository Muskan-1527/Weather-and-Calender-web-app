import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-react-project-eabd0.firebaseio.com/'
})

export default instance;