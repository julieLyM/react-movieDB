import axios from "axios";
import auth from "../utils/auth";

export const searchMovieData = async () => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${auth.apiKey}`
  );
  return res.data;
};

export const getMovieDetail = async id => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${auth.apiKey}`
  );
  return res.data;
};

export const getMovieCredit = async id => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${auth.apiKey}`
  );
  return res.data;
};

export const getMovieCharacter = async id => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/person/${id}?api_key=${auth.apiKey}&language=en-US`
  );
  return res.data;
};

export const getCharacterPic = async id => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/person/${id}/images?api_key=${auth.apiKey}`
  );
  return res.data;
};

export const getMovieSearch = async query => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/search/multi?api_key=${auth.apiKey}&query=${query}`
  );
  return res.data;
};
