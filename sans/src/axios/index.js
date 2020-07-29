import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://localhost:8081'
});

export default axios
