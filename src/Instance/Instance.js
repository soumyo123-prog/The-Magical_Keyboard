import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://the-magical-keyboard.firebaseio.com/'
})

export default instance;