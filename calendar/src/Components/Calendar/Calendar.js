import React from 'react';
import moment from 'moment'
import TabelData from './TableData/TabelData'
import './Calendar.css';

class Calendar extends React.Component {
  events(date){
    let tmp=0;
    this.props.data.forEach((item,index)=>{
      if(moment(item.date).format('YYYYMD')===this.props.date.clone().date(date).format('YYYYMD')){
        tmp=item.events.length;
      }
    });
  return tmp;
  }
 
  initDaysInMonth(){
    let startDay= this.props.date.clone().startOf('month').format('d');
    let endDay =this.props.date.clone().endOf('month').format('D');
    let blanks = [];
    for (let i = 0; i < Number(startDay); i++) {
      blanks.push(
        <TabelData keys={-i} day={""} events={0} currDate={this.props.date} styles={"calendar-day"}/>

      );
    }
    let daysInMonth = [];
    for (let i = 1; i <= Number(endDay); i++) {
      daysInMonth.push(
        <TabelData keys={i} 
        day={i} 
        events={this.events(i)}
        currDate={this.props.date} 
        styles={this.props.date.clone().format('D')==i?"selected-day":"calendar-day"}/>
      );
    }
    var totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];
    totalSlots.forEach((row, i) => {
        if (i % 7 !== 0) {
          cells.push(row); 
        } else {
          rows.push(cells); 
          cells = []; 
          cells.push(row);
        }
        if (i === totalSlots.length - 1) { 
          rows.push(cells);
        }
      });
      let daysinmonth = rows.map((d, i) => {
        return <tr>{d}</tr>;
      });
      return daysinmonth;
  }
  initDaysInWeek(){
    let startDay = this.props.date.clone().startOf('month').format('d');
    let currDay = this.props.date.clone().format('D');
    let startWeekDay = this.props.date.clone().startOf('week').format('D');
    let endWeekDay = this.props.date.clone().endOf('week').format('D');
    
    let blanks = []
    let daysInWeek = [];
      if(currDay<8-startDay && startDay!=0)
      {
        startWeekDay=1;
        for(let i = 0;i<startDay;i++){
          blanks.push(
            <TabelData keys={-i} events={0} day={""}  currDate={this.props.date} styles={"calendar-day"}/>
          )
        }
      }
      let dateOfLastDay = this.props.date.clone();
      dateOfLastDay.endOf('month');
      let lastDay = dateOfLastDay.clone().format('D');
      let numOfLastDay = dateOfLastDay.clone().format('d');
      let total;
    if(currDay>=lastDay-numOfLastDay){
      let lastBlanks=[];
      for(let i=Number(startWeekDay);i<=Number(lastDay);i++)
      {
        daysInWeek.push(
      <TabelData keys={i} 
      day={i} 
      currDate={this.props.date} 
      events={this.events(i)}
      styles={this.props.date.clone().format('D')==i?"selected-day":"calendar-day"}/>
        );
      }
      for(let j=daysInWeek.length;j<7;j++){
        lastBlanks.push(
          <TabelData keys={-j} events={0} day={""}  currDate={this.props.date} styles={"calendar-day"}/>
        )
      }
      total = [...blanks,...daysInWeek,...lastBlanks];
    }else{
        for(let i = Number(startWeekDay);i<=Number(endWeekDay);i++){
          daysInWeek.push(
        <TabelData keys={i} 
        day={i} 
        events={this.events(i)} 
        currDate={this.props.date} 
        styles={this.props.date.clone().format('D')==i?"selected-day":"calendar-day"}/>
          );
        }
        total = [...blanks,...daysInWeek];
      }
        let tmp = <tr>{total}</tr>
        return tmp;
  }
  render(){
    return (
    <div>
        <table>
            <thead className="tbl-head">
            <tr>
                <th>S</th>
                <th>M</th>
                <th>T</th>
                <th>W</th>
                <th>T</th>
                <th>F</th>
                <th>S</th>
                </tr>
            </thead>
            <tbody onClick={this.props.handleTdClick}>
               {this.props.mode==="month"? this.initDaysInMonth():this.initDaysInWeek()}
            </tbody>
        </table>
    </div>
  );
}
}
export default Calendar;