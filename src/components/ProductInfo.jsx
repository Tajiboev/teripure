import { useState, useEffect } from 'react'
import { IoStar, IoStarHalf } from 'react-icons/io5'
import { useStoreActions } from 'easy-peasy'
import { toast } from 'react-toastify'
import styles from '../styles/product.module.sass'
import Text from './Text'
import axios from 'axios'

const ProductInfo = () => {
	const [count, setCount] = useState(1)
	const increase = () => {
		setCount(count + 1)
	}
	const decrease = () => {
		if (count === 1) return
		setCount(count - 1)
	}

	const toggleBag = useStoreActions((actions) => actions.toggleBag)

	const addAction = useStoreActions((actions) => actions.addToBag)
	const addToBag = () => {
		addAction(count)
		toggleBag()
		toast.success('Продукт был добавлен в корзину!')
	}

	const [reviewData, setReviewData] = useState([])

	useEffect(() => {
		axios
			.get('https://teripure-server.onrender.com/reviews')
			.then((result) => {
				setReviewData(
					result.data.filter((review) => {
						return review.isPublished
					})
				)
			})
			.catch((e) => {
				return
			})
	}, [])

	const numberOfReviews = reviewData.length || 8
	const ratings = reviewData.map((review) => review.rating)
	const averageRating =
		Math.round(
			(ratings.reduce((a, b) => a + b, 0) / numberOfReviews) * 10
		) / 10 || 4.7

	return (
		<div className={styles.withInfo}>
			<h3>
				<b>TeriPure Maximum</b>
			</h3>
			<div className={styles.stars}>
				<div>
					<IoStar className='react-icons' size={16} />
					<IoStar className='react-icons' size={16} />
					<IoStar className='react-icons' size={16} />
					<IoStar className='react-icons' size={16} />
					<IoStarHalf className='react-icons' size={16} />
				</div>
				<div>
					{averageRating} ({numberOfReviews})
				</div>
			</div>
			<div className={styles.description}>
				<p>
					<Text
						ru='Ватные диски содержащие салициловую кислоту и имеющие
					кератолический эффект'
						uz="Salitsil kislotasini o'z ichiga olgan va keratolik ta'sirga ega bo'lgan paxta yostig'chalari"
					/>
				</p>
			</div>
			<div className={styles.size}>
				<span>
					50 <Text ru='шт.' uz='dona' />
				</span>
			</div>
			<div className={styles.price}>
				<span>
					95,000 <Text ru='сум' uz="so'm" />
				</span>
			</div>
			<div className={styles.form}>
				<div className={styles.counter}>
					<button onClick={decrease}>-</button>
					<p>{count}</p>
					<button onClick={increase}>+</button>
				</div>
				<div className={styles.addToBag}>
					<button onClick={addToBag}>
						<Text ru='Добавить в корзину' uz="Savatga qo'shish" />
					</button>
				</div>
			</div>
		</div>
	)
}

export default ProductInfo
