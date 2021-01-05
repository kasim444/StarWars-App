/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import axios from 'axios';
import DetailHeader from './DetailHeader';
import MovieContent from './MovieContent';
import FeaturedMovies from '../FeaturedMovies';
import Loading from '../../placeholder/Loading';
import '../../../styles/movieDetail.css';

// import images
import NewHope from '../../../img/movies/Star-Wars-New-Hope-IV-Poster.webp';
import AttackClones from '../../../img/movies/Star-Wars-Attack-Clones-II-Poster.jpeg';
import PhantomMenace from '../../../img/movies/Star-Wars-Phantom-Menace-I-Poster.webp';
import RevengeSith from '../../../img/movies/Star-Wars-Revenge-Sith-III-Poster.webp';

// TODO : All film posters not here.
const moviesImageLinks = [
  PhantomMenace,
  AttackClones,
  RevengeSith,
  NewHope,
  PhantomMenace,
  AttackClones,
  RevengeSith,
  NewHope,
];

class MovieDetails extends Component {
  state = {
    title: undefined,
    episode_id: undefined,
    opening_crawl: undefined,
    director: undefined,
    producer: undefined,
    release_date: undefined,
    characters: [],
    loading: true,
  };

  async componentDidMount() {
    const titleSearch = this.props.match.params.title;
    const characterNames = [];
    const movieDetail = await axios.get(
      `https://swapi.dev/api/films/?search=${encodeURI(titleSearch)}`,
    );
    const charactersFetchLinks = movieDetail.data.results[0].characters.slice(0, 10);
    const promisesData = await charactersFetchLinks.map(link => axios.get(link));
    axios.all(promisesData).then(value => {
      value.map(val => characterNames.push(val.data.name));
      const {
        title,
        episode_id,
        opening_crawl,
        director,
        producer,
        release_date,
      } = movieDetail.data.results[0];
      this.setState({
        title,
        episode_id,
        opening_crawl,
        director,
        producer,
        release_date,
        characters: characterNames,
        loading: false,
      });
    });
  }

  render() {
    const { episode_id, loading } = this.state;
    return loading ? (
      <Loading />
    ) : (
      <div>
        <main className="movieBg">
          <DetailHeader imgLink={moviesImageLinks[episode_id - 1]} />
          <MovieContent imgLink={moviesImageLinks[episode_id - 1]} movieInfo={this.state} />
        </main>
        <FeaturedMovies />
      </div>
    );
  }
}
export default MovieDetails;
