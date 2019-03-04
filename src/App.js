import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { CharList } from './charList/CharList.component';
import { CharDetails } from './charDetails/CharDetails.component';
import styles from './App.module.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.App}>
          <Route path="/" exact component={CharList} />
          <Route path="/list/" component={CharList} />
          <Route path="/details/:charId" component={CharDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
