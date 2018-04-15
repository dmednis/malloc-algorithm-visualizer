import React from 'react';
import MemoryIndicator from "../MemoryIndicator";
import SegmentationGraph from "../SegmentationGraph";
import { Col, Row } from "reactstrap";

export default function Algorithm({ name, data }) {

  const style = {
    padding: 5,
    borderBottom: '1px solid black',
    display: 'flex',
    flexWrap: 'wrap',
    flex: '1 1 50%',
    borderRight: '1px solid black',
  };

  let chunks;
  if (data) {
    chunks = data.chunks;
  }

  return (
    <div style={style}>
      <Row style={{width: '100%'}}>
        <Col>
          <h2 style={{ marginTop: '20px', marginLeft: '30px' }}>{name}</h2>
        </Col>
      </Row>
      <Row style={{width: '100%'}}>
        <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%', minWidth: 360 }}>
          <MemoryIndicator chunks={chunks}/>
        </Col>
        <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%', minWidth: 400 }}>
          <SegmentationGraph chunks={chunks}/>
        </Col>
      </Row>
    </div>
  )
}