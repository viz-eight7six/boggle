import React from 'react';
import Dice from './Dice';

class DiceRow extends React.Component {


  constructor(props){
    super(props);
    this.state = {
    };
  }

  render(){
    let dices;
    if(this.props.row){
      dices = this.props.row.map((die, i) => (
        <Dice key={i} die={die}
          clear={this.props.clear}
          coords={[this.props.rowNum, i]}
          lastCords={this.props.lastCords}
          deleteLetter={this.props.deleteLetter}
          addLetter={this.props.addLetter}/>
      ));
    }
    return (
      <div className="row">
        {dices}
      </div>
    );
  }
}

export default DiceRow;
