import React, { Component } from 'react';
import SpanningRow from '../layout/SpanningRow/spanningRow';
import MainBlogImage from '../blog1/image.js';
import { Link } from 'react-router-dom';
import { Button, Menu, Dropdown, Icon } from 'antd';
import EventDescription from '../events/eventdescription';

import '../main.css';


class UpcomingEvents extends Component {

  render() {
    let stuffs = [
      {
        title: "Kickstands Up for Summer 2018",
        content: "Kickstands Up for Summer 2018: Charities are, Veteran Scholarships and Hunting with Hero's Sublette Chapter.",
        imageUrl: "https://s3-us-west-2.amazonaws.com/unknown-saints/2018-tshirt-design-1a-1.jpg",
        ratio: [2, 1]
      }
    ];

    return (
      <div>
        <Link to="/events">
            <Button type="primary">Upcoming Events</Button>
          </Link>
          <Link to="pastevents">
            <Button type="secondary">Past Events</Button>
          </Link>
        <div className="eventsBox">
        <SpanningRow sizingArray={stuffs[0].ratio}>
            <MainBlogImage imgCSS="verticalFitImage" imageUrl={stuffs[0].imageUrl} />
            <p className="eventText">{stuffs[0].content}</p>
        </SpanningRow>
        </div>
      </div>
    );
  }
}

export default UpcomingEvents;