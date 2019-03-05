import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import { CharList } from '../charList/CharList.component';
import { CharDetails } from '../charDetails/CharDetails.component';
import styles from './Router.module.css';


class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={styles.container}>
          <Route path="/" exact component={CharList} />
          <Route path="/list/" component={CharList} />
          <Route path="/details/:charId" component={CharDetails} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
