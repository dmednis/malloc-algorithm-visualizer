import React from 'react';

export default function GithubRibbon() {

    const style = {
      position: 'absolute',
      top: 0,
      right: 0,
      border: 0
    };

    return (
      <a href="https://github.com/dmednis/malloc-algorithm-visualizer">
        <img style={style} src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png" alt="Fork me on GitHub"/>
      </a>
    );
}