import React from "react";

const MoviesDetail = (props) => {
    const movie = props.movie;

    return (
        <div>
            <h1>{movie.name}</h1>
            <img src={movie.image} alt={movie.name} />
            <p>{movie.description}</p>
        </div>
    );

};
export default MoviesDetail;