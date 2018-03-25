import React, { Component } from 'react';
import './spanningRow.css';
import { Row, Col } from 'antd';


class SpanningRow extends Component {

  createContainers(){
    let sum = 0;
    if(this.props.sizingArray){
      let sizingArray = this.props.sizingArray;
      sizingArray.map( num => {
        sum += num;
        return num;
      });
      return sizingArray.map( (num, index) => {
        return (<Col style={{display:'flex', 'justifyContent':'center'}}key={index+'element'} span={
          Math.ceil((num / sum) * (this.props.maxwidth || 24))
        }>
          {this.props.children[index]}
          </Col>)
      })
    } else {
      return null;
    }
  }

  render() {

    return (
      <div className='row-container'>
        <Row className='row'>
          {this.createContainers()}
        </Row>
      </div>
    );
  }
}


export default SpanningRow;
