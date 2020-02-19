// // import React, { Component } from 'react';
// // import "./App.css"

// // class App extends Component{
// // 	render() {
// // 		return (
// // 			<div className = "App">
// // 				<div className = "Tasks">
// // 					<input type = "checkbox" name = "Task1" value = "Task1" /> 
// // 					<span>Task 1</span> <br/>
// // 				</div>
// // 				<div className = "Tasks">
// // 					<input className = "Tasks" type = "checkbox" name = "Task2" value = "Task2" /> 
// // 					<span>Task 2</span> <br/>
// // 				</div>
// // 				<div className = "Tasks">
// // 					<input className = "Tasks" type = "checkbox" name = "Task3" value = "Task3" /> 
// // 					<span>Task 3</span> <br/>
// // 				</div>
// // 				<div className = "Tasks">
// // 					<input className = "Tasks" type = "checkbox" name = "Task4" value = "Task4" /> 
// // 					<span>Task 4</span>
// // 				</div>
// // 			</div>
// // 		)
// // 	}
// // }

// // export default App;

// =====================CONTACT CARD===============================================

// import React, { Component } from 'react';
// import ContactCard from './ContactCard.js'

// class App extends Component{
// 	render(){
// 		return (
// 			<div>
// 				<div className = "contacts">
// 					< ContactCard 
// 					contact = {
// 						{name: "Blackie", 
// 						imageUrl: "http://placekitten.com/300/200",
// 						phone: "+91-0",
// 						email: "blackie_billi@gmail.com"}
// 					}/>

// 					< ContactCard 
// 					contact = {
// 						{name: "Multi", 
// 						imageUrl: "https://media.nga.gov/iiif/public/objects/1/0/0/5/1005-primary-0-nativeres.ptif/full/!440,400/0/default.jpg",
// 						phone: "+91-911777771",
// 						email: "multi@gmail.com"}
// 					}/>

// 					< ContactCard 
// 					contact = {
// 						{name: "Whita",
// 						imageUrl: "https://www.greekmythology.com/images/mythology/heracles_134.jpg",
// 						phone: "+91-9111199999911",
// 						email: "whita_billa@gmail.com"}
// 					}/>

// 					< ContactCard 
// 					contact = {
// 						{name: "Kaalu", 
// 						imageUrl: "http://placekitten.com/200/100",
// 						phone: "91-9100000000000",
// 						email: "kaalu_kutta@gmail.com"}
// 					}/>

// 					< ContactCard 
// 					contact = {
// 						{name: "Pillu", 
// 						imageUrl: "http://placekitten.com/400/300",
// 						phone: "+91-911123123111",
// 						email: "pillu_pyaara@gmail.com"}
// 					}/>
// 				</div>
// 			</div>
// 		)
// 	}
// }

// export default App;

// =====================Jokes with Json Data===============================================

// import React, { Component } from 'react';
// import Joke from './Joke.js'
// import jokesData from './jokesData.js'

// class App extends Component {
// 	render(){
// 		const jokeComponents = jokesData.map(joke_data => 
// 			<Joke key = {joke_data.id} joke = {{question: joke_data.question, punchline: joke_data.punchLine}} />
// 		)
// 		return(
// 			<div className = "jokes">
// 				{ jokeComponents }
// 			</div>
// 		)
// 	}
// }

// export default App;

// =====================Products With Json Data===============================================
// import React, { Component } from 'react';
// import Product from './Product';
// import productsData from './vschoolProducts.js'

// class App extends Component{
// 	render(){
// 		const productComponents = productsData.map(function(product_data){
// 			return(
// 				<Product product = {{name: product_data.name, price: product_data.price, description: product_data.description}} />
// 			)
// 		})
// 		return(
// 			<div>
// 				{ productComponents }
// 			</div>
// 		)
// 	}
// }

// export default App;

// import React from 'react';
// import TodoItem from './TodoItem'

// import todosData from './todosData';

