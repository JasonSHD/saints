import React, { Component } from 'react';
import { List, Avatar } from 'antd';

import '../main.css';

class Events extends Component {
  render() {
    const data = [
      {
        title: 'Bombers Bash',
        date: 'May 12th',
        charity: 'Homeless Vets charity',
        host: 'Bombers and Unknown Saints',
        link: '/events/bombersbash',
      },
      {
        title: 'Bombers Bash',
        date: 'May 12th',
        charity: 'Homeless Vets charity',
        host: 'Bombers and Unknown Saints',
        link: '/events/bombersbash',
      },
      {
        title: 'Bombers Bash',
        date: 'December 12th',
        charity: 'Homeless Vets charity',
        host: 'Bombers and Unknown Saints',
        link: '/events/bombersbash',
      },
    ];

    return (
      <div>
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
