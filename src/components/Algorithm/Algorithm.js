import React from 'react';
import MemoryIndicator from "../MemoryIndicator";
import SegmentationGraph from "../SegmentationGraph";
import {Col, Row} from "reactstrap";

export default function Algorithm({name, data}) {

  const style = {
      padding: 5,
      borderBottom: '1px solid black',
      display: 'flex'
  };

  let chunks;
  if (data) {
    chunks = data.chunks;
  }

  return (
        <header style={style}>
          <Row style={{width: '100%'}}>
            <Col style={{alignContent: 'center'}}>
            <Row>
              <h2 style={{marginTop: '20px', marginLeft: '30px'}}>{name}</h2>
            </Row>
            <MemoryIndicator chunks={chunks} />
            </Col>
            <Col>
            <SegmentationGraph chunks={chunks}/>
            </Col>
          </Row>
        </header>
    )
}