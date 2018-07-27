import React, { Component } from 'react';
import {Timer} from './timer.js'; 
import mrEmitter from './emitter';
import Chart from './chart';
import StatMorpion from './stats-morpion';

let Subscription = null

function Square(props) {
    return (
      <div className="square" onClick={props.onClick}>
        {props.value}
      </div>
    );
  }
  
  class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
        console.log('board props =>', this.props);
    }

    componentWillMount() {

        Subscription = mrEmitter.addListener('timerOver', (data) => {
          this.handleClick();
        });
    }
  
    handleClick(i=null) {
        mrEmitter.emit('timerReset', true);
        const squares = this.state.squares.slice();
        if (StatMorpion.calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }
  
    renderSquare(i) {
        return (
            <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
            />
        );
    }

  
    componentWillUnmount() {
        Subscription.remove()
    }
    
    render() {
        const winner = StatMorpion.calculateWinner(this.state.squares);
        let status;
        if (winner) {
			status = 'Winner: ' + winner;
			mrEmitter.emit('gameIsOver', true);
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
  
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
  }
  
  export class Game extends Component {

    constructor(props) {
        super(props);
    }

    resetMorpion() {
        // this.setState({
        //     squares: Array(9).fill(null)
        // })
        console.log('reset Morpion !', this.props);
        // this.props.squares = Array(9).fill(null);

    }

    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board squares=""/>
          </div>
          <div className="game-info">
            <div><Timer/></div>
            <button onClick={() => this.props.onClick}>Reset Morpion</button>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  