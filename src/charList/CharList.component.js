import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { CharListSelector } from './CharList.selector';


class CharListComponent extends Component {
  onClickGetList = () => {
    const { dispatch } = this.props;

      dispatch({
        type: 'FETCH_CHARS_TRIGGER',
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
