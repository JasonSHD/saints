import React, { Component } from 'react';
import SpanningRow from '../layout/SpanningRow/spanningRow';
import MainBlogImage from '../blog1/image.js';

import '../main.css';

class Home extends Component {

  render() {
    let stuffs = [
      {
        title: "Mission Statement",
        content: "Through our efforts, we choose to dedicate our time, money and friendship to give support to our veterans, past, present, and future.  To pay our respect to fallen heroes and to help the wounded brethren so they may lead a fulfilling life and to ride in honor of those who cannot, without claiming territory.",
        imageUrl: "https://s3-us-west-2.amazonaws.com/unknown-saints/canyonBackCut.jpg",
        ratio: [2, 1]
      }
    ]
    return (
      <div>
        <SpanningRow sizingArray={stuffs[0].ratio}>
            <MainBlogImage imageUrl={stuffs[0].imageUrl} />
            <p className="textStyle" >{stuffs[0].content}</p>
        </SpanningRow>
      </div>
    );
  }
}

export default Home;
