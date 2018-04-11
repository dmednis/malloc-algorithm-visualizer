import React, { Component } from 'react';
import { Button } from "reactstrap";
import * as _ from 'lodash';

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
    this.defaultSizes = [ 1, 2, 3, 25, 20 ];
  }

  componentDidMount() {
    this.init(this.defaultChunks, this.defaultSizes);
  }

  init(chunks, sizes) {
    const chunkStructure = this.setChunks(chunks);
    const sizesStructure = this.setSizes(sizes);
    this.initAlgorithms(chunkStructure, sizesStructure);
  }

  reset() {
    this.init(this.defaultChunks, this.defaultSizes);
    this.setState({ reset: true });
  }

  setChunks = (rawChunks) => {
    const { sizes } = this.state;
    const chunks = rawChunks.map((chunk) => {
      return {
        size: chunk,
        free: chunk,
        memory: new Array(chunk).fill(0),
        accessing: false,
      }
    });
    this.setState({ chunks, reset: false });
    this.initAlgorithms(chunks, sizes);
    return chunks;
  };

  setSizes = (rawSizes) => {
    const { chunks } = this.state;
    const sizes = rawSizes.map((size, idx) => {
      return {
        id: idx + 1,
        size: size,
        allocated: false,
      }
    });
    this.setState({ sizes, reset: false });
    this.initAlgorithms(chunks, sizes);
    return sizes;
  };

  initAlgorithms(chunks, sizes) {
    const structure = { chunks, sizes };
    this.setState({
      firstFit: _.cloneDeep(structure),
      bestFit: _.cloneDeep(structure),
      worstFit: _.cloneDeep(structure),
      buddysSystem: _.cloneDeep(structure),
      nextFit: _.cloneDeep(structure),
    })
  }

  doAlgorithmStep() {
    const { firstFit, bestFit, worstFit, buddysSystem, nextFit } = this.state;

    console.log("BEFORE", firstFit);
    const newFirstFit = this.nextFirstFitStep(firstFit);
    console.log("AFTER", newFirstFit);

    this.setState({
      firstFit: newFirstFit
    });
  }

  fillMemory(memory, content, size) {
    const start = memory.indexOf(0);
    return memory.fill(content, start, start + size);
  }

  nextFirstFitStep(state) {
    const { chunks, sizes, chunkIdx = 0, sizeIdx = 0, step = 'access' } = state;

    const size = sizes[ sizeIdx ];
    const chunk = chunks[ chunkIdx ];

    const newChunks = chunks.map((c, idx) => {
      if (chunkIdx === idx) {
        return { ...c, accessing: true }
      } else {
        return { ...c, accessing: false }
      }
    });

    if (size && chunk) {
      if (step === 'alloc') {
        chunk.memory = this.fillMemory(chunk.memory, size.id, size.size);
        chunk.free -= size.size;
        newChunks[ chunkIdx ] = chunk;
        return { ...state, chunkIdx: 0, sizeIdx: sizeIdx + 1, chunks: newChunks, step: 'access'};
      } else {
        if (chunk.free >= size.size) {
          return {...state, chunks: newChunks, step: 'alloc'}
        } else {
          return { ...state, chunkIdx: chunkIdx + 1, chunks: newChunks, step: 'access'};
        }
      }
    } else {
      return {...state, chunks: newChunks}
    }
  }

  render() {
    const { firstFit, bestFit, worstFit, buddysSystem, nextFit, reset } = this.state;

    return (
      <div>
        <ParameterInputs
          defaultChunks={this.defaultChunks}
          defaultSizes={this.defaultSizes}
          setChunks={this.setChunks}
          setSizes={this.setSizes}
          reset={reset}
        />
        <Button
          onClick={() => {this.doAlgorithmStep()}}
          style={{ marginLeft: '20px' }}
        >DO STEP</Button>
        <Button
          onClick={() => {this.reset()}}
          style={{ marginLeft: '20px' }}
        >RESET</Button>
        <Algorithm data={firstFit} name="First fit"/>
        <Algorithm data={bestFit} name="Best fit"/>
        <Algorithm data={worstFit} name="Worst fit"/>
        <Algorithm data={buddysSystem} name="Buddy's System"/>
        <Algorithm data={nextFit} name="Next fit"/>
      </div>
    )
  }
}