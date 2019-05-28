import React from 'react';
import './EventItem.css';


class EventItem extends React.Component {  
  render(){
    return (
      <div className={"item"}>
          <p className={"name"}>{this.props.data.name}</p>
          <p className="time">{this.props.data.time}</p>
          <p className="body">{this.props.data.body}</p>
      </div>
  );
}
}

export default EventItem;