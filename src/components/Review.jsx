import React from 'react'
import { IoStar } from 'react-icons/io5'
import styles from '../styles/reviews.module.sass'

const Review = ({ review }) => {
	return (
		<div className={styles.review}>
			<div className='d-flex'>
				<p className={styles.author}>
					<b>{review.author}</b>
				</p>
				<p>
					{[...Array(review.rating)].map((i) => {
						return <IoStar size={14} />
					})}
				</p>
			</div>
			<p>
				<i>"{review.text}"</i>
			</p>
		</div>
	)
}

export default Review
