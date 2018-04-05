import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Row, Col } from 'antd';


import ReactDOM from 'react-dom';

import Home from './home/home';
import Topmenu from './navmenu/topmenu';
import Events from './events/events';
import Calendar from './calendar/calendar';
import EventDetails from './events/eventdetails';
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
          <div className="watermark" img src="https://s3-us-west-2.amazonaws.com/unknown-saints/Field+Cross+3.jpg">
            <Row className="mainMenu">
              <Col span={6}><img src="https://s3-us-west-2.amazonaws.com/unknown-saints/BlackPatchSmaller.jpg" /></Col>
              <Col span={16}><Topmenu /></Col>
            </Row>
            
            <Route exact path="/" component={Home}/>
            <Route path="/events" component={Events}/>
            <Route path="/calendar" component={Calendar}/>
            <Route path="/eventdetails" component={EventDetails}/>
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