// class App extends React.Component{
// 	constructor(){
// 		super();
// 		this.state = {
// 			todos: todosData
// 		}
// 		this.handleChange = this.handleChange.bind(this)
// 	}

// 	handleChange(id){
// 		console.log('asdasd',id);
// 		this.setState(prevState => {
// 		const updatedTodoComponents = prevState.todos.map(todoData => {
// 			if (todoData.id == id){
// 				todoData.completed = !todoData.completed
// 			}
// 			return todoData
// 		})
// 		return {
// 			todos:	updatedTodoComponents
// 		}
// 		})
// 	}

// 	render(){
// 		const todoComponents = this.state.todos.map(todoData => 
// 			<TodoItem key = { todoData.id } todo = { todoData } handleChange = {this.handleChange}/>
// 		)
// 		return(
// 			<div className = "App">
// 				{ todoComponents }
// 			</div>
// 		)
// 	}
// }

// export default App;

// ================================== TODO COMPLETED ==================================
// import React from 'react'
// import TodoItem from './TodoItem'
// import todosData from './todosData'

// class App extends React.Component{
// 	constructor(){
// 		super();
// 		this.state = {
// 			todos: todosData
// 		}
// 		this.handleChange = this.handleChange.bind(this)
// 	}

// 	handleChange(id){
// 		this.setState(function(prevState){
// 			const updatedTodoComponents = prevState.todos.map(function(todoData){
// 				if(todoData.id === id){
// 					todoData.completed = !todoData.completed
// 				}
// 				return todoData
// 			})
// 			return {
// 				todos: updatedTodoComponents
// 			}
// 		})
		
// 	}

// 	render(){
// 		const todoComponents = this.state.todos.map(todoData => 
// 			<TodoItem key = {todoData.id} todo = {todoData} handleChange = {this.handleChange}/>
// 		)
// 		return(
// 			<div className = "App">
// 				{ todoComponents }
// 			</div>
// 		)
// 	}
// }

// export default App;

////// =========================Using componentDidMount and conditional rendering of component ============

// import React, {Component} from 'react'
// import Conditional from './Conditional.js'

// class App extends Component{
// 	constructor(){
// 		super()
// 		this.state = {
// 			isLoading: true
// 		}
// 	}

// 	componentDidMount(){
// 		setTimeout(() => {
// 			this.setState({
// 				isLoading: false
// 			})
// 		}, 1500)
// 	}

// 	render(){
// 		return(
// 			<div>
// 				{this.state.isLoading ? 
// 				<h1>Loading...</h1> :
// 				<Conditional/>
// 				}
// 			</div>
// 			)
// 	}
// }

// export default App

// ====================== Luke Skywalker(star wars) Api Hit ======================

// import React, {Component} from 'react'

// class App extends Component{
	// state = {
	// 	isLoading: false,
	// 	character: {}
	// }
//	//constructor no longer mandatory for establishing state of component, i.e., state can be defined even outside consttuctor now
// 	//constructor(){
// 	//	super();
// 	//	this.state = {
// 	//		isLoading: false,
// 	//		character: {}
// 	//	}
// 	//}

// 	componentDidMount(){
// 		this.setState({isLoading: true})
// 		fetch("https://swapi.co/api/people/1")
// 			.then(response => response.json())
// 			.then(data => {
// 				this.setState({
// 					isLoading: false,
// 					character: data
// 				})
// 			});
// 	}

// 	render(){
		
// 		const text = this.state.isLoading ? "Loading" : this.state.character.name
// 		return(
// 			<div>
// 				<p>{text}</p>
// 			</div>
// 		)
// 	}
// }

// export default App;

// ============================== FORM ===============================================

// import React, {Component} from "react"

// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             firstName: "",
//             lastName: "",
//             age: "",
//             gender: "",
//             destination: "",
//             dietaryRestrictions: {
//                 isVegan: false,
//                 isKosher: false,
//                 isLactoseFree: false
//             }
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }
    
