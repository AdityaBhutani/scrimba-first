import React from 'react';

class TodoItem extends React.Component{
	render(){
		const completedStyle = {
			fontStyle: "italic",
			color: "#cdcdcd",
			textDecoration: "line-through",
			display: 'inline-block'
		}
		const incompletedStyle = {
			display: 'inline-block'
		}
		return(			
			<div className="TodoItem">
				<input 
					type = "checkbox" 
					checked = {this.props.todo.completed} 
					onChange = {() => this.props.handleChange(this.props.todo.id)}/>
				<p style={this.props.todo.completed ? completedStyle : incompletedStyle}> {this.props.todo.text} </p>
			</div>
		)
	}
}

export default TodoItem;

