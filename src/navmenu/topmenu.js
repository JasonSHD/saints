import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import '../main.css';
const MenuItemGroup = Menu.ItemGroup;

class Topmenu extends Component {
    state = {
    current: 'home',
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal">

          <Menu.Item key="home">

            <Link to="/"><Icon type="mail" />home</Link>
          </Menu.Item>
          <Menu.Item key="events">
              <Link to="events"><Icon type="appstore" />Events</Link>
          </Menu.Item>
          <Menu.Item key="calendar">
              <Link to="calendar"><Icon type="calendar" />Calendar</Link>
          </Menu.Item>
        </Menu>
    );
  }
}

export default Topmenu;
