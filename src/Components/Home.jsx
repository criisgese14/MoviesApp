import { useEffect, useState } from "react"
import { getAllMovies } from "../Controllers";
import { Movies } from "./Movies"
import { SearchBar } from "./SearchBar"
const {REACT_APP_KEY} = process.env



export const Home = () => {
    
    useEffect(() => {
        getAllMovies().then(setMovies)
    }, []);
    
    const [movies, setMovies] = useState([]);
    console.log(movies);
    
    return (
        <div>
            <h1>MOVIES APP</h1>
            <h2>{REACT_APP_KEY}</h2>
    
            <SearchBar
            setMovies = {setMovies}/>

            {movies?.map(movie => {
                return(
                <Movies
                key = {movie.id}
                id = {movie.id} 
                title = {movie.title}
                poster = {movie.poster_path}
                />
                )
            })}
        </div>
    )
}