import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import ReactDOM from 'react-dom';

import Home from './home/home';
import Topmenu from './navmenu/topmenu';
import './main.css';

//import Topmenu from './navmenu/topmenu';

class App extends Component {
  menuItems = [
    {
      key: '1',
      name: 'Home',
      url: '/'
    },
    {
      key: '2',
      name: 'Events',
      url: '/events'
    },
    {
      key: '3',
      name: 'Calendar',
      url: '/calendar'
    }
  ];

  /**
   * Unfortunately We can't add components dynamically that I know of, so explicitly support the items listed above.
   */
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Topmenu menuItems={this.menuItems} />

            <Route exact path="/" component={Home}/>
            <Route path="/events" component={Events}/>
            <Route path="/calendar" component={Calendar}/>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  };
};

const Events = () => {
  return (
    <div>
      Under Construction
    </div>
  );
};

const Calendar = () => {
  return (
    <div>
      Under Construction
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
