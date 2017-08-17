import React from 'react';
import Board from './board';

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      score: 0,
      currentWord: ""
    };
  }
  render(){
    return(
      <div className="game">
        <Board/>
      </div>
      //cuurent Word:
      //button submit
      //scorechart
    );
  }
}

export default Game;
