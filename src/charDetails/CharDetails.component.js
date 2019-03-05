import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { activeCharInfosSelector } from './CharDetails.selector';
import { FETCH_CHAR_DETAIL_TRIGGER } from './CharDetails.action';
import styles from './CharDetails.module.css';


class CharDetailsComponent extends Component {
  componentWillMount() {
    const { match, dispatch } = this.props;

    dispatch({
      type: FETCH_CHAR_DETAIL_TRIGGER,
      payload: match.params.charId
    })
  }

  renderInfos = () => {
    const { activeChar } = this.props;

    return activeChar.infos.map(info => {
      return (
        <li className={styles.infoWrapper}>
          <span className={styles.property}>{info.name}</span>
          <span>{info.value || 'unknown'}</span>
        </li>);
    });
  }

  render() {
    const { activeChar } = this.props;

    if (!activeChar) {
      return null;
    }

    return (
      <div className={styles.container}>
        <Link to="/list" className={styles.backButton}>🡄 Back</Link>

        <img src={activeChar.image} alt="none"></img>

        <ul className={styles.list}>
          {this.renderInfos()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeChar: activeCharInfosSelector(state)
  };
};

export const CharDetails = connect(
  mapStateToProps
)(CharDetailsComponent);
