import React, { memo } from "react";
import { Link } from "react-router-dom";

import imageBaseUrl from "../service/url";

const Movie = memo(({ element }) => {
  return (
    <div>
      <Link to={`/movie/${element.id}`}>
        <div>
          <img
            src={`${imageBaseUrl}${element.poster_path}`}
            alt="poster movie"
          />
        </div>
      </Link>

      <p>{element.title}</p>
    </div>
  );
});

export default Movie;
