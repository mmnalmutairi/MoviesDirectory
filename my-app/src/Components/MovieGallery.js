
// Importing the style file 
import { Header, SecondHeader, Details } from './Style';

// Importing the Details of the movie details
import MoviesDetails from './MoviesDetail';

// importing the Data File
import Movies from './Movies';



const MovieGallery = (props) => {

    const MovieList = Movies.map((movie) => <img className="Movie-image" alt={movie.name} src={movie.image} />);
    const movies = Movies[0];

    return (
        <div>
            <Header> Movies Hall </Header>
            <SecondHeader>Click The Movie To Review The Details</SecondHeader>
            <div className="gallery">
                {MovieList}
            </div>
            <Details>
                <MoviesDetails movies={movies} />
            </Details>

        </div>
    )

}

export default MovieGallery;