import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';

class App extends Component {
  state = {}
  render() {
    return (
      <Fragment>
        <Header />
        <Banner
          days="22"
        />
      </Fragment>
    );
  }
}

export default App;
