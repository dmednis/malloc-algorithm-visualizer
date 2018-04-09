import React, { Component } from 'react';
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'
import './ParameterInput.css';

export default class ParameterInputs extends Component {
  constructor() {
    super();
    this.state = {
      chunks: [],
      sizes: [],
    }
  }

  addChunks = (chunks) => {
    this.setState({chunks})
  };

  addSizes = (sizes) => {
    this.setState({sizes})
  };

  render() {
    const { chunks, sizes } = this.state;
    const style = {
      marginLeft: '20px',
      display: 'flex',
      flexDirection: 'row',
    };

    return (
      <div style={ style }>
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
      </div>
    )
  }
}