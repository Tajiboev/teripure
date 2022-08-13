import React from 'react'
import styles from '../styles/checkout.module.sass'
import ProductImage from '../images/image3.png'
import { useStoreState } from 'easy-peasy'

const BagSummary = () => {
	let itemsInBag = useStoreState((state) => state.itemsInBag)
	let price = useStoreState((state) => state.price)

	return (
		<div className={styles.card}>
			<h4>Итог заказа</h4>
			<div className={styles.withImage}>
				<div className={styles.image}>
					<img
						src={ProductImage}
						alt='product'
						className={'img-responsive'}
					/>
				</div>
				<div className={styles.info}>
					<p>Teripure Maximum</p>
					<p>
						Количество: <span>{itemsInBag}</span>
					</p>
				</div>
				<p className={styles.price}>
					<b>{price} сум</b>
				</p>
			</div>
			<div className={styles.subtotal}>
				<div className='d-flex'>
					<p>Сумма:</p>
					<p>{price * itemsInBag} сум</p>
				</div>
				<div className='d-flex'>
					<p>Доставка:</p>
					<p>Оплачивается отдельно</p>
				</div>
			</div>
			<div className={styles.total}>
				<div className='d-flex'>
					<p>Общая сумма:</p>
					<p>{price * itemsInBag} сум</p>
				</div>
			</div>
		</div>
	)
}

export default BagSummary
