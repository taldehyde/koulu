import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import YouTube from 'react-youtube';

class App extends Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <YouTube
        videoId="vG4yxzgDed8"
      />
    );
  }
}

export default App;
