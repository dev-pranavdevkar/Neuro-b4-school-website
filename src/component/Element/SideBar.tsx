import React,{Fragment, useRef} from 'react';
import emailjs from 'emailjs-com';
import Link from 'next/link';
import { LightGallery } from '@/pages/classes-details';

const recent1 = '/images/blog/recent-blog/pic1.jpg';
const recent2 = '/images/blog/recent-blog/pic2.jpg';

const btnBlog = [
	{title:'Design'},{title:'User interface'},{title:'SEO'},{title:'WordPress'},{title:'Development'},{title:'Joomla'},
	{title:'Design'},{title:'User interface'},{title:'SEO'},{title:'WordPress'},{title:'Development'},{title:'Joomla'},
	{title:'Design'},{title:'User interface'},{title:'SEO'},{title:'WordPress'},{title:'Development'},{title:'Joomla'},
];
const SideBar = () =>{
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		//emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
		emailjs.sendForm('service_zubfdvh', 'template_iy1pb0b', e.target, 'user_FvNIKVJ7om2PphifhzMm2')
		  .then((result) => {
			  console.log(result.text);
		  }, (error) => {
			  console.log(error.text);
		  });
		  e.target.reset()
	};
	return(
		<Fragment>
			<div className="sticky-top">
				<div className="widget">
					<h5 className="widget-title">Search</h5>
					<div className="search-bx style-1">
						<form role="search" ref={form} onSubmit={sendEmail}>
							<div className="input-group">
								<input name="name" className="form-control" placeholder="Enter your keywords..." type="text" />
								<span className="input-group-btn">
									<button type="submit" className="fa fa-search text-primary"></button>
								</span> 
							</div>
						</form>
					</div>
				</div>
				<div className="widget recent-posts-entry">
					<h5 className="widget-title">Recent Posts</h5>
					<div className="widget-post-bx">
						<div className="widget-post clearfix">
							<div className="dlab-post-media"> <img src={recent1} width="200" height="143" alt="" /> </div>
							<div className="dlab-post-info">
								<div className="dlab-post-header">
									<h6 className="post-title"><Link href={"#"}>Reasons Why You Cannot Learn Kids Education Well.</Link></h6>
								</div>
								<div className="dlab-post-meta">
									<ul>
										<li className="post-author">By Jone</li>
										<li className="post-comment"><i className="fa fa-comments"></i> 28</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="widget-post clearfix">
							<div className="dlab-post-media"> <img src={recent2} width="200" height="143" alt="" /> </div>
							<div className="dlab-post-info">
								<div className="dlab-post-header">
									<h6 className="post-title"><Link href={"#"}>Small But Important Things To Observe In Kids.</Link></h6>
								</div>
								<div className="dlab-post-meta">
									<ul>
										<li className="post-author">By Jone</li>
										<li className="post-comment"><i className="fa fa-comments"></i> 28</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="widget widget_gallery gallery-grid-4">
					<h5 className="widget-title">Our services</h5>
					<ul id="lightgallery">
						<LightGallery />
					</ul>
				</div>
				<div className="widget widget_tag_cloud">
					<h5 className="widget-title">Tags</h5>
					<div className="tagcloud"> 
						{btnBlog.map((item,index)=>(
							<Link href={"#"} className="mr-1" key={index}>{item.title}</Link> 
						))}
					</div>
				</div>
				<div className="widget widget_archive">
					<h5 className="widget-title">Categories List</h5>
					<ul>
						<li><Link href={"#"}>aciform</Link></li>
						<li><Link href={"#"}>championship</Link></li>
						<li><Link href={"#"}>chastening</Link></li>
						<li><Link href={"#"}>clerkship</Link></li>
						<li><Link href={"#"}>disinclination</Link></li>
					</ul>
				</div>
			</div>
		</Fragment>
	)
}
export default SideBar;