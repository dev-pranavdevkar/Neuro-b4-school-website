import React,{useState} from 'react';
import Link from 'next/link';
import { Accordion,Card, } from 'react-bootstrap';
	
const defaultAccordion = [
	{
	  title: '500 new items in the toy collection',
	  text:
		'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.',
	},
	{
	  title: 'Throwing birthday parties is fun and easy',
	  text:
		'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.',
	},
	{
	  title: 'Multiple benefits from buying a membership',
	  text:
		'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.',
	},
	{
	  title: 'Fresh snacks and beverages for everyone',
	  text:
		'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.',
	},
	{
	  title: 'Over 1 000 visitors for the last year',
	  text:
		'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.',
	},
		
]	
const AccordionBlog = () => {
	const [activeDefault, setActiveDefault] = useState(0)
	return(
		<Accordion className="accordion faq-box"  defaultActiveKey="-1">
			{defaultAccordion.map((d, i) => (
			   <Card key={i}>
					<div className="card-header ">
						<Accordion.Toggle as={Link} href={"#"} variant="link"
							className={` ${ activeDefault === i ? '' : 'collapsed'}`}
							onClick={() =>
								setActiveDefault(activeDefault === i ? -1 : i)
							} eventKey={`${i}`}>	
							 {d.title}		
						</Accordion.Toggle>
					</div>
				<Accordion.Collapse eventKey={`${i}`} className="">
				  <Card.Body >
					{d.text}
					</Card.Body>
				</Accordion.Collapse>
			  </Card>
			))}
		</Accordion>	
	)
}
export {defaultAccordion};
export default AccordionBlog;