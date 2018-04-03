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

    this.defaultChunks = [ 10, 20, 30, 50, 10 ];
    this.defaultSizes = [ 5, 10, 15, 25, 20 ];
  }

  componentDidMount() {
    this.init(this.defaultChunks, this.defaultSizes);
  }

  init(chunks, sizes) {
    const chunkStructure = this.setChunks(chunks);
    const sizesStructure = this.setSizes(sizes);
    this.initAlgorithms(chunkStructure, sizesStructure);
  }

  setChunks(rawChunks) {
    const chunks = rawChunks.map((chunk) => {
      return {
        size: chunk,
        memory: new Array(chunk).fill(0),
        accessing: false,
      }
    });
    this.setState({ chunks: rawChunks });
    return chunks;
  }

  setSizes(rawSizes) {
    const sizes = rawSizes.map((size, idx) => {
      return {
        id: idx + 1,
        size: size,
        allocated: false,
      }
    });
    this.setState({ sizes: rawSizes });
    return sizes;
  }

  initAlgorithms(chunks, sizes) {
    const structure = { chunks, sizes };
    this.setState({
      firstFit: {...structure},
      bestFit: {...structure},
      worstFit: {...structure},
      buddysSystem: {...structure},
      nextFit: {...structure},
    })
  }



  render() {
    const { firstFit, bestFit, worstFit, buddysSystem, nextFit } = this.state;

    return (
      <div>
        <ParameterInputs
          defaultChunks={this.defaultChunks}
          defaultSizes={this.defaultSizes}
          setChunks={this.setChunks}
          setSizes={this.setSizes}/>
        <Algorithm data={firstFit} name="First fit"/>
        <Algorithm data={bestFit} name="Best fit"/>
        <Algorithm data={worstFit} name="Worst fit"/>
        <Algorithm data={buddysSystem} name="Buddy's System"/>
        <Algorithm data={nextFit} name="Next fit"/>
      </div>
    )
  }
}