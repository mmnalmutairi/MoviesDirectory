import React from "react";


const MoviesDetail = (props) => {

    const movies = props.movies;
    return (
        <div className="details-of-movie">
            <h1>{movies.name}</h1>
            <img src={movies.image} alt={movies.name} />
            <p>{movies.description}</p>
        </div>
    );

};
export default MoviesDetail;