import React, { Component } from 'react';

class EventsImage extends Component {
	constructor(props) {
			super(props);
			this.state = {
				date: new Date()
			};
	}
	
	render() {
		return (
			<h1>
				It is {this.state.date.toLocaleTimeString()}
			</h1>
		)
	}
}

export default EventsImage