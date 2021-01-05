import React, { useState, useEffect } from 'react';

// import child components
import MovieCard from './MovieCard';
import PlaceholderDiv from '../placeholder/PlaceholderDiv';

// import images
import NewHope from '../../img/movies/Star-Wars-New-Hope-IV-Poster.webp';
import AttackClones from '../../img/movies/Star-Wars-Attack-Clones-II-Poster.jpeg';
import PhantomMenace from '../../img/movies/Star-Wars-Phantom-Menace-I-Poster.webp';
import RevengeSith from '../../img/movies/Star-Wars-Revenge-Sith-III-Poster.webp';

const moviesImageLinks = [PhantomMenace, AttackClones, RevengeSith, NewHope];

function SortByEpisode(x, y) {
  return x.episode_id - y.episode_id;
}

function FeauteredMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    const data = await fetch('https://swapi.dev/api/films/');
    const moviesData = await data.json();
    const feauteredMovies = moviesData.results.filter(movie => movie.episode_id <= 4);
    setMovies(feauteredMovies.sort(SortByEpisode));
    setLoading(false);
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div>
      <h2 className={loading ? 'mt-70' : ''}> Popular Movies </h2>
      <div className="d-flex-row container">
        {loading ? (
          <PlaceholderDiv />
        ) : (
          movies.map((movie, index) => (
            <MovieCard
              key={movie.title}
              movieId={index + 1}
              movieDet={movie.title}
              imgLink={moviesImageLinks[index]}
            />
          ))
        )}
      </div>
    </div>
  );
}
export default FeauteredMovies;
