import { useState, useEffect } from 'react'
import styles from '../styles/reviews.module.sass'
import AddReview from '../components/AddReview'
import { IoStar } from 'react-icons/io5'
import Review from './Review'
import axios from 'axios'
import IntText from './IntText'

const Reviews = () => {
	const [reviewData, setReviewData] = useState([])
	useEffect(() => {
		axios
			.get('https://obscure-beach-21124.herokuapp.com/reviews/')
			.then((result) => {
				setReviewData(
					result.data.filter((review) => {
						return review.status === 'одобрено'
					})
				)
			})
	}, [])

	const numberOfReviews = reviewData.length
	const ratings = reviewData.map((review) => review.rating)
	const averageRating =
		Math.round(
			(ratings.reduce((a, b) => a + b, 0) / numberOfReviews) * 10
		) / 10

	const ratingsByValue = {
		5: ratings.filter((rating) => rating === 5),
		4: ratings.filter((rating) => rating === 4),
		3: ratings.filter((rating) => rating === 3),
		2: ratings.filter((rating) => rating === 2),
		1: ratings.filter((rating) => rating === 1),
	}
	const ratingKeys = Object.keys(ratingsByValue)

	console.log(ratingsByValue)

	const [formOpen, setFormOpen] = useState(false)
	const toggleForm = () => {
		setFormOpen(!formOpen)
	}

	return (
		<>
			<div className={styles.stars}>
				<div>
					<IoStar className='react-icons' size={16} />
					<IoStar className='react-icons' size={16} />
					<IoStar className='react-icons' size={16} />
					<IoStar className='react-icons' size={16} />
					<IoStar className='react-icons' size={16} />
					<div>
						{!averageRating ? '0.0' : averageRating} (
						{numberOfReviews} <IntText ru='отзывов' uz='ta sharh' />
						)
					</div>
				</div>

				<div className={styles.writeReview}>
					<button onClick={toggleForm}>
						<IntText
							ru={formOpen ? 'Закрыть форму' : 'Оставить отзыв'}
							uz={formOpen ? 'Yopish' : 'Sharh qoldirish'}
						/>
					</button>
				</div>
			</div>
			<div className={styles.scale}>
				{ratingKeys
					.sort((a, b) => b - a)
					.map((key) => {
						return (
							<div className={styles.progress}>
								<span>
									{key}{' '}
									<IoStar className='react-icons' size={14} />
								</span>
								<progress
									value={ratingsByValue[key].length}
									max={numberOfReviews}></progress>
								<span>{ratingsByValue[key].length}</span>
							</div>
						)
					})}
			</div>
			{formOpen && <AddReview />}
			<div className={styles.reviews}>
				{reviewData.map((review) => {
					return <Review review={review} />
				})}
			</div>
		</>
	)
}

export default Reviews
