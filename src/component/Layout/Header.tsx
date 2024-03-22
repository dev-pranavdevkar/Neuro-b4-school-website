import React, { Fragment, Component } from 'react';
import Link from 'next/link';
// import Image from 'next/image';

//images
import logo from '../images/logo.png'


class Header extends Component {
	// componentDidMount() {
	// 	// sidebar open/close
	// 	let Navicon = document.querySelector('.navicon');
	// 	let sidebarmenu = document.querySelector('.myNavbar ');

	// 	function toggleFunc() {
	// 		sidebarmenu.classList.toggle('show');
	// 		Navicon.classList.toggle('open');
	// 	}
	// 	Navicon.addEventListener('click', toggleFunc);
	// 	// Sidenav li open close
	// 	let navUl = [].slice.call(document.querySelectorAll('.navbar-nav > li'));
	// 	for (var y = 0; y < navUl.length; y++) {
	// 		navUl[y].addEventListener('click', function () { checkLi(this) });
	// 	}
	// 	function checkLi(current) {
	// 		navUl.forEach(el => (current !== el) ? el.classList.remove('open') : '');
	// 		setTimeout(() => {
	// 			current.classList.toggle('open');
	// 		}, 100);
	// 	}
	// }
	render() {
		return (
			<Fragment>
				<header className="site-header header mo-left">
					<div className="top-bar">
						<div className="container">
							<div className="row d-flex justify-content-between">
								<div className="dlab-topbar-left">
									<ul>
										<li><i className="fa fa-phone m-r5"></i> +1 (315) 402-1234</li>
										<li><i className="fa fa-map-marker m-r5"></i>
											28 Princeton Drive, Syosset,
											New York 11791</li>
									</ul>
								</div>
								<div className="dlab-topbar-right">
									<ul>

										<li><i className="fa fa-clock-o m-r5"></i> We Prepare Preschoolers For School</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					{/* main header */}
					<div className="sticky-header main-bar-wraper navbar-expand-lg">
						<div className="main-bar clearfix ">
							<div className="container clearfix">
								{/*  website logo */}
								<div className="logo-header mostion">
									{/* <Link href='/' className="dez-page"><img src='/images/logo.png' alt="" /></Link> */}
									<Link href='/' className="dez-page"><img src='/images/logo.png' className='logo-size-header' alt="" /></Link>
								</div>
								{/* nav toggle button */}
								<button className="navbar-toggler collapsed navicon justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
									<span></span>
									<span></span>
									<span></span>
								</button>
								{/*  main nav  */}
								<div className="header-nav navbar-collapse collapse myNavbar justify-content-end" id="navbarNavDropdown">
									<div className="logo-header mostion">
										<Link href='/' className="dez-page"><img src={''} alt="" /></Link>
									</div>
									<ul className="nav navbar-nav">
										<li className="active"><Link href={'/'}>Home
											{/* <i className="fa fa-chevron-down"></i> */}
										</Link>
											{/* <ul className="sub-menu">
												<li><Link href={"./"}>Home 1</Link></li>
												<li><Link href={"/index-2"}>Home 2</Link></li>
											</ul> */}
										</li>
										<li><Link href={'/about'}>About
											{/* <i className="fa fa-chevron-down"></i> */}
										</Link>
											{/* <ul className="sub-menu">
												<li><Link href={"/about-1"}>About Us 1</Link></li>
												<li><Link href={"/about-2"}>About Us 2</Link></li>
											</ul> */}
										</li>
										{/* <li><Link href={'#'}>Classes <i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu">
												<li><Link href={"/classes"}>Classes</Link></li>
												<li><Link href={"/classes-details"}>Classes Details</Link></li>
											</ul>
										</li> */}
										<li><Link href={'/activities'}>Activities
											{/* <i className="fa fa-chevron-down"></i> */}
										</Link>
											{/* <ul className="sub-menu">
												<li><Link href={"/teachers"}>Teachers</Link></li>
												<li><Link href={"/teachers-details"}>Teachers Details</Link></li>
											</ul> */}
										</li>
										<li><Link href={'/locations'}>Locations
											{/* <i className="fa fa-chevron-down"></i> */}
										</Link>
											{/* <ul className="sub-menu">
												<li><Link href={"/coming-soon"}>Comign Soon</Link></li>
												<li><Link href={"/faqs"}>Faqs</Link></li>
												<li><Link href={"/event"}>Event</Link></li>
												<li><Link href={"/event-details"}>Event Details</Link></li>
												<li><Link href={"/error-404"}>Error 404</Link></li>
											</ul> */}
										</li>
										<li><Link href={'/shop'}>Shop
											{/* <i className="fa fa-chevron-down"></i> */}
										</Link>
											{/* <ul className="sub-menu">
												<li><Link href={"/blog-standard"}>Standard</Link></li>
												<li><Link href={"/blog-classic-grid"}>Classic</Link></li>
												<li><Link href={"/blog-details"}>Blog Details</Link></li>
											</ul> */}
										</li>
										<li><Link href={'/news'}>News
											{/* <i className="fa fa-chevron-down"></i> */}
										</Link>
											{/* <ul className="sub-menu">
												<li><Link href={"/gallery"}>Gallery Grid</Link></li>
												<li><Link href={"/gallery-masonary"}>Gallery Masonary</Link></li>
												<li><Link href={"/gallery-filter"}>Gallery Tiles Filter</Link></li>
											</ul> */}
										</li>
										<li><Link href={'/connect'}>Connect
											{/* <i className="fa fa-chevron-down"></i> */}
										</Link>
											{/* <ul className="sub-menu">
												<li><Link href={"/gallery"}>Gallery Grid</Link></li>
												<li><Link href={"/gallery-masonary"}>Gallery Masonary</Link></li>
												<li><Link href={"/gallery-filter"}>Gallery Tiles Filter</Link></li>
											</ul> */}
										</li>
										<li><Link href={"/contact-us"}>Contact</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					{/* Main header END */}
				</header>
			</Fragment>
		)
	}
}
export default Header;