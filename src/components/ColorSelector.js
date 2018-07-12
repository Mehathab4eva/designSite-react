import React from 'react';

const Color1Selector = ({color, setColor}) => {

	return (
				<div>

						<input type="color" value={color} onChange={setColor} title={color}/>
				</div> 
			);
}

export default Color1Selector;