import React, { Component } from 'react';
import SpanningRow from '../layout/SpanningRow/spanningRow';
import MainBlogImage from '../blog1/image.js';
import { Link } from 'react-router-dom';
import { List, Avatar } from 'antd';
import { Button } from 'antd';

import '../main.css';

class PastEvents extends Component {

  render() {
    const data = [
      {
        title: 'Kickstands Up for Summer',
        date: 'May 17th. 2017',
        charity: 'Hand in Hand and Project Homeless Veterans: Winter wear clothes drive',
        host: "Unknonw Siants and Bomber's Sports Bar",
        link: '/pastevents',
      },
    ];

    return (
      <div>
        <Link to="/events">
            <Button type="primary">Upcoming Events</Button>
          </Link>
          <Link to="pastevents">
            <Button type="secondary">Past Events</Button>
          </Link>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <div className="eventText">
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar className="hugeAvatar">{item.date}</Avatar>}
                  title={<a href={item.link}>{item.title}</a>}
                  description={ (<p>Host: {item.host}</p>) }
                />
                  <p>{item.charity}</p>
              </List.Item>
            </div>
          )}
        >

        </List>
      </div>
    );
  }
}

export default PastEvents;