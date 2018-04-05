import React, { Component } from 'react';
import SpanningRow from '../layout/SpanningRow/spanningRow';
import MainBlogImage from '../blog1/image.js';
import { Button } from 'antd';

import '../main.css';

class UpcomingEvents extends Component {

  render() {
        let stuffs = [
      {
        title: "KUFS 2018",
        content: "Blah Blah info.",
        imageUrl: "https://s3-us-west-2.amazonaws.com/unknown-saints/KUFS-Flyer1-1.jpg",
        ratio: [1, 2]
      },
      {
        title: "KUFS 2018 T-Shirt",
        content: "Our 2018 T-Shirt.",
        imageUrl: "https://s3-us-west-2.amazonaws.com/unknown-saints/2018-tshirt-design-1a-1.jpg",
        ratio: [2, 1]
      }
    ];
    return (
        <div>
          <Button href="/eventdetails">Upcoming Events</Button>
          <Button href="/eventdetails">Past Events</Button>
          <SpanningRow sizingArray={stuffs[0].ratio}>
            <MainBlogImage imgCSS="generalImage" imageUrl={stuffs[0].imageUrl} />
            <p className="textStyle" >{stuffs[0].content}</p>
        </SpanningRow>
        <SpanningRow sizingArray={stuffs[1].ratio}>
            <p className="textStyle" >{stuffs[1].content}</p>
            <MainBlogImage imgCSS="verticalFitImage" imageUrl={stuffs[1].imageUrl} />
        </SpanningRow>
        </div>
      );
  }
}

export default UpcomingEvents;