import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from "react-router-dom";

import { CharListSelector } from './CharList.selector';


class CharListComponent extends Component {
  onClickGetList = () => {
    const { dispatch } = this.props;

    axios
      .get('https://rickandmortyapi.com/api/character')
      .then((response) => {
        // handle success
        console.log(response);
        dispatch({
          type: 'SET_CHARS',
          payload: response.data.results
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  renderChars() {
    const { chars } = this.props;

    return (
      chars.map(char => {
        return (
          <Link to={`/details/${char.id}`}>
            <img src={char.image} alt={char.name} key={char.id} />
          </Link>
        )
      })
    )
  }

  render() {
    return (
      <div className="counter">
        <button className="list-button" onClick={this.onClickGetList}>Get list</button>
        {this.renderChars()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chars: CharListSelector(state)
  }
}

export const CharList = connect(
  mapStateToProps
)(CharListComponent);
