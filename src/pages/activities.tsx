import React,{Fragment,Component} from 'react';
import Header from '@/component/Layout/Header';
import Footer from '@/component/Layout/Footer';
import PageTitle from '@/component/Layout/PageTitle';
import FilterTab from '@/component/Element/FilterTab';

class Activities extends Component{
	render(){
		return(
			<Fragment>
				<Header />
				<div className="page-content">
					<PageTitle  motherMenu="Activities"  activeMenu="Activities" />
					<div className="content-block">
						<FilterTab />
					</div>
				</div>	
				<Footer />
			</Fragment>
		)
	}
}
export default Activities;