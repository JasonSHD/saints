import React, { Component } from 'react';
import SpanningRow from '../layout/SpanningRow/spanningRow';
import MainBlogImage from '../blog1/image.js';
import { Carousel } from 'antd';

import '../main.css';

class Home extends Component {

  createCarousel() {
    let carouselItems = [
      {
        key: "img4",
        title: "",
        tColor: "#fff",
        bColor: "#000",
        image: "https://s3-us-west-2.amazonaws.com/unknown-saints/Flag.jpg"
      },
      {
        key: "img2",
        title: "",
        tColor: "#fff",
        bColor: "#000",
        image: "https://s3-us-west-2.amazonaws.com/unknown-saints/Sid+and+Gina.jpg"
      },
      {
        key: "img3",
        title: "",
        tColor: "#fff",
        bColor: "#000",
        image: " https://s3-us-west-2.amazonaws.com/unknown-saints/VietWall.jpg"
      },
      {
        key: "img5",
        title: "",
        tColor: "#fff",
        bColor: "#000",
        image: "https://s3-us-west-2.amazonaws.com/unknown-saints/VietFieldCross.jpg"
      },
      {
        key: "img6",
        title: "",
        tColor: "#fff",
        bColor: "#000",
        image: "https://s3-us-west-2.amazonaws.com/unknown-saints/FamilyIdaho.jpg"
      },
      {
        key: "img1",
        title: "",
        tColor: "#fff",
        bColor: "#000",
        image: "https://s3-us-west-2.amazonaws.com/unknown-saints/Heading+Out+Idaho.jpg"
      }
    ];

    let rVal = [];

    carouselItems.forEach(item => {
      let divStyle={
        "backgroundImage": "url('" + item.image + "')",
        "backgroundColor": item.bColor,
      };

      rVal.push((
        <div key={item.key}>
          <div style={divStyle} className="carouselItem" src={item.image}>
            <h2 style={{ "color": item.tColor }}>{item.title}</h2>
          </div>
        </div>
      ));
    });

    return rVal;
  }

  render() {
    let stuffs = [
      {
        title: "Mission Statement",
        content: "Through our efforts, we choose to dedicate our time, money and friendship to give support to our veterans, past, present, and future.  To pay our respect to fallen heroes and to help the wounded brethren so they may lead a fulfilling life and to ride in honor of those who cannot, without claiming territory.",
        imageUrl: "https://s3-us-west-2.amazonaws.com/unknown-saints/canyonBackCut.jpg",
        ratio: [2, 1]
      }
    ];

    return (
      <div>
        <div className="carouselDiv">
          <Carousel autoplay>
            {this.createCarousel()}
          </Carousel>
        </div>
        <SpanningRow sizingArray={stuffs[0].ratio}>
            <MainBlogImage imgCSS="rightImage" imageUrl={stuffs[0].imageUrl} />
            <p className="textStyle" >{stuffs[0].content}</p>
        </SpanningRow>
      </div>
    );
  }
}

export default Home;
