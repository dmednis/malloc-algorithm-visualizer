import React, {Component} from 'react';
import {CartesianGrid, Label, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";

export default class SegmentationGraph extends Component {

  constructor() {
    super();
    this.state = {
      data: [
        {
          frag: 0,
          time: 0,
        },
      ],
    }
  }

  calculateFragmentation(chunks) {
    let bigFreeBlock = 0;
    let sumFreeMem = 0;
    chunks.forEach((chunk) => {
      bigFreeBlock = chunk.free > bigFreeBlock ? chunk.free : bigFreeBlock;
      sumFreeMem += chunk.free;
    });

    return (1 - (bigFreeBlock / sumFreeMem));
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.drawGraph && nextProps.chunks && !nextProps.done) {
      const frag = this.calculateFragmentation(nextProps.chunks);

      this.setState(prevState => {
        let counter = prevState.data.length - 1;
        return {
          data: [...prevState.data, {
            frag,
            time: prevState.data[counter].time + 1,
          }]
        }
      });
    } else if (!nextProps.drawGraph) {
      this.setState({
        data: [
          {
            frag: 0,
            time: 0,
          },
        ],
      });
    }
  }

  render() {

    return (
      <div style={{height: '100%'}}>
        <p>GRAPH</p>
        <LineChart width={400} height={250} data={this.state.data}>
          <XAxis dataKey="time" tickMargin={10}>
            <Label value="Time" position="insideTopRight"/>
          </XAxis>
          <YAxis tickMargin={20}>
            <Label value="Fragmentation" position="insideLeft" offset={45} angle={-90}/>
          </YAxis>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Line type="monotone" dataKey="frag" stroke="#8884d8" activeDot={{r: 3}}/>
        </LineChart>
      </div>
    )
  }
}