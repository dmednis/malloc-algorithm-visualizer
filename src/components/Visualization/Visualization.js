import React, {Component} from 'react';
import ParameterInputs from "../ParameterInputs";
import Algorithm from "../Algorithm";

export default class Visualization extends Component {

    render() {
        return (
            <div>
                <ParameterInputs/>
                <Algorithm name="First fit"/>
                <Algorithm name="Best fit"/>
                <Algorithm name="Worst fit"/>
                <Algorithm name="Buddy's System"/>
                <Algorithm name="Next fit"/>
            </div>
        )
    }
}