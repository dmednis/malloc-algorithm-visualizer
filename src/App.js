import React, { Component } from 'react';
import Header from "./components/Header";
import Visualization from "./components/Visualization";
import GithubRibbon from "./components/GithubRibbon";

class App extends Component {
  render() {
    return (
      <div>
        <GithubRibbon/>
        <Header/>
        <Visualization/>
      </div>
    );
  }
}

export default App;
