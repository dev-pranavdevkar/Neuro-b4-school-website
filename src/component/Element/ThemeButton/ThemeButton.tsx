import React,{Component} from 'react';			

export default class ThemeButton extends Component{
	render(){
		return(
			<>
				<a href="/" rel="noopener noreferrer" target="_blank" className="bt-buy-now theme-btn"><i className="fa fa-whatsapp"/><span>Whatsapp Us</span></a>
				<a href="/" rel="noopener noreferrer" target="_blank" className="bt-support-now theme-btn"><i className="fa fa-phone"></i><span>Support</span></a>
			</>
		)
	}	
}