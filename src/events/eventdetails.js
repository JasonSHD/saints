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
        title: "Random Text",
        tColor: "#fff",
        bColor: "#000",
        image: "http://s3-us-west-2.amazonaws.com/unknown-saints/Flag.jpg"
      },
      {
        key: "img2",
        title: "Texterest!",
        tColor: "#fff",
        bColor: "#000",
        image: "http://s3-us-west-2.amazonaws.com/unknown-saints/Flag.jpg"
      },
      {
        key: "img1",
        title: "This is more text",
        tColor: "#fff",
        bColor: "#000",
        image: "http://s3-us-west-2.amazonaws.com/unknown-saints/Flag.jpg"
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
        title: "KUFS 2017",
        content: "With the support of our commuinty and all you magnificant people out there we were able to raise $4800 for these two charities.",
        imageUrl: "https://s3-us-west-2.amazonaws.com/unknown-saints/USevent.jpg",
        ratio: [2, 1]
      },
      {
        title: "KUFS 2018",
        content: "Blah Blah info.",
        imageUrl: "https://s3-us-west-2.amazonaws.com/unknown-saints/KUFS-Flyer1-1.jpg",
        ratio: [1, 2]
      },
      {
        title: "KUFS 2018",
        content: "Our 2018 T-Shirt.",
        imageUrl: "https://s3-us-west-2.amazonaws.com/unknown-saints/2018-tshirt-design-1a-1.jpg",
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
            <MainBlogImage imgCSS="generalImage" imageUrl={stuffs[0].imageUrl} />
            <p className="textStyle" >{stuffs[0].content}</p>
        </SpanningRow>
        <SpanningRow sizingArray={stuffs[1].ratio}>
            <p className="textStyle" >{stuffs[1].content}</p>
            <MainBlogImage imgCSS="verticalFitImage" imageUrl={stuffs[1].imageUrl} />
        </SpanningRow>
        <SpanningRow sizingArray={stuffs[2].ratio}>
            <MainBlogImage imgCSS="verticalFitImage" imageUrl={stuffs[2].imageUrl} />
            <p className="textStyle" >{stuffs[2].content}</p>
        </SpanningRow>
      </div>
    );
  }
}

export default Home;