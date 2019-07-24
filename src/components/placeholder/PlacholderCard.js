import React, { Component } from 'react'
import '../../styles/placeholder.css';

export default class PlaceholderCard extends Component {
  render() {
    return (
      <div className="placeholderCard">
        <div className="movie--isloading">
        <div className="loading-image"></div>
        <div className="loading-content">
        <div className="loading-text-container">
        <div className="loading-main-text"></div>
        <div className="loading-sub-text"></div>
        </div>
        <div className="loading-btn"></div>
        </div>
        </div>
      </div>
      )
    }
  }
