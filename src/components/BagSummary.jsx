import React from 'react'
import styles from '../styles/checkout.module.sass'
import ProductImage from '../images/image3.png'
import { useStoreState } from 'easy-peasy'
import Text from './Text'

const BagSummary = () => {
	let itemsInBag = useStoreState((state) => state.itemsInBag)
	let price = useStoreState((state) => state.price)

	return (
		<div className={styles.card}>
			<h4>
				<Text ru='Итог заказа' uz='Buyurtma'></Text>
			</h4>
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
						<Text ru='Количество' uz='Umumiy soni'></Text>:{' '}
						<span>{itemsInBag}</span>
					</p>
				</div>
				<p className={styles.price}>
					<b>
						{price} <Text ru='сум' uz="so'm"></Text>
					</b>
				</p>
			</div>
			<div className={styles.subtotal}>
				<div className='d-flex'>
					<p>
						<Text ru='Сумма' uz="Ja'mi"></Text>:
					</p>
					<p>
						{price * itemsInBag} <Text ru='сум' uz="so'm"></Text>
					</p>
				</div>
				<div className='d-flex'>
					<p>
						<Text ru='Доставка' uz='Yetkazib berish'></Text>:
					</p>
					<p>
						<Text
							ru='Оплачивается отдельно'
							uz="Aloxida to'lanadi"></Text>
					</p>
				</div>
			</div>
			<div className={styles.total}>
				<div className='d-flex'>
					<p>
						<Text ru='Общая сумма' uz='Yakuniy summa'></Text>:
					</p>
					<p>
						{price * itemsInBag} <Text ru='сум' uz="so'm"></Text>
					</p>
				</div>
			</div>
		</div>
	)
}

export default BagSummary
