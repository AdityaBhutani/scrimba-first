import React, { Component } from 'react';
import Joke from './Joke.js'
import jokesData from './jokesData.js'

class App extends Component {
	render(){
		const jokeComponents = jokesData.map(joke_data => 
			<Joke key = {joke_data.id} joke = {{question: joke_data.question, punchline: joke_data.punchLine}} />
		)
		return(
			<div className = "jokes">
				{ jokeComponents }
			</div>
		)
	}
}

export default App;