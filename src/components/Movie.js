import React from "react";
import { Link } from "react-router-dom";

import imageBaseUrl from "../service/url";

const Movie = ({ res }) => {
  return (
    <div>
      <Link to={`/movie/${res.id}`}>
        <div>
          <img src={`${imageBaseUrl}${res.poster_path}`} alt="poster movie" />
        </div>
      </Link>

      <p>{res.title}</p>
    </div>
  );
};

export default Movie;
