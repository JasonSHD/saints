import React, { Component } from 'react';
import { Popover, Button } from 'antd';

class EventDescription extends Component {

	render () {
		const text = <span>Kickstands Up For Summer. Saturday, July 7th, 2018</span>;
		const content = (
  			<div>
    			<p>Poker Run!! All vehicles welcome. Registration begins at 10am, last vehicle out a 12pm</p>
    			<p>Food, Fun, Drawings, 50/50, GUN BOARDS. All following the Poker Run! Last drawing at 8pm!</p>
  			</div>
		);
		return(
			<div>
				<h1>Kickstands Up For Summer</h1>
				<h2>Charities</h2>
				<p>Veteran Scholarships</p>
				<p>Hunting for Hero's with the Sublet Chapter</p>
				<Popover placement="topRight" title={text} content={content} trigger="click">
        			<Button>Read More</Button>
      			</Popover>
			</div>
		)
	}
}

export default EventDescription 