import React, { Component } from 'react';
import M from 'materialize-css';

class Header extends Component {
  componentDidMount() {
    var navElements = document.querySelectorAll(".sidenav");
    M.Sidenav.init(navElements);
  }
  render() {
    return (
      <header>
        <div className="container">
          <nav>
            <div className="nav-wrapper">
              <a href="/#!" className="brand-logo">Rule of Thumb.</a>
              <a href="/#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                <li><a href="/#">Past Trials</a></li>
                <li><a href="/#">How It Works</a></li>
                <li><a href="/#">Log In/Sign up</a></li>
                <li><i className="material-icons">search</i></li>
              </ul>
            </div>
          </nav>
        </div>
        <ul className="sidenav" id="mobile-demo">
          <li><a href="/#">Past Trials</a></li>
          <li><a href="/#">How It Works</a></li>
          <li><a href="/#">Log In/Sign up</a></li>
        </ul>
      </header>
    );
  }
}
/*
const Header = () => (
  <header>
    <div className="container">
      <nav>
        <div className="nav-wrapper">
          <a href="/#!" className="brand-logo">Rule of Thumb.</a>
          <a href="/#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a href="/#">Past Trials</a></li>
            <li><a href="/#">How It Works</a></li>
            <li><a href="/#">Log In/Sign up</a></li>
          </ul>
        </div>
      </nav>
    </div>
    <ul className="sidenav" id="mobile-demo">
      <li><a href="/#">Past Trials</a></li>
      <li><a href="/#">How It Works</a></li>
      <li><a href="/#">Log In/Sign up</a></li>
    </ul>
  </header>
);
*/
export default Header;