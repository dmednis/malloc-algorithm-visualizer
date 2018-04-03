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

  let chunks, sizes;
  if (data) {
    chunks = data.chunks;
    sizes = data.sizes;
  }

  return (
        <header style={style}>
          <Row style={{width: '100%'}}>
            <Col>
            <Row>
              <h2 style={{marginLeft: '20px'}}>{name}</h2>
            </Row>
            <MemoryIndicator chunks={chunks} />
            </Col>
            <Col>
            <SegmentationGraph />
            </Col>
          </Row>
        </header>
    )
}