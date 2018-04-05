import React, { Component } from 'react';
import SpanningRow from '../layout/SpanningRow/spanningRow';
import MainBlogImage from '../blog1/image.js';
import { Button } from 'antd';

import '../main.css';

class PastEvents extends Component {

  render() {
        let stuffs = [
      {
        title: "KUFS 2017",
        content: "Blah Blah info.",
        imageUrl: "https://s3-us-west-2.amazonaws.com/unknown-saints/USevent2017.jpg",
        ratio: [1, 2]
      },
     ];
    return (
        <div>
          <Button href="/eventdetails">Upcoming Events</Button>
          <Button href="/eventdetails">Past Events</Button>
          <SpanningRow sizingArray={stuffs[0].ratio}>
            <MainBlogImage imgCSS="generalImage" imageUrl={stuffs[0].imageUrl} />
            <p className="textStyle" >{stuffs[0].content}</p>
        </SpanningRow>
        </div>
      );
  }
}

export default PastEvents;