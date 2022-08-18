import React from 'react'
import { faqs } from './faqdata'
import Accordion from 'react-bootstrap/Accordion'

const FAQS = () => {
	const categories = [...new Set(faqs.map((faq) => faq.category))]
	return (
		<div>
			{categories.map((category, c) => {
				const relevantFAQS = faqs.filter((faq) => {
					return faq.category === category
				})
				return (
					<>
						<br />
						<h5>
							<b>{category}</b>
						</h5>
						{relevantFAQS.map((faq, i) => {
							return (
								<Accordion defaultActiveKey='0'>
									<Accordion.Item eventKey={`${c}${i}`}>
										<Accordion.Header>
											{faq.heading}
										</Accordion.Header>
										<Accordion.Body>
											{faq.content}
										</Accordion.Body>
									</Accordion.Item>
								</Accordion>
							)
						})}
					</>
				)
			})}
		</div>
	)
}

export default FAQS
