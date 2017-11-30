import React from 'react';
import ReactDOM from 'react-dom';
import { Target } from './Target';
import { random } from './random';

const fieldStyle = {
  position: 'absolute',
  width: '50%',
  bottom: 60,
  height: '60%',
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      game: false,
      targets: random(1, 1000*1000)
    };

    this.startGame = this.startGame.bind(this);

  }
  
  createRandomNumber() {
    setInterval(function(){
      this.setState({targets: random(1, 1000*1000)})
    }.bind(this, 2000))
  }

  startGame() {
    this.setState({
      game: true
    });
  }

  render() {
    let buttonStyle = {
      display: this.state.game ? 'none' : 'inline-block'
    };
    return (
      <div>
        <button onClick={this.startGame} style={buttonStyle}>
          New Game 
        </button>
        <div style={fieldStyle}>
        <Target 
          number={random(1, 1000*1000)} 
        />
        </div>
      </div>
    );
  }
}

export default App;
