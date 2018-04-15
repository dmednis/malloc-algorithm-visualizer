import React from 'react';
import MemoryIndicator from "../MemoryIndicator";
import SegmentationGraph from "../SegmentationGraph";
import { Col, Row } from "reactstrap";

export default function Algorithm({ name, data }) {

  const style = {
    width: '50%',
    padding: 5,
    borderBottom: '1px solid black',
    display: 'flex',
    flexWrap: 'wrap',
    borderRight: '1px solid black'
  };

  let chunks;
  if (data) {
    chunks = data.chunks;
  }

  return (
    <div style={style}>
      <Row>
        <Col>
          <h2 style={{ marginTop: '20px', marginLeft: '30px' }}>{name}</h2>
        </Col>
      </Row>
      <Row>
        <Col style={{ alignContent: 'center', width: '50%' }}>
          <MemoryIndicator chunks={chunks}/>
        </Col>
        <Col style={{ width: '50%' }}>
          <SegmentationGraph chunks={chunks}/>
        </Col>
      </Row>
    </div>
  )
}