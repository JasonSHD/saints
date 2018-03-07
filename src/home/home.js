import React, { Component } from 'react';
import Highlight from './../highlight/highlight';
import SpanningRow from '../layout/SpanningRow/spanningRow';

import '../main.css';

class Home extends Component {
  render() {
    return (
      <div>
        Welcome home!
        <Highlight url="random.gif" />
        <SpanningRow sizingArray={[2,1]}>
            <h1>one</h1>
            <p>TWOWOWOW</p>
        </SpanningRow>
      </div>
    );
  }
}

export default Home;
