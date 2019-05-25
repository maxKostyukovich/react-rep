import React from 'react';
import Dropdown from './Components/Dropdown/Dropdown'
import moment from 'moment'
import DropdownMenu from './Components/DropdownMenu/DropdownMenu'
import TurnOverButton from './Components/TurnOverButton/TurnOverButton'
import Calendar from './Components/Calendar/Calendar'
import Events from './Components/Events/Events'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentMonth:moment(),
      isDropdown : false,
      mode:'month'
    };
    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleAddMonth =this.handleAddMonth.bind(this);
    this.handleSubMonth = this.handleSubMonth.bind(this);
    this.handlerWeek = this.handlerWeek.bind(this);
    this.handlerMonth = this.handlerMonth.bind(this);
    this.handleTableClick=this.handleTableClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  } 
  handleClick(){
    if(this.state.isDropdown)
    {
      this.setState({isDropdown:false});
    }
  }
  dataEvents(){
    let data =
      [
      {date:"2019-05-30",events:[{name:"Go on a picnic",body:"We are going to do a picnic on Khortitza",time:"10:00 AM"},
      {name:"Practice",body:"Scope Creek",time:"07:00 PM"}]},
      {date:"2019-05-29",events:[{name:"Practice",body:"Pine Mountain Overlook Loop",time:"11:00 AM"}]},
      {date:"2019-06-10",events:[{name:"Practice",body:"All-A-Toona Ride",time:"11:00 AM"}]}
    ];
    return data;
  }
  handleTableClick(e){
    let target = e.target;
    if(target.textContent!="" && (target.tagName=="TD" || target.tagName=="DIV" || target.tagName=="HR"))
    this.setState({currentMonth:this.state.currentMonth.clone().set("date",target.textContent)});
    
}
  handleDropdown(e){
    this.setState((state)=>({isDropdown:!state.isDropdown}));
    e.stopPropagation();
  }
  handleSubMonth(){
    if(this.state.mode==="month"){
   let tmpMoment= this.state.currentMonth.clone().subtract(1,'month');
   this.setState({currentMonth:tmpMoment});
    }else{
      let tmp = this.state.currentMonth.clone().subtract(1,"week");
      this.setState({currentMonth:tmp});
    }
  }
  handlerMonth(e){
    if(this.state.mode!=='month')
    this.setState({mode:'month'})
    e.stopPropagation();
  }
  handlerWeek(e){
    if(this.state.mode!=='week')
    this.setState({mode:'week'})
    e.stopPropagation();
  }
  handleAddMonth(){
    if(this.state.mode==="month"){
      let tmpMoment= this.state.currentMonth.clone().add(1,'month');
      this.setState({currentMonth:tmpMoment});
       }else{
         let tmp = this.state.currentMonth.clone().add(1,"week");
         this.setState({currentMonth:tmp});
       }
  }
  render(){
  return (
    <div className="App" onClick ={this.handleClick}>
      <div className="wrap">
        <div className="header">
      <TurnOverButton text={this.state.mode==="month"?this.state.currentMonth.clone().subtract(1,"month").format("MMM"):"Prev"} 
      handler={this.handleSubMonth} className={"prev-month"}/>
      <div className="month">
      <h2 className="current-month"><b>{this.state.currentMonth.clone().format('MMMM')}</b></h2>
      <Dropdown isDrop={this.state.isDropdown} onClick={this.handleDropdown}/>
      </div>
      <TurnOverButton text={this.state.mode==="month"?this.state.currentMonth.clone().add(1,"month").format("MMM"):"Next"} 
      handler={this.handleAddMonth} className={"next-month"}/>
        </div>
      <DropdownMenu handlerWeek={this.handlerWeek} 
      handlerMonth={this.handlerMonth} 
      isVisible={this.state.isDropdown}/>
      <Calendar handleTdClick={this.handleTableClick} 
      mode={this.state.mode} 
      date={this.state.currentMonth}
      data={this.dataEvents()}/>
      <Events data={this.dataEvents()} date={this.state.currentMonth} mode={this.state.mode}/>
      </div>
    </div>
  );
  }
}
export default App;
