import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { ActiveCharSelector } from './CharDetails.selector';


class CharDetailsComponent extends Component {
  componentWillMount() {
    const { match, dispatch } = this.props;

    axios
      .get(`https://rickandmortyapi.com/api/character/${match.params.charId}`)
      .then((response) => {
        // handle success
        console.log(response);
        dispatch({
          type: 'SET_ACTIVE_CHAR',
          payload: response.data
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  render() {
    const { activeChar } = this.props;

    if (!activeChar) {
      return null;
    }
    console.log(this.props)
    return (
      <div className="counter">
        <img src={activeChar.image} alt={activeChar.name}></img>
        <span style={{ color: 'white' }}>hello details</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeChar: ActiveCharSelector(state)
  };
};

export const CharDetails = connect(
  mapStateToProps
)(CharDetailsComponent);
