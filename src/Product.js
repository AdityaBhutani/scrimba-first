import React, { Component } from 'react';

class Product extends Component{
	render() {
		return(
			<div>
				<p>Name: {this.props.product.name}</p>
				<p>Price: {this.props.product.price}</p>
				<p>Description: {this.props.product.description}</p>
				<hr />
			</div>
		)
	}
}

export default Product;