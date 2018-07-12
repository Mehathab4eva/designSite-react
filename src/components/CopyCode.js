import React from 'react';
import './CopyCode.css';

const CopyCode = ({state, copyCode, hideCode})=>{
	let code1 = `background: ${state.color2};  /* fallback for old browsers */`;
	let code2 = `background: -webkit-linear-gradient(${state.direction+'deg'}, ${state.color1}, ${state.color2});  /* Chrome 10-25, Safari 5.1-6 */`;
	let code3 =	`background: linear-gradient(${state.direction+'deg'}, ${state.color1}, ${state.color2}); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */`;






	return (
		<div className='modal' onClick={hideCode}>
				<div className="modalContent">
						
						<div className='code'>
							<p >{code1}<br/>{code2}<br/>{code3}</p>
						</div>

						<div className="modalHeader">
							<button className='copyCode' onClick={copyCode}>{`<`}copyCode{`/>`}</button>
							<span className="close">&times;</span>
						</div>
				</div>

		</div>
		);
}

export default CopyCode;