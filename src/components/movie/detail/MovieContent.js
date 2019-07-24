/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';

const MovieContent = (props) => {
  const {title, episode_id, opening_crawl, director, producer, release_date, characters}=props.movieInfo;

  return (
    <div className="movieContent">
      <div className="moviePoster">
        <img src={props.imgLink} alt={props.title} />
        <h1>
Star Wars
          <span>{episode_id}</span>
          {' '}
:
          {' '}
          {title}
          {' '}

        </h1>
      </div>
      <div className="movieInfo">
        <h2>SYNOPSIS</h2>
        <p>{opening_crawl}</p>
        <p>
          <b>Characters</b>
          <br />
          <small>{ characters.join(', ') }</small>
        </p>
        <div className="movieDetail">
          <p>
            <b>Producer</b>
            <br />

            <small><span>{producer}</span></small>
          </p>
          <p>
            <b>Relase Date</b>
            <br />

            <small><span>{release_date}</span></small>
          </p>
          <p>
            <b>Director by</b>
            <br />

            <small><span>{director}</span></small>
          </p>
        </div>
      </div>
    </div>
  )
}
export default MovieContent;
