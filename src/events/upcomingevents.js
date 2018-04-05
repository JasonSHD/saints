import React, { Component } from 'react';
import SpanningRow from '../layout/SpanningRow/spanningRow';
import MainBlogImage from '../blog1/image.js';
import { Button } from 'antd';

import '../main.css';

class UpcomingEvents extends Component {

  render() {
      return (
        <div>
          <Button href="/upcomingevents">Upcoming Events</Button>
          <Button href="/pastevents">Past Events</Button>
          <ul>
            <li className="eventsBox"><img className="generalImage" src="https://s3-us-west-2.amazonaws.com/unknown-saints/KUFS-Flyer1-1.jpg" />"Kickstands Up for Summer 2018  Charities: Veterans Scholarships and Hunting for Hero's with Sublet Chapter."</li>
          </ul>
        </div>
      );
  }
}

export default UpcomingEvents;