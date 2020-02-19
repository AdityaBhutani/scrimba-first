import React, { Component } from 'react';
import './ContactCard.css'

class ContactCard extends Component{
	render(){
		return(
			<div className = "contact-card">
				<img src={this.props.contact.imageUrl} />
				<h3>{this.props.contact.name}</h3>
				<p>Phone: {this.props.contact.phone}</p>
				<p>Email: {this.props.contact.email}</p>
			</div>
		)
	}

}

export default ContactCard;