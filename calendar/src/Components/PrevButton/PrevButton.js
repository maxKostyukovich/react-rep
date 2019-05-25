import React from 'react';
import './PrevButton.css';

class PrevButton extends React.Component {

  render(){
    return (
    <div onClick={this.props.handler} className="prev-month">
      <span>{this.props.text}</span>
    </div>
  );
}
}

export default PrevButton;