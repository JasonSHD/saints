import React, { Component } from 'react';

import '../main.css';

class MainBlogImage extends Component {
  render() {
    let bgImage = {
      "background-image": "url('https://s3-us-west-2.amazonaws.com/bennett-personal/other/testImage.jpg')",
      "background-position": "center",
      "background-repeat": "no-repeat",
      "background-size": "auto 100%",
      width: '100%',
      height: '400px'
    }

    return (
      <div style={bgImage}>
      </div>
    );
  }
}

export default MainBlogImage;
