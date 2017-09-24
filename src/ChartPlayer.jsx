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
  constructor(props) {
    super(props);
  }

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
    let actions = [];
    if (this.props.chart && this.props.currentTime) {
      const current = this.props.currentTime;
      actions = this.props.chart.filter((t) => {
        return t - current <= 2000 && t - current >= 100;
      });
    }
    return (
      <div>
        <TiArrowUpThick /> {actions.join()}
      </div>
    );
  }
}

export default ChartPlayer;