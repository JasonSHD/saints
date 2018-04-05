import React, { Component } from 'react';
import SpanningRow from '../layout/SpanningRow/spanningRow';
import MainBlogImage from '../blog1/image.js';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import '../main.css';

class PastEvents extends Component {

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
          	<li className="eventsBox"><img className="generalImage" src="https://s3-us-west-2.amazonaws.com/unknown-saints/USevent2017.jpg" /></li>
          </ul>
        </div>
      );
  }
}

export default PastEvents;