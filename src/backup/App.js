import React, { Component } from 'react';
import logo from './logo.svg';
import morpion from './morpion.js';
import './App.css';

class App extends Component {
	val = console.log(morpion);
	render() {
		return (
			<div className="App">
				<Header value="React c'est super !" value2="0"/>
				<Content text="To get started, edit <code>src/App.js</code> and save to reload."/>
				<Footer/>
			</div>
		);
	}
}

class Header extends Component {
	onAlert() {
		alert(this.props.value);
	}
	render() {
		return (
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				{/* on reçoit plusieurs valeur */}
				<Title {...this.props} onClick={ () => this.onAlert()} /> 
			</header>
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

class Footer extends Component {
	render() {
		return (
			<div>Footer</div>
		);
	}
}

class Content extends Component {
	render() {
		return (
			<p className="App-intro">
			{this.props.text}
			</p>     
		);
	}
}

export default App;
