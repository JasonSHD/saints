import React, { Component } from 'react';
import SpanningRow from '../layout/SpanningRow/spanningRow';
import MainBlogImage from '../blog1/image.js';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import EventsImage from '../events/eventsimage';

import '../main.css';


class UpcomingEvents extends Component {

  render() {
      return (
        <div>
          <Link to="/upcomingevents">
            <Button>Upcoming Events</Button>
          </Link>
          <Link to="pastevents">
            <Button>Past Events</Button>
          </Link>
          <ul>
            <li className="eventsBox"><img className="verticalFitImage" src="https://s3-us-west-2.amazonaws.com/unknown-saints/2018-tshirt-design-1a-1.jpg" /><EventsImage /></li>
            <li className="eventsBox">Some other Event</li>
            <li className="eventsBox">Some other Event</li>
          </ul>
        </div>
      );
  }
}

export default UpcomingEvents;