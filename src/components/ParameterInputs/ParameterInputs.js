import React, { Component } from 'react';
import { Button, Input, Row, Col } from "reactstrap";
import ClosableBadge from "./ClosableBadge";

export default class ParameterInputs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sizes: [],
      chunks: [],
      size: '',
      chunk: '',
    };

    this.handleChunkChange = this.handleChunkChange.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.removeChunk = this.removeChunk.bind(this);
    this.removeSize = this.removeSize.bind(this);
    this.addChunk = this.addChunk.bind(this);
    this.addSize = this.addSize.bind(this);
  }

  componentDidMount() {
    // const { defaultChunks, defaultSizes } = this.props;
    // this.setState({
    //   chunks: defaultChunks,
    //   sizes: defaultSizes,
    // })
  }

  addChunk() {
    this.setState(prevState => ({
      chunks: [...prevState.chunks, this.state.chunk],
      chunk: '',
    }));
  }

  addSize() {
    this.setState(prevState => ({
      sizes: [...prevState.sizes, this.state.size],
      size: '',
    }));
  }

  handleChunkChange(event) {
    // Handles enter press
    if (event.key === 'Enter') {
      this.setState({
        chunks: [...this.state.chunks, event.target.value],
        chunk: '',
      });
      event.target.value = '';
    }

    this.setState({
      chunk: event.target.value,
    });
  }

  handleSizeChange(event) {
    // Handles enter press
    if (event.key === 'Enter') {
      this.setState({
        sizes: [...this.state.sizes, event.target.value],
        size: '',
      });
      event.target.value = '';
    }

    this.setState({
      size: event.target.value,
    });
  }

  removeChunk(index) {
    const chunkList = this.state.chunks;
    chunkList.splice(index, 1);

    this.setState({
      chunks: chunkList,
    })
  }

  removeSize(index) {
    const sizeList = this.state.sizes;
    sizeList.splice(index, 1);

    this.setState({
      sizes: sizeList,
    })
  }

  renderChunks() {
    let chunkList = [];
    this.state.chunks.forEach(chunk => {
      const index = this.state.chunks.indexOf(chunk);
      chunkList.push(<ClosableBadge number={chunk} index={index} remove={this.removeChunk}/>)
    });
    return chunkList;
  }


  renderSizes() {
    let sizeList = [];
    this.state.sizes.forEach(size => {
      const index = this.state.sizes.indexOf(size);
      sizeList.push(<ClosableBadge number={size} index={index} remove={this.removeSize()}/>)
    });
    return sizeList;
  }

  render() {
    console.log('CHUNKS, SIZES', this.state.chunks, this.state.sizes);
    console.log('SIZE', this.state.size);
    console.log('Chunk', this.state.chunk);

    return (
      <div>
        <Row>
          <Col style={{ display: 'flex', margin: 5}} sm={6}>
            <Input
              placeholder='Chunk'
              value={this.state.chunk}
              onChange={event => {
                this.setState({
                  chunk: event.target.value,
                })
              }}
              onKeyPress={event => this.handleChunkChange(event)}
            />
            <Button
              onClick={this.addChunk}
              style={{ marginLeft: '5px' }}
            >Pievienot</Button>
          </Col>
          <Col style={{ display: 'flex', margin: 5 }} sm={5}>
            {this.renderChunks()}
          </Col>
        </Row>
        <Row>
          <Col style={{ display: 'flex', margin: 5}} sm={6}>
          <Input
            placeholder='Size'
            value={this.state.size}
            onChange={event => {
              this.setState({
                size: event.target.value,
              })
            }}
            onKeyPress={event => this.handleSizeChange(event)}
          />
          <Button
            onClick={this.addSize}
            style={{ marginLeft: '5px' }}
          >Pievienot</Button>
          </Col>
          <Col style={{ display: 'flex', margin: 5 }} sm={5}>
            {this.renderSizes()}
          </Col>
        </Row>
      </div>
    )
  }
}