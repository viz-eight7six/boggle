import React from 'react';
import _ from 'lodash';

class Dice extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      selected: false,
      letter: ""
    };
    this.press = this.press.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  press(){
    this.setState({selected: !this.state.selected},this.handlePress);
  }

  handlePress(){
    if(this.state.selected){
      this.props.deleteLetter();
    }
  }

  render(){
    let letter;
    let tempLetter = _.sample(this.props.die.split(''), 1);
    letter = tempLetter === 'q' ? "Qu" : tempLetter.toUpperCase();
    this.setState({letter:letter});
    return (
      <div className="dice"
        onPress={this.press}>
        <span className="dice-span">{this.state.letter}</span>
      </div>
    );
  }
}

export default Dice;
