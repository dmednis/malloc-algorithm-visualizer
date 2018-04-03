import React, { Component } from 'react';
import uuid from 'uuid';

export default class MemoryIndicator extends Component {

  render() {
    const indicatorStyle = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      border: '1px solid grey',
      maxWidth: 345,
      marginTop: 30,
      marginBottom: 15,
      marginLeft: 100,
    };

    function bitStyle() {
      return {
        height: 40,
        width: 15,
        border: '0.1px solid black',
        backgroundColor: 'white',
      }
    }

    function MemoryBlock({ allocated, accessing }) {
      let style = bitStyle();
      if (allocated) {
        style = { ...style, backgroundColor: 'green', }
      }
      if (accessing) {
        style = { ...style, borderBottom: '5px solid blue' }
      }

      return <div style={style}/>
    }

    function DividerBlock() {
      const style = { ...bitStyle(), backgroundColor: 'gray' };

      return <div style={style}/>
    }

    const { chunks } = this.props;

    let bits = [];
    if (chunks) {
      bits = chunks.reduce((acc, chunk) => {
        const bits = chunk.memory.map((mem) => {
          return <MemoryBlock key={uuid()} allocated={mem > 0} accessing={chunk.accessing}/>
        });
        const divider = (<DividerBlock key={uuid()}/>);
        return acc.concat(bits, divider);
      }, []);
    }

    return (
      <div style={indicatorStyle}>
        {bits}
      </div>
    )
  }
}