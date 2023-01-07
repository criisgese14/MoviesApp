import { useState } from "react";
import { searchMovie } from "../Controllers"

export const SearchBar = ({setMovies}) => {

    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await searchMovie(input);
        setMovies(result);
        setInput('');
    };

    return (
        <div>
            <form onSubmit={(e) => {handleSubmit(e)}}>
            <input 
            placeholder='search movie...'
            type='text'
            value={input}
            onChange={e => handleInputChange(e)} 
            ></input>
            <button>search</button>
            </form>
        </div>
    )
}