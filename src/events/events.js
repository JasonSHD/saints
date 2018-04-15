import React, { Component } from 'react';
import { List, Avatar } from 'antd';
import { Button, Menu, Dropdown, Icon } from 'antd';
import { Link } from 'react-router-dom';

import '../main.css';

class Events extends Component {
  render() {
    const data = [
      {
        title: 'Kickstands Up for Summer',
        date: 'July 7th, 2018',
        charity: "Veteran Scholarships and Hunting with Hero's Sublette Chpater",
        host: "Unknonw Siants and Bomber's Sports Bar",
        link: '/upcomingevents',
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

export default Events;
