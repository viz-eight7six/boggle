import React from 'react';
import Board from './board';

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      score: 0,
      currentWord: [],
      coordStack: [],
      lastCoords: undefined,
      words: {},
      clear: false
    };
    this.addLetter = this.addLetter.bind(this);
    this.deleteLetter = this.deleteLetter.bind(this);
    this.clearState = this.clearState.bind(this);
    this.submitWord = this.submitWord.bind(this);
  }

  deleteLetter(){
    let currentWord = this.state.currentWord;
    currentWord.pop();
    let coordStack = this.state.coordStack;
    coordStack.pop();
    let lastCoord=this.state.coordStack[this.state.coordStack.length -1];
    this.setState({currentWord: currentWord, coordStack:coordStack, lastCoords:lastCoord});
  }

  addLetter(state){
    let currentWord = this.state.currentWord;
    currentWord.push(state.letter);
    let coordStack = this.state.coordStack;
    coordStack.push(state.coords);
    this.setState({currentWord: currentWord, coordStack:coordStack, lastCoords:state.coords});
  }

  submitWord(){
    let word = this.state.currentWord.join('').toLowerCase();
    let words = this.state.words;
    if(words[word]){
      return false;
    }
    else{
      let score = this.state.score;
      let point;
      if(word.length < 3){
        point = 0;
      }
      else if (word.length < 5) {
        point = 1;
      }
      else if (word.length < 6) {
        point = 2;
      }
      else if (word.length < 7) {
        point = 3;
      }
      else if (word.length < 8) {
        point = 5;
      }
      else {
        point = 11;
      }
      words[word] = point;
      score += point;
      this.setState({words:words, score:score, clear: true}, this.clearState);
    }
  }

  clearState(){
    this.setState({
      lastCoords: undefined,
      coordStack: [],
      currentWord: [],
      clear: false
    });
  }

  render(){
    let wordTable;
    if(this.state.words){
      wordTable = Object.keys(this.state.words).map((word, i) => (
          <tr key={i}>
            <td>{word}</td>
            <td>{this.state.words[word]}</td>
          </tr>
      ));
    }
    return(
      <div className="game">
          <Board
            deleteLetter={this.deleteLetter}
            clear={this.state.clear}
            addLetter={this.addLetter}
            lastCords={this.state.lastCoords}/>
          <div className="current-word">
          <span>Current Word: {this.state.currentWord}</span>
          <button
            onClick={this.submitWord}
            >Submit Word</button>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th className="word">Word</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {wordTable}
            </tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td>{this.state.score}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

export default Game;
