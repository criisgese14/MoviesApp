import { Link } from "react-router-dom"



export const Movie = ({title, poster, id}) => {
    return (
        <div>
            <h1>{title}</h1>
            <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${poster}`} alt='img'/>
            <Link to={`/${id}/detail`}> Click to view more details</Link>
        </div>
    )
}