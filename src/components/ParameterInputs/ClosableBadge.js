import React, { Component } from 'react';
import { Badge, Button } from 'reactstrap';

class ClosableBadge extends Component {
  render() {
    const { number, index, remove } = this.props;
    return(
      <div style={{ marginRight: '5px' }}>
        <h6>
          <Badge color="primary">
            <Button
              color="primary"
              style={{ alignItems: 'center', height: '10px', width: '15px' }}
              onClick={ event => {
                event.preventDefault();
                remove(index);
              }}
            >x</Button>
            {number}
          </Badge>
        </h6>
      </div>
    )
  }
}

export default ClosableBadge;
