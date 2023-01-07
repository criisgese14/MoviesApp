// Obtener datos de una pelicula --> https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getMovieDetail } from "../Controllers";

export const MovieDetail = () => {

    const {id} = useParams();
    
    useEffect(() => {
        getMovieDetail(id).then(setData)
    }, []);

    const [data, setData] = useState([]);

    console.log(data);

    return (
        <div>
            <Link to='/'>Back</Link>
            <h1>Detalles de la pelicula</h1>
            <p>Title: {data.title}</p>
            <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${data.poster_path}`} alt=""/>
            <p>Sinopsis: {data.overview}</p>
            <p>Realase Date: {data.release_date}</p>
            <p>Vote Average: {data.vote_average}</p>
            <p>Duration: {data.runtime} min</p>
            <p>Genres: {data?.genres?.map(el => el.name + ' ')}</p>
        </div>
    )
}