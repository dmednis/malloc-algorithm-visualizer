import React, {Component} from 'react';

export default class MemoryIndicator extends Component {


  render() {
    const styles = {
      bigMemStyle: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        border: '1px solid grey',
        maxWidth: '220px',
        marginLeft: '20px',
      },
      memBlockStyle: {
        free:{
          height: '20px',
          width: '5px',
          border: '0.1px solid black',
          backgroundColor: 'white',
        },
        used:{
          height: '20px',
          width: '5px',
          border: '0.1px solid black',
          backgroundColor: 'green',
        },
        accessing: {
          height: '20px',
          width: '5px',
          border: '0.1px solid black',
          backgroundColor: 'yellow',
        },
        borderBlock:{
          height: '20px',
          width: '5px',
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
        if (!chunk.accessing){
          chunk.memory.forEach((mem)=>{
            if(mem > 0){
              memoryBlocks.push(<MemoryBlock status='used'/>)
            } else {
              memoryBlocks.push(<MemoryBlock status='free'/>)
            }
          })
        } else {
          chunk.memory.forEach(()=>{
            memoryBlocks.push(<MemoryBlock status='accessing'/>)
          });
        }
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