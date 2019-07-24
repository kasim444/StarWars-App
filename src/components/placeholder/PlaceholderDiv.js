import React, { Component } from 'react';
import PlaceholderCard from './PlacholderCard';
export default class PlaceholderDiv extends Component {
  render() {
    return (
      <div className="d-flex-row container">
        <PlaceholderCard />
        <PlaceholderCard />
        <PlaceholderCard />
        <PlaceholderCard />
      </div>



      )
    }
  }
