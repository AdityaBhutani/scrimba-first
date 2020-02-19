import React, { Component } from 'react';
import Product from './Product';
import productsData from './vschoolProducts.js'

class App extends Component{
	render(){
		const productComponents = productsData.map(function(product_data){
			return(
				<Product product = {{name: product_data.name, price: product_data.price, description: product_data.description}} />
			)
		})
		return(
			<div>
				{ productComponents }
			</div>
		)
	}
}

export default App;