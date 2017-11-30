import React from 'react';
import { random } from './random';

export class Target extends React.Component {
  render() {
    let style = {
      position: 'absolute',
      left: random(0, 100) + '%',
      top: random(0, 100) + '%',
      fontSize: 40,
      cursor: 'pointer'
    };

    return (
      <span style={style} className="target">
        {this.props.number}
      </span>
    )
  }
}