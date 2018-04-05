import React, { Component } from 'react';
import SpanningRow from '../layout/SpanningRow/spanningRow';
import MainBlogImage from '../blog1/image.js';
import { Button } from 'antd';
import '../main.css';

class ContactUs extends Component {
	render() {
		return (
      <div>
        <ul className="contactUs">
          <li><a href="https://www.facebook.com/groups/1672438879652518/">Facebook</a></li>
          <li>Email</li>
          <li>Mail</li>
        </ul>
      </div>
  	)
	}
}

export default ContactUs