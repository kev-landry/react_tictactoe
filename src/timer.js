import React, { Component } from 'react';
import mrEmitter from './emitter';

const TIMER = 5000;
const INTERVAL = 10;
let Subscription = null;

export class Timer extends Component {
    constructor(props){
        super(props);
        this.interval = null;
        this.state = {
            timer: TIMER
        };
    }

    componentWillMount() {
        Subscription = mrEmitter.addListener('timerReset', (data) => {
          this.reset();
          this.start();
        });
        Subscription = mrEmitter.addListener('gameIsOver', (data) => {
            this.stop();
        });
    }

    start(){
        this.interval =  setInterval(() => this.tick(), INTERVAL);
    }

    tick(){
        this.setState({
            timer: (this.state.timer - INTERVAL)
        });
        this.newTurn();
    }

    newTurn(){
        if (this.state.timer === 0) {
            mrEmitter.emit('timerOver', true);
            this.reset();
            this.start();
        }
    }

    stop(){
        clearInterval(this.interval);
    }
    
    reset(){
        this.stop();
        this.setState({
            timer: TIMER
        });
    }

    componentWillUnmount() {
        Subscription.remove()
    }

    render(){
        return(
            <div>
                <div className="timer">Timer : {this.state.timer / 1000}</div>
                {/* <button onClick={() => this.start()}>Start</button>
                <button onClick={() => this.reset()}>Reset Timer</button> */}
            </div>
        );
    }
}