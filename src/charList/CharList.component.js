import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { charListSelector } from './CharList.selector';
import { FETCH_CHARS_TRIGGER } from './CharList.action';
import styles from './CharList.module.css';

class CharListComponent extends Component {
  componentWillMount() {
    const { dispatch } = this.props;

    dispatch({
      type: FETCH_CHARS_TRIGGER,
    });
  }

  renderChars() {
    const { chars } = this.props;

    return (
      chars.map(char => {
        return (
          <Link to={`/details/${char.id}`}>
            <img className={styles.image} src={char.image} alt={char.name} key={char.id} />
          </Link>
        )
      })
    );
  }

  render() {
    return (
      <div className={styles.container}>
        {this.renderChars()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chars: charListSelector(state)
  }
}

export const CharList = connect(
  mapStateToProps
)(CharListComponent);
