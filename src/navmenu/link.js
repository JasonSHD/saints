import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../main.css';

class MenuItem extends Component {
  /**
   * Not sure how to implement this.  Need to see if this is even needed
   */
  redirect(url) {
    ReactDOM.render(
      document.getElementById('root')
    );
  }

  render() {
    return (
      <a href={ this.props.url } >
          <h1>sljsdflk</h1>
        {/* <RaisedButton label={ this.props.name } /> */}
      </a>
    );
  }
}

export default MenuItem;
