import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';


import ReactDOM from 'react-dom';

import Home from './home/home';
import Topmenu from './navmenu/topmenu';
import Events from './events/events';
import Calendar from './calendar/calendar';
import UpcomingEvents from './events/upcomingevents';
import PastEvents from './events/pastevents';
import ContactUs from './contactus/contactus';
import './main.css';
import 'antd/dist/antd.css';

//import Topmenu from './navmenu/topmenu';

class App extends Component {

  /**
   * Unfortunately We can't add components dynamically that I know of, so explicitly support the items listed above.
   */
  render() {
    return (
        <Router>
          <div>
            <Row className="mainMenu">
              <Col span={2}><Link to="/"><img src="https://s3-us-west-2.amazonaws.com/unknown-saints/BlackPatchSmaller.jpg" /></Link></Col>
              <Col span={20}><Topmenu /></Col>
              <Col span={2}><Link to="/"><img src="https://s3-us-west-2.amazonaws.com/unknown-saints/BlackPatchSmaller.jpg" /></Link></Col>
            </Row>
            
            <Route exact path="/" component={Home}/>
            <Route path="/events" component={Events}/>
            <Route path="/calendar" component={Calendar}/>
            <Route path="/upcomingevents" component={UpcomingEvents}/>
            <Route path="/pastevents" component={PastEvents}/>
            <Route path="/contactus" component={ContactUs} />
          </div>
        </Router>
    );
  };
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
