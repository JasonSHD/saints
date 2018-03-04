import React, { Component } from 'react';
import Highlight from './../highlight/highlight';
import '../main.css';

class Home extends Component {
  render() {
    return (
      <div>
        Welcome home!
        <Highlight url="random.gif" />
      </div>
    );
  }
}

export default Home;
