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
        image: "https://s3-us-west-2.amazonaws.com/unknown-saints/VietWall.jpg"
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
      
      rVal.push((
        <div key={item.key}>
          <img className="carouselItem" src={item.image} />
        </div>
      ));
    });

    return rVal;
  }

  render() {
    let stuffs = [
      {
        title: "Mission Statement",
        content: "Through our efforts, we choose to dedicate our time, money and friendship: to give support to our veterans past, present and future; To pay our respect to the fallen heroes; to help the wounded brethren so they may lead fulfilling lives; and, to ride in honor of those who cannot. We do this without claiming any territory",
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
        <div className="eventsBox">
        <SpanningRow sizingArray={stuffs[0].ratio}>
            <MainBlogImage imgCSS="rightImage" imageUrl={stuffs[0].imageUrl} />
            <p className="textStyle" >{stuffs[0].content}</p>
        </SpanningRow>
        </div>
      </div>
    );
  }
}

export default Home;
