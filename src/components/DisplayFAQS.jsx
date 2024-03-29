import React from 'react'
import { faqs } from './faqdata'
import Accordion from 'react-bootstrap/Accordion'
import Text from './Text'

const FAQS = () => {
	const categories = [...new Set(faqs.map((faq) => faq.category.id))]
	return (
		<div>
			{categories.map((category, c) => {
				const relevantFAQS = faqs.filter((faq) => {
					return faq.category.id === category
				})
				const cat = faqs.find(
					(element) => element.category.id === category
				)
				return (
					<>
						<br />
						<h5>
							<b>
								<Text
									ru={cat.category.ru}
									uz={cat.category.uz}
								/>
							</b>
						</h5>
						{relevantFAQS.map((faq, i) => {
							return (
								<Accordion defaultActiveKey='0'>
									<Accordion.Item
										eventKey={`${c}${i}`}
										style={{ 'margin-bottom': '4px' }}>
										<Accordion.Header>
											<Text
												ru={faq.heading.ru}
												uz={faq.heading.uz}
											/>
										</Accordion.Header>
										<Accordion.Body>
											<Text
												ru={faq.content.ru}
												uz={faq.content.uz}
											/>
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
