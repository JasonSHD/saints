import React, { Component } from 'react';
import Highlight from './../highlight/highlight';
import SpanningRow from '../layout/SpanningRow/spanningRow';
import MainBlogImage from '../blog1/image.js';

import '../main.css';

class Home extends Component {
  render() {
    return (
      <div>
        <SpanningRow sizingArray={[2,1]}>
            <MainBlogImage />
            <p>{"This is where the content for this item should go.  Whether this is a blog post or a quick description of what's on the side of it."}</p>
        </SpanningRow>
      </div>
    );
  }
}

export default Home;
