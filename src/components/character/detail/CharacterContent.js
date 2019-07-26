/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';

const CharacterContent = props => {
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    gender,
  } = props.characterInfo;
  const {
    films,
    homeworld
  } = props
  console.log(props);
  return (
    <div className="characterContent">
      <div className="characterPoster">
        <img
          src={props.imgLink}
          alt={name}
        />
        <h1>{name}</h1>
      </div>
      <div className="characterInfo">
        <h2>STARRING MOVIES</h2>
        <p>{films.join (', ')}</p>
        <div className="characterDetail">
          <p>
            <b>HOME WORLD</b>
            <br />
            {homeworld}
          </p>
          <p>
            <b>GENDER</b>
            <br />

            <small><span>{gender}</span></small>
          </p>
        </div>
        <div className="characterDetail">
          <p>
            <b>HEIGHT</b>
            <br />
            {height}
            <small><span>{}</span></small>
          </p>
          <p>
            <b>MASS</b>
            <br />
            {mass}

            <small><span>{}</span></small>
          </p>
          <p>
            <b>HAIR COLOR</b>
            <br />
            <small><span>{hair_color}</span></small>
          </p>
        </div>
        <div className="characterDetail">
          <p>
            <b>SKIN COLOR</b>
            <br />
            <small><span>{skin_color}</span></small>
          </p>
          <p>
            <b>EYE COLOR</b>
            <br />
            <small><span>{eye_color}</span></small>
          </p>
        </div>
      </div>
    </div>
  );
};
export default CharacterContent;
;
