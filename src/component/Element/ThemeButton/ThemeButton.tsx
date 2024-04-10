// import React,{Component} from 'react';			

// export default class ThemeButton extends Component{
// 	render(){
// 		return(
// 			<>
// 				<a href="/" rel="noopener noreferrer" target="_blank" className="bt-buy-now theme-btn"><i className="fa fa-whatsapp"/><span>Whatsapp Us</span></a>
// 				<a href="/" rel="noopener noreferrer" target="_blank" className="bt-support-now theme-btn"><i className="fa fa-phone"></i><span>Support</span></a>
// 			</>
// 		)
// 	}	
// }

import React, { Component } from 'react';

interface ThemeButtonProps {
	branchData: {
		mobile_number: string;
		email: string;
		map_url: string;
		facebook_url: string;
		google_plus_url: string;
		linkedin_url: string;
		instagram_url: string;
	} | null;
}

export default class ThemeButton extends Component<ThemeButtonProps> {
	render() {
		const { branchData } = this.props;
		return (
			<>

				<a href={`http://wa.me/${branchData?.mobile_number || '13154021234'}`} rel="noopener noreferrer" target="_blank" className="bt-buy-now theme-btn"><i className="fa fa-whatsapp" /><span>Whatsapp Us</span></a>
				<a href={`tel:${branchData?.mobile_number || '13154021234'}`} rel="noopener noreferrer" target="_blank" className="bt-support-now theme-btn"><i className="fa fa-phone"></i><span>Support</span></a>


			

			</>
		);
	}
}
