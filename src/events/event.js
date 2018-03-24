import React, { Component } from 'react';
import { Tag } from 'antd';

import '../main.css';

class Event extends Component {
  render() {

    return (
      <div>
        <Tag color="volcano">March 19th</Tag>
        <h1>Event Name</h1>
        <p>Big Image here</p>
      </div>
    );
  }
}

export default Event;
