import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Message from './components/Message';
import SendName from './components/SendName';
import Footer from './components/Footer';

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
        <Footer />
      </Fragment>
    );
  }
}

export default App;
