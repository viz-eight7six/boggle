import React from 'react';
import DiceRow from './diceRow';

class Board extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      dice_arr: []
    };
  }

  shuffle(a) {
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
  }
  componentWillMount(){
    const DICES = [
      "aaafrs",
      "aaeeee",
      "aafirs",
      "adennn",
      "aeeeem",
      "aeegmu",
      "aegmnn",
      "afirsy",
      "bjkqxz",
      "ccenst",
      "ceiilt",
      "ceilpt",
      "ceipst",
      "ddhnot",
      "dhhlor",
      "dhlnor",
      "dhlnor",
      "eiiitt",
      "emottt",
      "ensssu",
      "fiprsy",
      "gorrvw",
      "iprrry",
      "nootuw",
      "ooottu"
    ];

    this.shuffle(DICES);
    this.setState({dice_arr: DICES});
  }

  render(){
    let dices = [];
    let i = 0;
    while (dices.length < 5){
        let row = this.state.dice_arr.slice(i, i+5);
        dices.push(<DiceRow row={row}/>);
        i += 5;
    }
    // if(this.state.dice_arr){
    //   dices = this.state.dice_arr.map((row) => (
    //     <DiceRow row={row}/>
    //   ));
    // }
    // console.log(this.state.dice_arr);
    return (
      <div className="board">
        {dices}
      </div>
    );
  }
}

export default Board;
