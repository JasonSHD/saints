import React, { Component } from 'react';
import { List, Avatar } from 'antd';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import '../main.css';

class Events extends Component {
  render() {
    const data = [
      {
        title: 'Kickstands Up for Summer',
        date: 'May 17th. 2017',
        charity: 'Hand in Hand and Project Homeless Veterans: Winter wear clothes drive.',
        host: 'Unknonw Siants and Bombers Sports Bar',
        link: '/pastevents',
      },
      {
        title: 'Kickstands Up for Summer',
        date: 'May 12th, 2018',
        charity: "Veteran Scholarships and Hunting for Hero's with Sublette Chpater",
        host: 'Unknonw Siants and Bombers Sports Bar',
        link: '/upcomingevents',
      },
    ];

    return (
      <div>
        <Link to="/upcomingevents">
            <Button>Upcoming Events</Button>
          </Link>
          <Link to="pastevents">
            <Button>Past Events</Button>
          </Link>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <div className="textStyle">
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
