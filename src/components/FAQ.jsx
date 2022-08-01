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

const FAQ = ({ items }) => {
	// let openUUID = items[0].uuid
	return (
		<div>
			<Accordion
				allowZeroExpanded
				allowMultipleExpanded
				// preExpanded={[openUUID]}
			>
				{items.map((item) => (
					<AccordionItem key={item.uuid} uuid={item.uuid}>
						<AccordionItemHeading>
							<AccordionItemButton className={styles.heading}>
								<div>
									<IoChevronForwardOutline size={12} />
									{item.heading}
								</div>
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel className={styles.content}>
							{item.content}
						</AccordionItemPanel>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	)
}

export default FAQ
