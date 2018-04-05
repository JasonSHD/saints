import React, { Component } from 'react';
import SpanningRow from '../layout/SpanningRow/spanningRow';
import MainBlogImage from '../blog1/image.js';
import { Button } from 'antd';

import '../main.css';

class PastEvents extends Component {

  render() {
      return (
        <div>
          <Button href="/upcomingevents">Upcoming Events</Button>
          <Button href="/pastevents">Past Events</Button>
          <ul>
          	<li className="eventsBox"><img className="generalImage" src="https://s3-us-west-2.amazonaws.com/unknown-saints/USevent2017.jpg" /></li>
          </ul>
        </div>
      );
  }
}

export default PastEvents;