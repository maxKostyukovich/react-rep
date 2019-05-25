import React from 'react';
import moment from 'moment'
import './TabelData.css';


class TabelData extends React.Component {  
  render(){
    return (
      <td key={this.props.keys} className={this.props.styles}>
          <div className="dot">
            {moment().format('YYYY-MM-D')==this.props.currDate.clone().date(this.props.day).format('YYYY-MM-D')?
            <img src="img/dot.png"/>:
            ''}
          </div>
          <div>{this.props.day}</div>
          {this.props.isEvent==="yes"?<hr size={"2px"} className="line"/>:''}
      </td>
  );
}
}
export default TabelData;