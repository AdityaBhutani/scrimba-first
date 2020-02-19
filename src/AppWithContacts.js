// App using props 
import React, { Component } from 'react';
import ContactCard from './ContactCard.js'

class App extends Component{
	render(){
		return (
			<div>
				<div className = "contacts">
					< ContactCard 
					contact = {
						{name: "Blackie", 
						imageUrl: "http://placekitten.com/300/200",
						phone: "+91-0",
						email: "blackie_billi@gmail.com"}
					}/>

					< ContactCard 
					contact = {
						{name: "Multi", 
						imageUrl: "https://media.nga.gov/iiif/public/objects/1/0/0/5/1005-primary-0-nativeres.ptif/full/!440,400/0/default.jpg",
						phone: "+91-911777771",
						email: "multi@gmail.com"}
					}/>

					< ContactCard 
					contact = {
						{name: "Whita",
						imageUrl: "https://www.greekmythology.com/images/mythology/heracles_134.jpg",
						phone: "+91-9111199999911",
						email: "whita_billa@gmail.com"}
					}/>

					< ContactCard 
					contact = {
						{name: "Kaalu", 
						imageUrl: "http://placekitten.com/200/100",
						phone: "91-9100000000000",
						email: "kaalu_kutta@gmail.com"}
					}/>

					< ContactCard 
					contact = {
						{name: "Pillu", 
						imageUrl: "http://placekitten.com/400/300",
						phone: "+91-911123123111",
						email: "pillu_pyaara@gmail.com"}
					}/>
				</div>
			</div>
		)
	}
}

export default App;