import React, {Component} from 'react';


//components and  containers
import Header from '../components/Header';
import SelectionBar from '../components/SelectionBar';
import CopyCode from '../components/CopyCode';

class App extends Component {
	constructor(){
		super()
		this.state = {
			color1: "#46a28d", // #000046 #000046
			color2: "#1CB5E0", // #1CB5E0
			direction: 0
		}
	}

	setColor1 = (event)=> this.setState({color1: event.target.value});
	setColor2 = (event)=> this.setState({color2: event.target.value});
	copyCode  = ()=> {
							
							let code 		= document.querySelector('.code').children[0].innerText;
							let temp		= document.createElement("input");
							
							// setting value and type attributes to temp
							temp.setAttribute('type','text');
							temp.setAttribute('value', code);

							//appending  temp to body
							document.querySelector('body').appendChild(temp);
							
							//selecting temp => selecting text of temp
							temp.select();

							//copy the selected text
							document.execCommand("copy");

							//removing temp 
							temp.remove();

						 };

	hideCode = (event)=> {
							let modal = document.querySelector('.modal');
							let close = document.querySelector('.close');
							if(event.target === modal || event.target === close)
									 {
									 	 modal.style.display = 'none';
									 }
							};				
	getCode	 = ()=> document.querySelector('.modal').style.display = 'block'; 

	rotateGradient = (gDirection)=> {
		gDirection = this.state.direction + 90;
		console.log(gDirection);
		gDirection>=360 ? gDirection= gDirection-360: gDirection= gDirection+0;
		this.setState({direction: gDirection})
		


	} ;

	render(){

		let	body = document.querySelector('body');
		body.style.background= `linear-gradient(${this.state.direction +'deg'}, ${this.state.color1}, ${this.state.color2})`; 

		return (
			<div>
					<Header />
					<SelectionBar 
						color1={this.state.color1} 
						color2={this.state.color2} 
						direction={this.state.direction} 
						setColor1={this.setColor1}
						setColor2={this.setColor2}
						getCode={this.getCode}
						rotateGradient={this.rotateGradient}
						/>
						<footer><h2>#Mehathab Shaik | 2018</h2></footer>
					<CopyCode state={this.state} copyCode={this.copyCode} hideCode={this.hideCode}  />
			</div>
			)
	}
}

export default App;