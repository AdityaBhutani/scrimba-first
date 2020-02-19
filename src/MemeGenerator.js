import React, { Component } from 'react';

class MemeGenerator extends Component{
	constructor(){
		super();
		this.state = {
			topText: '',
			bottomText: '',
			randomImage: 'http://i.imgflip.com/1bij.jpg',
			allMemeImgs: []
		}
		//dont require to be binded as these functions are now defined as arrow functions which dont need binding
		// this.handleChange = this.handleChange.bind(this);
		// this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = (event) =>{
		const {name, value} = event.target
		this.setState({
			[name]: value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const randomNumber = Math.floor((Math.random() * this.state.allMemeImgs.length) + 0);
		const randomMemeImage = this.state.allMemeImgs[randomNumber].url
		this.setState({ randomImage: randomMemeImage })
	}

	componentDidMount(){
		fetch('https://api.imgflip.com/get_memes')
			.then(response => response.json())
			.then(response => 
				this.setState({
					allMemeImgs: response.data.memes
				})
			);
	}

	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<input 
						type='text' 
						name='topText'  
						placeholder='topText'
						value={this.state.topText}
						onChange = {this.handleChange}
					/>
					<input 
						type='text' 
						name='bottomText' 
						placeholder='bottomText' 
						value={this.state.bottomText}
						onChange = {this.handleChange}
					/>

					<button>Generate</button>
				</form>
				<div>
					<img src={this.state.randomImage} alt=''/>
					<h2>{this.state.topText}</h2>
					<h2>{this.state.bottomText}</h2>
				</div>
			</div>
		)
	}
}

export default MemeGenerator;