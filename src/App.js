import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Message from './components/Message';
import SendName from './components/SendName';

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
        <SendName />
      </Fragment>
    );
  }
}

export default App;
