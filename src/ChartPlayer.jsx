import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TiArrowUpThick, TiArrowRepeat } from 'react-icons/lib/ti';
//import ReactAnimationFrame from 'react-animation-frame';


class ChartPlayer extends Component {
  // onAnimationFrame(time) {
  //   // do something
  //   const progress = time / this.props.durationMs * 100;
  //   if (progress >= 100) {
  //     this.props.endAnimation();
  //   }
  // }

  static childContextTypes = {
    reactIconBase: PropTypes.object
  };

  getChildContext() {
    return {
      reactIconBase: {
        color: 'blue',
        size: 80,
      }
    }
  }

  render() {
    return (
      <div>
        <TiArrowUpThick /> {this.props.currentTime}
      </div>
    );
  }
}

export default ChartPlayer;