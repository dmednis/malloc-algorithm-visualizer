import React, {Component} from 'react';
import {Button, Input} from "reactstrap";

export default class ParameterInputs extends Component {

    constructor() {
        super();

        this.setState({

        })
    }

    render() {
        const style = {
            padding: 5,
            borderBottom: '1px solid black',
            display: 'flex'
        };

        return (
            <div style={style}>
                <Input placeholder="Total memory"/>
                <Input placeholder="Page size"/>
                <Input placeholder="Memory to allocate"/>
                <Button>Allocate</Button>
            </div>
        )
    }
}