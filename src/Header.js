import React from 'react';

function Header(){
	const header = {
		height: 100
	}
	return(
		<header>
			<img 
				src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" 
				alt="Problem?" 
				style = {header}
			/>
		</header>
	)
}

export default Header;