import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';



import ReactDOM from 'react-dom';
import ViewPort from './helpers/resize';

import Home from './home/home';
import Topmenu from './navmenu/topmenu';
import Events from './events/events';
import Calendar from './calendar/calendar';
import EventDetails from './events/eventdetails';
import './main.css';
import 'antd/dist/antd.css';

//import Topmenu from './navmenu/topmenu';

class App extends Component {

  constructor() {
    super();
    this.viewport = new ViewPort();
    console.log('From ViewPort');
    this.viewport.subscribeDimensions().subscribe(
      (data) => {
        console.log(data);
      });
    console.log(this.viewport.getDimensions());
  }

  /**
   * Unfortunately We can't add components dynamically that I know of, so explicitly support the items listed above.
   */
  render() {
    return (
        <Router>
          <div className="watermark">
            <Topmenu menuItems={this.menuItems} />

            <Route exact path="/" component={Home}/>
            <Route path="/events" component={Events}/>
            <Route path="/calendar" component={Calendar}/>
            <Route path="/eventdetails" component={EventDetails}/>
          </div>
        </Router>
    );
  };
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
