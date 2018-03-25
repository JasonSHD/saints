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
        let spanSize = Math.ceil((num / sum) * (this.props.maxwidth || 24));

        return (<Col style={{display:'flex', 'justifyContent':'center'}}key={index+'element'} lg={{ span: spanSize}} xs={{ span: spanSize * 2  }}>
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
