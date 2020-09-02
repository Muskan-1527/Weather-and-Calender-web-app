import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://weather-and-calendar-web-app.firebaseio.com'
})

export default instance;