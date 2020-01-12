import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Message from './components/Message';

class App extends Component {
  state = {}
  render() {
    return (
      <Fragment>
        <Header />
        <Banner
          days="22"
        />
        <Message />
      </Fragment>
    );
  }
}

export default App;
