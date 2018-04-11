import React, { Component } from 'react';
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'
import './ParameterInput.css';

export default class ParameterInputs extends Component {
  constructor(props) {
    super();
    this.state = {
      chunks: props.defaultChunks || [],
      sizes: props.defaultSizes || [],
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.reset) {
      this.setState({
        chunks: newProps.defaultChunks,
        sizes: newProps.defaultSizes,
      })
    }
  }

  addChunks = (chunks) => {
    const intChunks = chunks.map(c => Number(c));
    this.setState({chunks: intChunks});
    this.props.setChunks(intChunks);
  };

  addSizes = (sizes) => {
    const intSizes = sizes.map(s => Number(s));
    this.setState({ sizes: intSizes });
    this.props.setSizes(intSizes);
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