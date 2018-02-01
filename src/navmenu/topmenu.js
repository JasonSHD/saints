import React, { Component } from 'react';
import MenuItem from './link';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import '../main.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Topmenu extends Component {

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Toolbar>
            <ToolbarGroup>
              { this.props.menuItems.map((item) => {
                return (<MenuItem {...item} />);
              })}
            </ToolbarGroup>
          </Toolbar>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Topmenu;
