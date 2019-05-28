import React from 'react';
import moment from 'moment'
import Line from './Line/Line'
import './TabelData.css';


class TabelData extends React.Component {  
  render(){
    return (
      <td key={this.props.keys} className={"td-wrapper"} >
          <div className={this.props.styles}>
          <div className="dot">
            {moment().format('YYYY-MM-D')==this.props.currDate.clone().date(this.props.day).format('YYYY-MM-D')?
            <img src="img/dot.png"/>:
            ''}
          </div>
          <div>{this.props.day}</div>
          <Line events={this.props.events}/>
          </div>
      </td>
  );
}
}
export default TabelData;