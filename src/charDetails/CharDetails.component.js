import React, { Component } from 'react';
import { connect } from 'react-redux';

import { activeCharSelector } from './CharDetails.selector';


class CharDetailsComponent extends Component {
  componentWillMount() {
    const { match, dispatch } = this.props;

    dispatch({
      type: 'FETCH_CHAR_DETAIL_TRIGGER',
      payload: match.params.charId
    })
  }

  render() {
    const { activeChar } = this.props;

    if (!activeChar) {
      return null;
    }

    return (
      <div className="details">
        <img src={activeChar.image} alt={activeChar.name}></img>
        <span style={{ color: 'white' }}>hello details</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeChar: activeCharSelector(state)
  };
};

export const CharDetails = connect(
  mapStateToProps
)(CharDetailsComponent);
