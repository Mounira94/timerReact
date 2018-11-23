import React, { Component } from 'react';
class Text extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <main className="main">
                <div className="time-desc">
                    <span className="time-text">Hour </span>
                    <span className="time-text">Minute </span>
                    <span className="time-text">Second</span>
                </div>
                <div className="time-btn" >
                    <button className="btn" onClick={this.props.startStopTime}>{this.props.btnName?'Stop':'Start'}</button>
                    <button className="btn" onClick={this.props.resetTime}>Reset</button>
                </div>
            </main>

        )
    }
}
export default Text;