
import React from 'react'
import TodoItem from './TodoItem'
import todosData from './todosData'

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			todos: todosData
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(id){
		this.setState(function(prevState){
			const updatedTodoComponents = prevState.todos.map(function(todoData){
				if(todoData.id === id){
					todoData.completed = !todoData.completed
				}
				return todoData
			})
			return {
				todos: updatedTodoComponents
			}
		})
		
	}

	render(){
		const todoComponents = this.state.todos.map(todoData => 
			<TodoItem key = {todoData.id} todo = {todoData} handleChange = {this.handleChange}/>
		)
		return(
			<div className = "App">
				{ todoComponents }
			</div>
		)
	}
}

export default App;