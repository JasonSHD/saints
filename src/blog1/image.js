import React, { Component } from 'react';

class MainBlogImage extends Component {
  render() {
    const style = {
      backgroundImage: "url('" + this.props.imageUrl + "')"
    }

    return (
      <div style={style} className={this.props.imgCSS}>
      </div>
    );
  }
}

export default MainBlogImage;
