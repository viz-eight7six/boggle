import React from 'react';
import _ from 'lodash';

class Dice extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      selected: false,
      letter: "",
      coords: this.props.coords
    };
    this.press = this.press.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  componentWillMount(){
    let letter;
    let tempLetter = _.sample(this.props.die.split(''), 1);
    letter = tempLetter === 'q' ? "Qu" : tempLetter.toUpperCase();
    this.setState({letter:letter});
  }

  componentWillUpdate(prevProps, prevState){
    if(this.props.clear){
      this.setState({selected: false});
    }
  }

  press(){
    if(this.inRange() && !this.state.selected){
      this.setState({selected: true},this.handlePress);
    }
    else if (this.props.lastCords === this.state.coords) {
      this.setState({selected: false},this.handlePress);
    }
  }

  inRange(){
    if(this.props.lastCords === undefined){
      return true;
    }
    else if (Math.abs(this.props.lastCords[0] - this.props.coords[0]) <= 1) {
      if (Math.abs(this.props.lastCords[1] - this.props.coords[1]) <= 1) {
        return true;
      }
    }
    return false;
  }

  handlePress(){
    if(this.state.selected){
      this.props.addLetter(this.state);
    }
    else{
      if(this.props.lastCords === this.state.coords)
      this.props.deleteLetter();
    }
  }

  render(){
    let style;
    if(this.state.selected){
      style = {"backgroundColor":"#ACCEEC"};
    }
    else {
      style = {"backgroundColor":"white"};
    }
    return (
      <div className="dice"
        onClick={this.press}
        style={style}
        >
        <span className="dice-span">{this.state.letter}</span>
      </div>
    );
  }
}

export default Dice;
