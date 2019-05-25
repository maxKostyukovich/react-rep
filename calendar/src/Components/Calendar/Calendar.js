import React from 'react';
import moment from 'moment'
import TabelData from './TableData/TabelData'
import './Calendar.css';

class Calendar extends React.Component {
  constructor(props){
    super(props);
    this.state={
        days:{}
    }
  }
  isEvent(date){
    let tmp="no";
    this.props.data.forEach((item,index)=>{
      if(moment(item.date).format('YYYYMD')===this.props.date.clone().date(date).format('YYYYMD')){
        tmp= "yes";
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
        <TabelData keys={-i} day={""} isEvent={false} currDate={this.props.date} styles={"calendar-day"}/>

      );
    }
    let daysInMonth = [];
    for (let i = 1; i <= Number(endDay); i++) {
      daysInMonth.push(
        <TabelData keys={i} 
        day={i} 
        isEvent={this.isEvent(i)}
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
            <TabelData keys={-i} isEvent={false} day={""}  currDate={this.props.date} styles={"calendar-day"}/>
          )
        }
      }
      let dateOfLastDay = this.props.date.clone();
      dateOfLastDay.endOf('month');
      let lastDay = dateOfLastDay.clone().format('D');
      let numOfLastDay = dateOfLastDay.clone().format('d');
    if(currDay>=lastDay-numOfLastDay){
      for(let i=Number(startWeekDay);i<=Number(lastDay);i++)
      {
        daysInWeek.push(
      <TabelData keys={i} 
      day={i} 
      currDate={this.props.date} 
      isEvent={this.isEvent(i)}
      styles={this.props.date.clone().format('D')==i?"selected-day":"calendar-day"}/>
        );
      }
    }else{
        for(let i = Number(startWeekDay);i<=Number(endWeekDay);i++){
          daysInWeek.push(
        <TabelData keys={i} 
        day={i} 
        isEvent={this.isEvent(i)} 
        currDate={this.props.date} 
        styles={this.props.date.clone().format('D')==i?"selected-day":"calendar-day"}/>
          );
        }
      }
        let total = [...blanks,...daysInWeek];
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