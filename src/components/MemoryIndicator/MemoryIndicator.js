import React, {Component} from 'react';

export default class MemoryIndicator extends Component {


  render() {
    const styles = {
      bigMemStyle: {
        display: 'flex',
        color: 'blue',
        border: '2px solid red',
      },
      memBlockStyle: {
        height: '20px',
        width: '5px',
        border: '1px solid green',
      }
    };


    // //chunks from props
    // const { chunks } = this.props;
    //
    // // chunks = [{
    // //
    // // }]
    let memoryBlocks = [];
    //
    // chunks.forEach((chunk) =>{
    //
    // });
    for (let i = 0; i < 105; i += 1) {
      memoryBlocks.push(<div style={styles.memBlockStyle}></div>)
    }

    return (
      <div style={styles.bigMemStyle}>
        {memoryBlocks}
      </div>
    )
  }
}