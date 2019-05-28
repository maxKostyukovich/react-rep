import React from 'react';
import './TurnOverButton.css';

class NextButton extends React.Component {
  
  render(){
    return (
    <div className={this.props.className} onClick={this.props.handler}>
      <span>{this.props.text}</span>
    </div>
  );
}
}

export default NextButton;