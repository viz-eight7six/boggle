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
      dices = this.props.row.map((die) => (
        <Dice die={die}/>
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
