import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import imageBaseUrl from "../service/url";
import { getMovieCredit } from "../service/movieData";

export default class CreditsMovie extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      movieCredit: []
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
    const { movieCredit } = this.state;
    return (
      <div>
        <h3>Credits</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "red"
          }}
        >
          {movieCredit.map((element, i) => (
            <Link key={element.id + "-" + i} to={`/actor/${element.id}`}>
              <div style={{ color: "red" }}>
                <div style={{ flex: "1 1 100px" }}>
                  <img
                    style={{ width: "10%" }}
                    src={`${imageBaseUrl}${element.profile_path}`}
                    alt="actor movie"
                  />
                </div>
                {element.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
