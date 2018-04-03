import React, {Component} from 'react';
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";

export default class SegmentationGraph extends Component {

  constructor(){
    super();
    this.state = {
      data: {
        frag: 0,
        time: 0,
      },
    }
  }

  calculateFragmentation(chunks){
    // check for largest free mem size
    // count the sum of free mem
    let bigFreeBlock = 0;
    let sumFreeMem = 0;
    chunks.forEach((chunk)=>{
      bigFreeBlock = chunk.free > bigFreeBlock ? chunk.free : bigFreeBlock;
      sumFreeMem += chunk.free;
    });

    return (1-(bigFreeBlock/sumFreeMem));
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.chunks){
      const frag = this.calculateFragmentation(nextProps.chunks);

      this.setState({
        data: {
          frag,
          time: this.state.time + 1,
        }
      })
    }
  }

  render() {
    const { chunks } = this.props;
    // console.log('DATA', this.state.data);

    const fakeData = [
      {
        frag: 0.1,
        time: 0,
      },
      {
        frag: 0.12,
        time: 1,
      },
      {
        frag: 0.2,
        time: 2,
      },
      {
        frag: 0.4,
        time: 3,
      },
      {
        frag: 0.45,
        time: 4,
      },
      {
        frag: 0.55,
        time: 5,
      },
      {
        frag: 0.57,
        time: 6,
      },
      {
        frag: 0.58,
        time: 7,
      },
      {
        frag: 0.64,
        time: 8,
      },
      {
        frag: 0.7,
        time: 9,
      },
      {
        frag: 0.8,
        time: 10,
      },
    ];
    return (
      <div style={{width: '100%', height: '100%'}}>
        <p>GRAPH</p>
        <LineChart width={400} height={150} data={fakeData}
                   margin={{top: 5, right: 30, left: 20, bottom: 15}}>
          <XAxis dataKey="time"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Line type="monotone" dataKey="frag" stroke="#8884d8" activeDot={{r: 8}}/>
        </LineChart>
      </div>
    )
  }
}