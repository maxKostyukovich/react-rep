import React from 'react';
import './Dropdown.css';


class Dropdown extends React.Component {
  constructor(props){
    super(props);
    this.state={
      styles:''
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.isDrop)
    {
      this.setState({styles:"drop"})
    }else{
      this.setState({styles:""})
    }

  }
  render(){
    return (
      <div id='down' className={this.state.styles} onClick={this.props.onClick}>
        <img className="arrow"  src="img/arrow.png" alt="arrow"/>
      </div>
  );
}
}

export default Dropdown;