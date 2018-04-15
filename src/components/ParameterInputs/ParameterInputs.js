import React, { Component } from 'react';
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'
import './ParameterInput.css';
import { Button } from "reactstrap";

export default class ParameterInputs extends Component {
  constructor(props) {
    super();
    this.state = {
      chunks: props.defaultChunks || [],
      sizes: props.defaultSizes || [],
    }
  }

  addChunks = (chunks) => {
    const intChunks = chunks.map(c => Number(c));
    this.setState({ chunks: intChunks });
    this.props.setChunks(intChunks);
  };

  addSizes = (sizes) => {
    const intSizes = sizes.map(s => Number(s));
    this.setState({ sizes: intSizes });
    this.props.setSizes(intSizes);
  };

  reset() {
    const { chunks, sizes } = this.state;
    this.props.setChunks(chunks);
    this.props.setSizes(sizes);
  }

  setToDefaults() {
    const { defaultChunks, defaultSizes } = this.props;
    this.setState({ chunks: defaultChunks, sizes: defaultSizes });
    this.props.setChunksAndSizes(defaultChunks, defaultSizes);
  }

  render() {
    const { auto } = this.props;
    const { chunks, sizes } = this.state;
    const style = {
      marginLeft: '20px',
      display: 'flex',
      flexDirection: 'row',
    };

    return (
      <div style={style}>
        <TagsInput
          value={chunks}
          onChange={this.addChunks}
          inputProps={{
            placeholder: 'Enter chunks'
          }}
        />
        <TagsInput
          value={sizes}
          onChange={this.addSizes}
          inputProps={{
            placeholder: 'Enter sizes'
          }}
        />
        {!auto &&
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Button
            onClick={() => {
              this.props.startAutoAllocation()
            }}
            style={{ marginLeft: '20px' }}
          >AUTO ALLOCATE</Button>
          <Button
            onClick={() => {
              this.props.doAlgorithmStep()
            }}
            style={{ marginLeft: '20px' }}
          >STEP ALLOCATE</Button>
        </div>
        }
        <Button
          onClick={() => {
            this.reset()
          }}
          style={{ marginLeft: '20px' }}
        >RESET</Button>
        <Button
          onClick={() => {
            this.setToDefaults()
          }}
          style={{ marginLeft: '20px' }}
        >SET TO DEFAULTS</Button>
      </div>
    )
  }
}