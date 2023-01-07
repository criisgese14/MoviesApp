import { Movie } from "./Movie"

export const Movies = ({title, poster, id}) => {
    return (
        <div>
            <Movie 
            title={title} 
            poster={poster}
            id={id}
            />
        </div>
    )
}