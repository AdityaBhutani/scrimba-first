import React, { Component } from 'react';
import './Joke.css';

class Joke extends Component{
	render(){
		return (
			<div className = "joke">
				<h3 className = "question" style = {{display: this.props.joke.question ? 'block' : 'none'}}>{this.props.joke.question}</h3>
				<h3 style = {{ padding: 10 }}>Punchline: {this.props.joke.punchline}</h3>
			</div>
		)
	}
}

export default Joke;
