import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { charsSelector } from './Chars.selector';


class CharsComponent extends Component {
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
      })
  }

  renderChars() {
    const { chars } = this.props;

    return (
      chars.map(char => {
        return(
          <img src={char.image} alt={char.name} key={char.id} />
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
    chars: charsSelector(state)
  }
}

export const Chars = connect(
  mapStateToProps
)(CharsComponent);
