import React, { Component } from 'react';
import { Calendar } from 'antd';

import '../main.css';

class SaintsCalendar extends Component {
  render() {
    return (
      <div className="textStyle">
        <Calendar />
      </div>
    )
  }
}

export default SaintsCalendar;
