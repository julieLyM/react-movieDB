import React, { Component } from "react";
import { getMovieCredit } from "../service/movieData";
import { Link } from "react-router-dom";

export default class CreditsMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieCredit: [],
      movieActor: []
    };
  }

  componentDidMount() {
    this.fetchMovieCredit();
  }

  async fetchMovieCredit() {
    const movieCredit = await getMovieCredit(this.props.id);
    this.setState({
      movieCredit: movieCredit.cast
    });
  }

  render() {
    return (
      <div>
        <h3>Credits</h3>
        <div>
          {this.state.movieCredit.map((element, i) => (
            <Link key={element.id + "-" + i} to={`/actor/${element.id}`}>
              <div style={{ color: "red" }}> {element.name}</div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
