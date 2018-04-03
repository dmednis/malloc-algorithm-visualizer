import React, {Component} from 'react';

export default class MemoryIndicator extends Component {


  render() {
    const blockHeight = '40px';
    const blockWidth = '15px';
    const styles = {
      bigMemStyle: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        border: '1px solid grey',
        maxWidth: '345px',
        marginTop: '30px',
        marginBottom: '15px',
        marginLeft: '100px',
      },
      memBlockStyle: {
        free:{
          height: blockHeight,
          width: blockWidth,
          border: '0.1px solid black',
          backgroundColor: 'white',
        },
        used:{
          height: blockHeight,
          width: blockWidth,
          border: '0.1px solid black',
          backgroundColor: 'green',
        },
        accessing: {
          height: blockHeight,
          width: blockWidth,
          border: '0.1px solid black',
          borderBottom: '5px solid blue',
          backgroundColor: 'yellow',
        },
        borderBlock:{
          height: blockHeight,
          width: blockWidth,
          border: '0.1px solid black',
          backgroundColor: 'grey',
        },
      }
    };

    // little mem block
    function MemoryBlock(props) {
      let blockStyle;
      switch (props.status){
        case 'free': {
          blockStyle = styles.memBlockStyle.free;
          break;
        }
        case 'used': {
          blockStyle = styles.memBlockStyle.used;
          break;
        }
        case 'accessing': {
          blockStyle = styles.memBlockStyle.accessing;
          break;
        }
        case 'borderBlock': {
          blockStyle = styles.memBlockStyle.borderBlock;
          break;
        }
        default: {
          break;
        }
      }
      return <div style={blockStyle}></div>
    }

    const { chunks } = this.props;
    let memoryBlocks = [];

    if(chunks){
      chunks.forEach((chunk) =>{
          chunk.memory.forEach((mem)=>{
            if(mem > 0){
              memoryBlocks.push(<MemoryBlock status='used'/>)
            } else if(chunk.accessing) {
              memoryBlocks.push(<MemoryBlock status='accessing'/>)
            } else {
              memoryBlocks.push(<MemoryBlock status='free'/>)
            }
          });
        memoryBlocks.push(<MemoryBlock status='borderBlock'/>)
      });
    }


    return (
      <div style={styles.bigMemStyle}>
        {memoryBlocks}
      </div>
    )
  }
}