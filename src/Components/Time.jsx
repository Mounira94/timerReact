import React, { Component } from 'react';
class Time extends React.Component {
    constructor(props) {
        super(props)  
  }
    render() {

        return (<main className="main">
            <div className="time" >
                 {this.props.hours < 10 ? '0' + this.props.hours : this.props.hours}:{this.props.minutes < 10 ? '0' + this.props.minutes : this.props.minutes}:{this.props.seconds < 10 ? '0' + this.props.seconds : this.props.seconds}
            </div>
        </main>)
    }
}
export default Time;
