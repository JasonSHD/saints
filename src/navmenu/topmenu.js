import React, { Component } from 'react';
import MenuItem from './link';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import '../main.css';

class Topmenu extends Component {

  render() {
    return (
      <div>
        <Toolbar>
          <ToolbarGroup>
            { this.props.menuItems.map((item) => {
              return (<MenuItem {...item} />);
            })}
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}

export default Topmenu;
