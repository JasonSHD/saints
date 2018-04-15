import React, { Component } from 'react';
import { Button, Menu, Dropdown, Icon } from 'antd'

class EventsImage extends Component {

render() {
    const data = [
      {
        title: 'Kickstands Up for Summer',
        date: 'May 17th. 2017',
        charity: 'Hand in Hand and Project Homeless Veterans: Winter wear clothes drive',
        host: "Unknonw Siants and Bomber's Sports Bar",
        link: '/pastevents',
      },
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
        <Button type="primary">Upcoming Events</Button>
        <Button type="secondary">Past Events</Button>
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

export default EventsImage


Military appreciation day at Western Wyoming Community College. Friday April 21st and Saturday April 22nd.