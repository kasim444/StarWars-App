import React from 'react'
import FeaturedMovies from "./movie/FeaturedMovies";
import FeaturedCharacters from "./character/FeaturedCharacters";

export default () => {
  return (
    <main>
      <FeaturedMovies />
      <FeaturedCharacters />
    </main>
  );
}
