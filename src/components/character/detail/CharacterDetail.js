/* eslint-disable prefer-const */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
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

class CharacterDetail extends Component {
  state = {
    name: null,
    height: null,
    mass: null,
    hair_color: null,
    skin_color: null,
    eye_color: null,
    birthday_year: null,
    gender: null,
    homeworld: null,
    films: [],
    loading: true,
  };



  async componentDidMount () {
    const characterId = this.props.match.params.id;
    const filmSeries = [];
    const characterDetail = await axios.get (
      `https://swapi.co/api/people/${characterId}/`
    );


    const filmsFetchLinks = characterDetail.data.films;

    const promisesData = await filmsFetchLinks.map(link => axios.get(link));
    axios.all (promisesData).then(value => {
      value.map (val => filmSeries.push (val.data.title));
      let {
        name,
        height,
        mass,
        hair_color,
        skin_color,
        eye_color,
        birthday_year,
        gender,
        homeworld,
        films,
      } = characterDetail.data;

      fetch(homeworld).then(home => home.json()).then(val => this.setState({homeworld: val.name}));


      this.setState ({
        name,
        height,
        mass,
        hair_color,
        skin_color,
        eye_color,
        birthday_year,
        gender,
        films: filmSeries,
        loading: false,
      });
    });
  }


  render () {
    const characterId = this.props.match.params.id;
    const {
      name,
      height,
      mass,
      hair_color,
      skin_color,
      eye_color,
      birthday_year,
      gender,
      homeworld,
      loading,
    } = this.state;
    return loading
      ? <Loading />
      : (
        <div>
          <main className="characterBg">
            <DetailHeader imgLink={characterAvatarLink[characterId - 1]} />
            <CharacterContent
              imgLink={characterAvatarLink[characterId- 1]}
              characterInfo={this.state}
            />
          </main>
          <FeaturedCharacters />
        </div>
      );
  }
}
export default CharacterDetail;
