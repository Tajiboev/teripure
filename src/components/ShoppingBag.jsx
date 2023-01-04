import React from 'react'
import styles from '../styles/shoppingbag.module.sass'
import { useStoreState, useStoreActions } from 'easy-peasy'
import { IoCloseOutline, IoCheckmarkCircleOutline } from 'react-icons/io5'
import Image from '../images/image3.png'
import { Link } from 'react-router-dom'
import Text from './Text'

const ShoppingBag = () => {
	const show = useStoreState((state) => state.bagOpen)
	const itemsInBag = useStoreState((state) => state.itemsInBag)
	const price = useStoreState((state) => state.price)
	const totalAmount = useStoreState((state) => state.totalAmount)
	const toggleBag = useStoreActions((actions) => actions.toggleBag)
	const increase = useStoreActions((actions) => actions.incrementBag)
	const decrease = useStoreActions((actions) => actions.decrementBag)
	const clearBag = useStoreActions((actions) => actions.clearBag)

	let classes = styles.wrapper
	if (!show) {
		classes += ' '
		classes += styles.hidden
	}
	return (
		<aside className={classes}>
			<section>
				<div className={'d-flex ' + styles.text}>
					<p>
						<Text ru='Корзина' uz='Savat' />
					</p>
					<button className='d-flex' onClick={toggleBag}>
						<IoCloseOutline className='react-icons' size={20} />
					</button>
				</div>
				<div className={styles.cardSaved}>
					<IoCheckmarkCircleOutline
						className='react-icons'
						size={16}></IoCheckmarkCircleOutline>
					<p>
						<Text
							ru='Ваш выбор сохранён!'
							uz='Sizning tanlovingiz saqlandi!'
						/>
					</p>
				</div>
			</section>
			<section>
				<div className={styles.product}>
					<button onClick={clearBag} className={styles.clearBtn}>
						<IoCloseOutline className='react-icons' size={20} />
					</button>
					<div className={styles.imageWrapper}>
						<img
							className='img-responsive'
							src={Image}
							alt='product'
						/>
					</div>
					<div>
						<p className={styles.price}>
							<b>
								{price} <Text ru='сум' uz="so'm" />
							</b>
						</p>
						<p className={styles.description}>TeriPure Maximum</p>
					</div>
					<div className={styles.counter}>
						<button onClick={decrease}>-</button>
						<span>{itemsInBag}</span>
						<button onClick={increase}>+</button>
					</div>
				</div>
			</section>
			<section className={'d-flex ' + styles.bottom}>
				<div className={'d-flex ' + styles.priceCalculator}>
					<p>
						<Text ru='Общая сумма:' uz='Umumiy narxi:'></Text>
					</p>
					<p>
						<b>
							{totalAmount} <Text ru='сум' uz="so'm" />
						</b>
					</p>
				</div>
				<div className={'d-flex ' + styles.buttons}>
					<Link to='/checkout' onClick={toggleBag}>
						<Text ru='Заказать' uz='Buyurtma berish' />
					</Link>
				</div>
			</section>
		</aside>
	)
}

export default ShoppingBag
