import React from 'react'
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion'

import { IoChevronForwardOutline } from 'react-icons/io5'
import styles from '../styles/faq.module.sass'
import Text from './Text'

const FAQ = ({ faqData }) => {
	return (
		<div>
			<Accordion
				allowZeroExpanded
				allowMultipleExpanded
				// preExpanded={[openUUID]}
			>
				<AccordionItem
					key={faqData.id}
					uuid={faqData.id}
					className={styles.faq}>
					<AccordionItemHeading>
						<AccordionItemButton className={styles.heading}>
							<div>
								<IoChevronForwardOutline size={12} />
								<Text ru={faqData.heading}></Text>
							</div>
						</AccordionItemButton>
					</AccordionItemHeading>
					<AccordionItemPanel className={styles.content}>
						{faqData.content}
					</AccordionItemPanel>
				</AccordionItem>
			</Accordion>
		</div>
	)
}

export default FAQ
