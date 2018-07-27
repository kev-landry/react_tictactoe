import React, { Component } from 'react';
import logo from './logo.svg';
import { Game } from './morpion.js';
import { Chart } from './chart';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Game/>
				<Chart/>
			</div>
		);
	}
}


// const Title = (props) => {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			titre: 'Mon titre alert !'
// 		}
// 	}
// }

class Title extends Component {
	i = 0;
	constructor(props) {
		super(props);
		this.state = {
			titre: 'Mon titre alert !'
		}
	}

	handleClick() {
		// let i = 0;
		this.i++;
		this.setState({
			titre: this.i
		})
		alert(this.state.titre);
	}

	render() {
		return (
			<h1 className="App-title" onClick={() => this.handleClick()}>{this.state.titre}</h1>
		)
	}
}

// const Title = (props) => {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			titre: 'Mon titre alert !'
// 		}
// 	}
// 	return <h1 className="App-title" onClick={props.onClick}>{props.value}</h1>
// }


export default App;
