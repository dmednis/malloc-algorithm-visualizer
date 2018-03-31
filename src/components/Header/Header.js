import React from 'react';

export default function Header() {

    const headerStyle = {
        backgroundColor: '#222',
        color: 'white',
        textAlign: 'center'
    };

    return (
        <header style={headerStyle}>
           <h1>Malloc Algoritm Visualizer</h1>
        </header>
    )
}