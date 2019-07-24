/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {Link} from 'react-router-dom';
import showIcon from '../../img/list-icon-min.png';

const MovieCard = props => {
  const title = props.movieDet;
  return (
    <Link className="profile_card" to={`/movie/${title}`}>
      <div className="profile_image">
        <img src={props.imgLink} alt={title} />
      </div>
      <div className="profile_content">
        <h3>{title}</h3>
        <div className="read_more d-flex-row">
          <img src={showIcon} alt="Show Icon" />
          &nbsp;Show More
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
