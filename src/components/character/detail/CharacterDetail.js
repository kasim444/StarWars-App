/* eslint-disable prefer-const */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, {Component, useEffect} from 'react';
import axios from 'axios';
import Loading from '../../placeholder/Loading';
import DetailHeader from './DetailHeader';
import CharacterContent from './CharacterContent';
import FeaturedCharacters from '../FeaturedCharacters';
import '../../../styles/characterDetail.css';

// import images
import lukeSkywalker from '../../../img/characters/luke-skywalker.jpeg';
import C3PO from '../../../img/characters/C-3PO.webp';
import r2d2 from '../../../img/characters/r2-d2.jpeg';
import darthVader from '../../../img/characters/Darth-Vader.webp';

// TODO: all character images not here
const characterAvatarLink = [
  lukeSkywalker,
  C3PO,
  r2d2,
  darthVader,
  C3PO,
  r2d2,
  darthVader,
  C3PO,
  r2d2,
  darthVader,
  C3PO,
  r2d2,
  darthVader,
];


function CharacterDetail(props) {
  const { id: characterId } = props.match.params;
  const [isLoading, setIsLoading] = React.useState(true);
  const [characterData, setCharacterData] = React.useState(null);
  const [homeworld, setHomeworld] = React.useState('');
  const [films, setFilms] = React.useState([]);

  React.useEffect(() => {
    async function getData() {
      const characterDetail = await axios.get(`https://swapi.co/api/people/${characterId}/`);
      const {
        homeworld: homeworldLink,
        films: filmsFetchLinks
      } = characterDetail.data;

      const promisesData = await filmsFetchLinks.map(link => axios.get(link));

      axios.all(promisesData).then(value => {
        const filmSeries = [];
        value.forEach(val => {
          filmSeries.push(val.data.title);
        });
        fetch(homeworldLink)
          .then(home => home.json())
          .then(homeworldData => setHomeworld(homeworldData.name));
        setCharacterData(characterDetail.data);
        setFilms(filmSeries);
        setIsLoading(false);
      });
    }

    getData();
  }, [characterId]);


  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <main className="characterBg">
        <DetailHeader imgLink={characterAvatarLink[characterId - 1]} />
        <CharacterContent
          imgLink={characterAvatarLink[characterId - 1]}
          characterInfo={{ ...characterData }}
          films={films}
          homeworld={homeworld}
        />
      </main>
      <FeaturedCharacters />
    </div>
  );
}
export default CharacterDetail;

//   //  async componentDidMount () {

    // const filmSeries = [];
    // const characterDetail = await axios.get (
    //   `https://swapi.co/api/people/${characterId}/`
    // );


    // const filmsFetchLinks = characterDetail.data.films;

    // const promisesData = await filmsFetchLinks.map(link => axios.get(link));
    // axios.all (promisesData).then(value => {
    //   value.map (val => filmSeries.push (val.data.title));
    //   let {
    //     name,
    //     height,
    //     mass,
    //     hair_color,
    //     skin_color,
    //     eye_color,
    //     birthday_year,
    //     gender,
    //     homeworld,
    //     films,
    //   } = characterDetail.data;

    //   fetch(homeworld).then(home => home.json()).then(val => this.setState({homeworld: val.name}));


    //   this.setState ({
    //     name,
    //     height,
    //     mass,
    //     hair_color,
    //     skin_color,
    //     eye_color,
    //     birthday_year,
    //     gender,
    //     films: filmSeries,
    //     loading: false,
    //   });
    // });
//   // }


//   render () {
//     const characterId = this.props.match.params.id;
//     const {
//       name,
//       height,
//       mass,
//       hair_color,
//       skin_color,
//       eye_color,
//       birthday_year,
//       gender,
//       homeworld,
//       loading,
//     } = this.state;
//     return loading
//       ? <Loading />
//       : (
//         <div>
//           <main className="characterBg">
//             <DetailHeader imgLink={characterAvatarLink[characterId - 1]} />
//             <CharacterContent
//               imgLink={characterAvatarLink[characterId- 1]}
//               characterInfo={this.state}
//             />
//           </main>
//           <FeaturedCharacters />
//         </div>
//       );
//   }
// }
// export default CharacterDetail;
