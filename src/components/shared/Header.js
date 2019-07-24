import React from 'react';
import {Link} from 'react-router-dom';
import TextLoop from "react-text-loop";
import bannerPath from '../../img/star-wars-banner.jpg';

const slogans = [
  "“The Force will be with you. Always.” — Obi-Wan Kenobi",
  "“You can’t stop the change, any more than you can stop the suns from setting.” — Shmi Skywalker",
  "“Hope.” — Leia Organa",
  "“Fear is the path to the dark side. Fear leads to anger; anger leads to hate; hate leads to suffering. I sense much fear in you.” — Yoda"
];


const Header = () => {
    return (
      <header>
        <Link to="/">
          <img src={bannerPath} alt="Star Wars Banner" id="headerBanner" />
        </Link>
        <TextLoop
            // eslint-disable-next-line react/no-children-prop
          children={slogans}
          springConfig={{ stiffness: 180, damping: 8 }}
          interval={7000}
        />
      </header>
      );
    }
  export default Header;
