import axios from "axios";

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    timeout:3000
})

export default instance;