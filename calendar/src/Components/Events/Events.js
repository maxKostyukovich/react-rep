import React from 'react';
import EventItem from './EventItem/EventItem'
import moment from 'moment'
import './Events.css';


class Events extends React.Component {
  constructor(props){
    super(props);
    this.state={
    }
  }

showEvents(eventArr){
  eventArr.sort((a,b)=>moment(a.date, 'YYYY-MM-DD') - moment(b.date, 'YYYY-MM-DD'));
    let events = eventArr.map((items,i)=>{
      let total = [<h2 className="dateHeader">{moment(items.date).format('ddd, D MMMM')}</h2>];
      for(let i=0;i<items.events.length;i++){
        total.push(
          <EventItem data={items.events[i]}/>
        )
      }
       return total; 
    })
    return events;
}  
initMonthsEvents(){
    let eventArr = [];
    for(let i=0;i<this.props.data.length;i++){
        if(moment(this.props.data[i].date).format('M')===this.props.date.clone().format('M') && 
        moment(this.props.data[i].date)>= this.props.date.clone().subtract(1,'day')){
            eventArr.push(this.props.data[i]);
        }
    }
    return this.showEvents(eventArr);
}
initWeeksEvents(){
  let eventArr=[];
  for(let i = 0;i<this.props.data.length;i++){
    if(moment(this.props.data[i].date).format('w')===this.props.date.clone().format('w') && 
        moment(this.props.data[i].date)>= this.props.date.clone().subtract(1,'day')){
            eventArr.push(this.props.data[i]);
        }
  }
  return this.showEvents(eventArr);
}
  render(){
    return (
      <div>
          {this.props.mode==="month"?this.initMonthsEvents():this.initWeeksEvents()}
      </div>
  );
}
}

export default Events;