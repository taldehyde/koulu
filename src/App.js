import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import YouTube from 'react-youtube';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'Loading',
      start_time: null,
    };
  }

  render() {
    const opts = {
      height: '360',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        controls: 0,
        showinfo: 0,
        rel: 0,
        modestbranding: 1,
      },
    };

    return (
      <div className='App'>
        <div className='App-youtube-frame'>
          <YouTube
            videoId="mURDwg_wilE"
            opts={opts}
            onReady={this.onPlayerReady}
            onStateChange={this.onPlayerStateChange}
          />
        </div>
        <Status text={this.state.status}/>
        <div className='App-actions'>
        </div>
      </div>
    );
  }

  onPlayerReady = (event) => {
    this.setState({
      status: 'Ready',
    })
  }

  onPlayerStateChange = (event) => {
    console.log(event);
    if (event.data === 1) {
      this.setState({
        status: 'Playing',
        start_time: new Date(),
      });
    } else if (event.data === 0) {
      this.setState({
        status: 'End',
      });
    }
  };
}

function Status(props) {
  return (
    <div>
      {props.text}
    </div>
  );
}

export default App;
