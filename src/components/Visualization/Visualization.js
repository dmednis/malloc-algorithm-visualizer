import React, { Component } from 'react';
import ParameterInputs from "../ParameterInputs";
import Algorithm from "../Algorithm";

export default class Visualization extends Component {

  constructor() {
    super();

    this.state = {
      chunks: [],
      sizes: [],
    };
  }

  setChunks(rawChunks) {
    const chunks = rawChunks.map((chunk) => {
      return {
        size: chunk,
        memory: new Array(chunk).fill(0),
        accessing: false,
      }
    });
    this.setState({ chunks });
  }

  setSizes(rawSizes) {
    const sizes = rawSizes.map((size, idx) => {
      return {
        id: idx + 1,
        size: size,
        allocated: false,
      }
    });
    this.setState({ sizes });
  }

  render() {
    const { chunks, sizes } = this.state;

    return (
      <div>
        <ParameterInputs setChunks={this.setChunks} setSizes={this.setSizes}/>
        <Algorithm chunks={chunks} sizes={sizes} name="First fit"/>
        <Algorithm chunks={chunks} sizes={sizes} name="Best fit"/>
        <Algorithm chunks={chunks} sizes={sizes} name="Worst fit"/>
        <Algorithm chunks={chunks} sizes={sizes} name="Buddy's System"/>
        <Algorithm chunks={chunks} sizes={sizes} name="Next fit"/>
      </div>
    )
  }
}