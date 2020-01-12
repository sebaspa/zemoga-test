import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Message from './components/Message';
import SendName from './components/SendName';
import Footer from './components/Footer';
import ListCharacters from './components/ListCharacters';

class App extends Component {
  state = {
    characters: []
  };

  componentDidMount() {
    this.getCharacters();
  }

  getCharacters = async () => {
    const url = 'http://www.json-generator.com/api/json/get/bViiDGizWW?indent=2';
    console.log(url);
    const resp = await fetch(url);
    const characters = await resp.json();

    this.setState({
      characters: characters
    })
  };

  render() {
    return (
      <Fragment>
        <Header />
        <Banner
          days="22"
        />
        <Message />
        <ListCharacters
          characters={this.state.characters}
        />
        <SendName />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
