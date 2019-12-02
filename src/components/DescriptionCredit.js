import React, { Component } from "react";

import { getMovieCharacter } from "../service/movieData";

import imageBaseUrl from "../service/url";

export default class DescriptionCredit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieActor: []
    };
  }

  componentDidMount() {
    this.fetchMovieCharacter();
  }

  async fetchMovieCharacter() {
    const movieActor = await getMovieCharacter(
      this.props.match.params.personId
    );
    this.setState({
      movieActor: movieActor
    });
  }

  render() {
    const {
      name,
      birthday,
      place_of_birth,
      biography,
      known_for_department,
      profile_path,
      deathday
    } = this.state.movieActor;
    return (
      <div>
        <h2>{name}</h2>
        <div>
          <img src={`${imageBaseUrl}${profile_path}`} alt="actor movie" />{" "}
        </div>
        <p>{known_for_department}</p>
        <p>{birthday}</p>
        <p>{deathday}</p>
        <p>{place_of_birth}</p>
        <p>{biography}</p>
      </div>
    );
  }
}
