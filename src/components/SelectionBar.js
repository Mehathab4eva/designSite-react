import React from 'react';
import "./SelectionBar.css";
import ColorSelector from './ColorSelector';


const SelectionBar = ({color1, color2, direction, setColor1, setColor2, getCode, rotateGradient}) => {
	return (
			<div className='selectionBar'>
					<div className='getCode' onClick={getCode}>
						<h2>{'<'}getCode{'/>'}</h2>
						
					</div>
					<div className='selectionBar'>
						<ColorSelector color={color1} setColor={setColor1}/>
						<ColorSelector color={color2} setColor={setColor2}/>

						<img 
							className='rotate' 
							src="./export.png" 
							alt="rotate-gradient" 
							title="rotate-gradient" 
							value={direction+'deg'}
							onClick={rotateGradient}
							 />
							
					</div>
					
			</div>
		);
}


export default SelectionBar;