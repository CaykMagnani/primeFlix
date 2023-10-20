import axios from "axios";

// API KEY: https://api.themoviedb.org/3/movie/now_playing?api_key=10fe41e898a

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;