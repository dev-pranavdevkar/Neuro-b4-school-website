import React from 'react'
import Link from 'next/link'
const TextBlog =({title,info})=>{
	return(
		<div className="icon-content">
			<h5 className="dlab-tilte">{title}</h5>
			<p>{info}</p>
		</div>	
	)
}
export default function CoreCurriculum() {
    const CenterImg = '/images/about/about-2.jpg'
    const bnr1 = '/images/line2.png'
  return (
    <>
    	<>
        
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12">
						<div className="section-head text-center">
							<h2 className="head-title text-secondry">B4-School Core Curriculum</h2>
							<p>Fill your child&apos;s childhood with the joy of learning!</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6 col-sm-12">
						<div className="icon-bx-wraper right m-b30 about-iconbx">
							<div className="icon-bx-sm radius bg-pink"> <Link href={"#"} className="icon-cell"><i className="flaticon-bricks"></i></Link> </div>
							<TextBlog  title="English" info="Language is important for a child to effectively communicate their ideas and our curriculum is designed to effectively put their thoughts into words" />
						</div>
						<div className="icon-bx-wraper right m-b30 about-iconbx">
							<div className="icon-bx-sm radius bg-blue"> <Link href={"#"} className="icon-cell"><i className="flaticon-boy"></i></Link> </div>
							<TextBlog  title="Art" info="Our curriculum focuses on nurturing a child’s creativity and provide a canvas for it to blossom" />
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-12 m-b30 d-md-none d-lg-block d-sm-none">
						<img src={CenterImg} alt=""/>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-12">
						<div className="icon-bx-wraper left m-b30 about-iconbx">
							<div className="icon-bx-sm bg-green radius"> <Link href={"#"} className="icon-cell"><i className="flaticon-bus"></i></Link> </div>
							<TextBlog  title="Math" info="We believe Math is fundamental to learning and have designed our programs to lay this critical foundation starting from a young age" />
						</div>
						<div className="icon-bx-wraper left m-b30 about-iconbx">
							<div className="icon-bx-sm bg-orange radius"><Link href={"#"} className="icon-cell"><i className="flaticon-ice-cream"></i></Link> </div>
							<TextBlog  title="Physical Education" info="Our programs are designed to encourage kids to exercise and develop a healthy body along with the mind of our little ones" />
						</div>
					</div>
				</div>
			</div>
          
		</>
    </>
  )
}
