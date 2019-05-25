import React from 'react';
import './DropdownMenu.css';

class DropdownMenu extends React.Component {
  constructor(props){
    super(props);
    this.state={
        class:"hide"
    }
  }
  componentWillReceiveProps(props){
      if(props.isVisible){
          this.setState({class:""})
      }
      else{
        this.setState({class:"hide"})
      }
  }
  render(){
    return (

    <div className={this.state.class}>
      <div className={"wrapper"}>
        <div className="drop-menu">
            <div onClick={this.props.handlerWeek} className="calendar-mode">
             <p>This week</p>
          </div>
          <div onClick={this.props.handlerMonth} className="calendar-mode">
            <p>This month</p>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default DropdownMenu;