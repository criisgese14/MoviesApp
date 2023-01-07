import axios from "axios"
const {REACT_APP_API_KEY} = process.env

// Obtener últimas películas --> https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1
// buscar pelicula --> https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

export const getAllMovies = async () => {
    const data = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${REACT_APP_API_KEY}`);
    return data.data.results;
};

export const getMovieDetail = async id => {
    const data = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${REACT_APP_API_KEY}`);
    return data.data;
};

export const searchMovie = async (input) => {
    const data = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_API_KEY}&include_adult=false&query=${input}`);
    return data.data.results;
};

