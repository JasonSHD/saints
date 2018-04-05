import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Icon } from 'antd';

import ViewPortHelper from '../helpers/resize';

import '../main.css';

class Topmenu extends Component {
  constructor(props) {
    super(props);
    this.viewport = new ViewPortHelper();

    this.viewport.subscribeDimensions().subscribe(dim => this.setState({dimensions: dim}));
  }

  componentDidMount() {
    this.setState({ dimensions: this.viewport.getDimensions() });
  }

  state = {
    current: 'home',
    dimensions: [0,0],
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }

  /**
   * Returns the full size menu.
   */
  fullMenu() {
    return (
      <div className="mainMenu">
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >

          <Menu.Item key="home">
            <Link to="/"><Icon type="lock" />Home</Link>
          </Menu.Item>
          <Menu.Item key="events">
              <Link to="/events"><Icon type="appstore" />Events</Link>
          </Menu.Item>
          <Menu.Item key="calendar">
              <Link to="/calendar"><Icon type="calendar" />Calendar</Link>
          </Menu.Item>
          <Menu.Item key="contactus">
              <Link to="/contactus"><Icon type="mail" />Contact Us</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }

  /**
   * Compact version of the menu.
   */
  compactMenu() {
    const menu = (
      <Menu >
        <Menu.Item key="home">
          <Link to="/"><Icon type="lock" />Home</Link>
        </Menu.Item>
        <Menu.Item key="events">
            <Link to="/events"><Icon type="appstore" />Events</Link>
        </Menu.Item>
        <Menu.Item key="calendar">
            <Link to="/calendar"><Icon type="calendar" />Calendar</Link>
        </Menu.Item>
        <Menu.Item key="contactus">
            <Link to="/contactus"><Icon type="mail" />Contact Us</Link>
        </Menu.Item>
      </Menu>
    );

    return (
      <Dropdown overlay={menu} trigger={['click']}>
        <Icon style={{fontSize: 32, color: "rgba(210, 210, 210, 2.65)" }} type="bars" />
      </Dropdown>
    );
  }

  render() {
    return (this.state.dimensions[0] > 768) ? this.fullMenu() : this.compactMenu();
  }
}

export default Topmenu;
