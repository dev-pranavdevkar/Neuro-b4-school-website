import React,{Fragment,Component} from 'react';
import Header from '@/component/Layout/Header';
import Footer from '@/component/Layout/Footer';
import PageTitle from '@/component/Layout/PageTitle';
import FilterTab from '@/component/Element/FilterTab';

class GalleryFilter extends Component{
	render(){
		return(
			<Fragment>
				<Header />
				<div className="page-content">
					<PageTitle  motherMenu="Gallery Filter"  activeMenu="Gallery Filter" />
					<div className="content-block">
						<FilterTab />
					</div>
				</div>	
				<Footer />
			</Fragment>
		)
	}
}
export default GalleryFilter;