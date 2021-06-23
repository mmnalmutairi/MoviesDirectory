
// Importing the style file 
import { Header, SecondHeader, Details } from './Style';

// Importing the Details of the movie details
import MoviesDetails from './MoviesDetail';


// importing the Data File
import Movies from './Movies';

import { useState } from 'react';





const MovieGallery = (props) => {
    const MovieList = Movies.map((movie) => <img className="Movie-image" alt={movie.name} src={movie.image} onClick={() => alert(movie.name)} />);
    const [movie, setMovie] = useState(null);

    const setView = () => {
        return movie ? (<Details><MoviesDetails movie={movie} setMovie={setMovie} /></Details>) : (<div className="gallery">
            {MovieList}
        </div>)
    }

    return (
        <div>
            <Header> Movies Hall </Header>
            <SecondHeader>Click The Movie To Review The Details</SecondHeader>
            {setView()}
        </div>
    )

}

export default MovieGallery;



