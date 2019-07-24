import React, {useEffect, useState} from 'react';

// import child component styles
import CharacterCard from './CharacterCard';
import PlaceholderDiv from '../placeholder/PlaceholderDiv';

// import own component styles
import '../../styles/feauteredCharacter.css';

// import images
import lukeSkywalker from '../../img/characters/luke-skywalker.jpeg';
import C3PO from '../../img/characters/C-3PO.webp';
import r2d2 from '../../img/characters/r2-d2.jpeg';
import darthVader from '../../img/characters/Darth-Vader.webp';

const characterAvatarLink = [lukeSkywalker, C3PO, r2d2, darthVader];

function FeaturedCharacters () {
  const [characters, setCharacters] = useState ([]);
  const [loading, setLoading] = useState (true);

  const fetchCharacters = async () => {
    const data = await fetch ('https://swapi.co/api/people/');
    const fetchPeople = await data.json ();
    const feauteredCharacter = fetchPeople.results.filter (
      (character, index) => index < 4
    );
    setCharacters (feauteredCharacter);
    setLoading (false);
  };
  useEffect (() => {
    fetchCharacters ();
  }, []);

  return (
    <div>
      <h2>Popular Characters</h2>
      <div className="d-flex-row container">
        {loading
          ? <PlaceholderDiv />
          : characters.map ((character, index) => (
            <CharacterCard
              key={character.name}
              chaId={index + 1}
              chaDet={character.name}
              imgLink={characterAvatarLink[index]}
            />
            ))}
      </div>
    </div>
  );
}
export default FeaturedCharacters;