//     handleChange(event) {
//         const {name, value, type, checked} = event.target
//         type === "checkbox" ? 
//             this.setState(prevState => {
//                 return {
//                     dietaryRestrictions: {
//                         ...prevState.dietaryRestrictions, // all of the states from previous state, called object spread notations
//                         [name]: checked
//                     }
//                 }
//             })
//         :
//         this.setState({
//             [name]: value
//         }) 
//     }
    
//     render() {
//         return (
//             <main>
//                 <form>
//                     <input 
//                         name="firstName" 
//                         value={this.state.firstName} 
//                         onChange={this.handleChange} 
//                         placeholder="First Name" 
//                     />
//                     <br />
                    
//                     <input 
//                         name="lastName" 
//                         value={this.state.lastName}
//                         onChange={this.handleChange} 
//                         placeholder="Last Name" 
//                     />
//                     <br />
                    
//                     <input 
//                         name="age" 
//                         value={this.state.age}
//                         onChange={this.handleChange} 
//                         placeholder="Age" 
//                     />
//                     <br />
                    
//                     <label>
//                         <input 
//                             type="radio" 
//                             name="gender"
//                             value="male"
//                             checked={this.state.gender === "male"}
//                             onChange={this.handleChange}
//                         /> Male
//                     </label>
                    
//                     <br />
                    
//                     <label>
//                         <input 
//                             type="radio" 
//                             name="gender"
//                             value="female"
//                             checked={this.state.gender === "female"}
//                             onChange={this.handleChange}
//                         /> Female
//                     </label>
                    
//                     <br />
                    
//                     <select 
//                         value={this.state.destination} 
//                         name="destination" 
//                         onChange={this.handleChange}
//                     >
//                         <option value="">-- Please Choose a destination --</option>
//                         <option value="germany">Germany</option>
//                         <option value="norway">Norway</option>
//                         <option value="north pole">North Pole</option>
//                         <option value="south pole">South Pole</option>
//                     </select>
                    
//                     <br />
                    
//                     <label>
//                         <input 
//                             type="checkbox"
//                             name="isVegan"
//                             onChange={this.handleChange}
//                             checked={this.state.dietaryRestrictions.isVegan}
//                         /> Vegan?
//                     </label>
//                     <br />
                    
//                     <label>
//                         <input 
//                             type="checkbox"
//                             name="isKosher"
//                             onChange={this.handleChange}
//                             checked={this.state.dietaryRestrictions.isKosher}
//                         /> Kosher?
//                     </label>
//                     <br />
                    
//                     <label>
//                         <input 
//                             type="checkbox"
//                             name="isLactoseFree"
//                             onChange={this.handleChange}
//                             checked={this.state.dietaryRestrictions.isLactoseFree}
//                         /> Lactose Free?
//                     </label>
//                     <br />
                    
//                     <button>Submit</button>
//                 </form>
//                 <hr />
//                 <h2>Entered information:</h2>
//                 <p>Your name: {this.state.firstName} {this.state.lastName}</p>
//                 <p>Your age: {this.state.age}</p>
//                 <p>Your gender: {this.state.gender.toUpperCase()}</p>
//                 <p>Your destination: {this.state.destination.toUpperCase()}</p>
//                 <p>
//                     Your dietary restrictions: 
//                     {this.state.dietaryRestrictions.isVegan ? 'Vegan' : 'Non-Vegan'}, 
//                     {this.state.dietaryRestrictions.isKosher ? 'Kosher' : 'Non-Kosher'}, 
//                     {this.state.dietaryRestrictions.isLactoseFree ? 'LactoseFree' : 'Non-LactoseFree'}
//                 </p>
//             </main>
//         )
//     }
// }

// export default App;

import React, {Component} from 'react';

import Header from './Header'
import MemeGenerator from './MemeGenerator'

class App extends Component{
	render(){
		return(
			<div>
				<Header />
				<MemeGenerator />
			</div>
		)
	}
}

export default App;