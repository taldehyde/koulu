import React, { Component } from 'react';

//import logo from './logo.svg';
import './App.css';
import YouTube from 'react-youtube';

import ChartPlayer from './ChartPlayer.jsx'
import goblue from './goblue.txt';

function getChart(cb) {
  const client = new XMLHttpRequest();
  client.open('GET', goblue);
  client.onreadystatechange = () => {
    cb(client.responseText);
  }
  client.send();
}

const ytOpts = {
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

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: 'Loading',
      setIntervalId: null,
      startTime: null,
      currentTime: 0,
      chart: null
    };

    getChart((data) => {
      const chart = data.split('\n').map((s) => {
        return parseInt(s, 10);
      });
      this.setState({ chart: chart });
    });
  }

  render() {
    return (
      <div className='App'>
        <div className='App-youtube-frame'>
          <YouTube
            videoId="mURDwg_wilE"
            opts={ytOpts}
            onReady={this.onPlayerReady}
            onStateChange={this.onPlayerStateChange}
          />
        </div>
        <Status text={this.state.status} />
        <ChartPlayer currentTime={this.state.currentTime} />
      </div>
    );
  }

  updateFrame = () => {
    const currentDate = new Date();
    const elapsedTime = currentDate.getTime() - this.state.startTime.getTime();
    this.setState({
      currentTime: elapsedTime,
    });
  };

  onPlayerReady = (event) => {
    this.setState({
      status: 'Ready',
    })
  };

  onPlayerStateChange = (event) => {
    console.log(event);
    // play
    if (event.data === 1) {
      this.setState({
        status: 'Playing',
        startTime: new Date(),
        setIntervalId: setInterval(this.updateFrame, 20),
      });
    } else if (event.data === 0 || event.data === 2) {
      const id = this.state.setIntervalId;
      const status = event.data === 0? 'End': 'Puase';
      if (id) { clearInterval(id); }
      this.setState({
        status: status,
        setIntervalId: null,
      });
    }
  };
}

function Status(props) {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  );
}

export default App;
