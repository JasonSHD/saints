import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Topmenu from '../navmenu/topmenu';
import '../main.css';

class ContactUs extends Component {
	render() {
		return (
  			<div className="ContactUs">
    			<Row>
     				<Col span={6}><img src="https://s3-us-west-2.amazonaws.com/unknown-saints/Patch.jpg" /></Col>
      				<Col span={16}><Topmenu /></Col>
      			</Row>
  			</div>
  		)
	}
}

export default ContactUs