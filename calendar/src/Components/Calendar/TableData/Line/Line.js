import React from 'react'
import './Line.css'

class Line extends React.Component{

    showLines(){
        let result;
        if(this.props.events===0){
            result='';
        }
        if(this.props.events===1){
            result=<div className={"line"} style={{width:'24px'}}></div>
        }
        if(this.props.events===2){
            result=<><div className={"line"} style={{width:'10px'}}></div><div className={"line"} style={{width:'10px'}}></div></>
        }
        if(this.props.events>2){
            result=<><div className={"line"} style={{width:'6px'}}></div><div className={"line"} style={{width:'6px'}}></div><div className={"line"} style={{width:'6px'}}></div></>
        }
        return result;
    }
    render(){
        return(
            <div className={"w"}>
                <div className={"flex"}>
                    {this.showLines()}
                </div>
            </div>
        );
    }
}

export default Line;