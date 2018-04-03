import React, { Component } from 'react';
import {Badge, Button, Col} from 'reactstrap';

class ClosableBadge extends Component {
  render() {
    const { number, index, remove } = this.props;
    return(
      <div style={{ marginRight: '5px' }}>
        <h6>
          <Badge style={{display: 'flex', marginLeft: '12px'}} color="primary">
            {/*<Col style={{alignContent: 'center', verticalAlign: 'middle'}}>*/}
            {/*</Col>*/}
              <p style={{alignSelf: 'center'}}>{number}</p>
            <Col>
            <Button
              color="primary"
              // style={{ alignItems: 'center', height: '10px', width: '15px' }}
              onClick={ event => {
                event.preventDefault();
                remove(index);
              }}
            >x</Button>
            </Col>
          </Badge>
        </h6>
      </div>
    )
  }
}

export default ClosableBadge;
