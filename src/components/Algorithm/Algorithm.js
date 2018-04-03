import React from 'react';
import MemoryIndicator from "../MemoryIndicator";
import SegmentationGraph from "../SegmentationGraph";

export default function Algorithm({name}) {

    const style = {
        padding: 5,
        borderBottom: '1px solid black',
        display: 'flex'
    };

    return (
        <header style={style}>
            <h2>{name}</h2>
            <MemoryIndicator />
            <SegmentationGraph/>
        </header>
    )
}