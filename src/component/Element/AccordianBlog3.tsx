import React,{useState} from 'react';
import Link from 'next/link';
import { Accordion,Card } from 'react-bootstrap';
import {defaultAccordion} from './AccordionBlog';

const AccordionBlog3 = () => {
	const [activeDefault, setActiveDefault] = useState(0)
	return(
		<Accordion className="accordion faq-box"  defaultActiveKey="0">
			{defaultAccordion.map((d, i) => (
			   <Card key={i}>
					<div className="card-header ">
						<Accordion.Toggle as={Link} variant="link" href={"#"}
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

export default AccordionBlog3;