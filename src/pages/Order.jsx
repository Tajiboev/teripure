import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Payment from './Payment'
import styles from '../styles/orders.module.sass'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'

const Order = () => {
	let { orderId } = useParams()

	const [orderInfo, setOrderInfo] = useState({})
	const [loading, setLoading] = useState(true)
	const [paymentMethod, setPaymentMethod] = useState('click')

	const handlePaymentMethodChange = (e) => {
		setPaymentMethod(e.target.value)
		console.log(e.target.value)
	}

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			const result = await axios.get(
				`https://obscure-beach-21124.herokuapp.com/orders/${orderId}`
			)
			setOrderInfo(result.data)
			setLoading(false)
		}
		fetchData()
	}, [orderId])

	if (loading) {
		return (
			<Container className={styles.container}>
				<Spinner
					animation='grow'
					role='status'
					className={styles.spinner}>
					<span className='visually-hidden'>Loading...</span>
				</Spinner>
			</Container>
		)
	}

	return (
		<Container className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.section}>
					<h2>
						Заказ №{orderInfo.orderNumber} от{' '}
						{new Date(orderInfo.createdAt).toLocaleDateString()}
					</h2>
					<h3 className={styles.capitalize}>{orderInfo.status}</h3>
				</div>
				<div className={styles.section}>
					<div className={styles.spread}>
						<p>Отлата:</p>
						<p className={styles.capitalize}>
							{orderInfo.isPaid ? 'Оплачено' : 'Не оплачено'}
						</p>
					</div>

					<div className={styles.spread}>
						<p>Доставка:</p>
						<p>15,000 сум (Оплачивается отдельно)</p>
					</div>
				</div>
				<div className={styles.section}>
					<h3>Получатель</h3>
					<div className={styles.spread}>
						<p>Имя:</p>
						<p>{orderInfo.customer.name}</p>
					</div>
					<div className={styles.spread}>
						<p>Номер телефона:</p>
						<p>{orderInfo.customer.phoneNumber}</p>
					</div>
				</div>
				<div className={styles.section}>
					<h3>Адрес доставки</h3>
					<address>{orderInfo.customer.address}</address>
				</div>
				<div className={styles.section}>
					<h3>Содержимое заказа</h3>
					<div className={styles.spread}>
						<p>{orderInfo.product.name}</p>
						<p>
							{orderInfo.product.price} x {orderInfo.quantity}
						</p>
					</div>
					{orderInfo.promoCode && (
						<div className={styles.spread}>
							<p>Скидка ({orderInfo.promoCode.code})</p>
							<p>{orderInfo.promoCode.discount * 100}%</p>
						</div>
					)}
				</div>
				<div className={styles.section}>
					<h3>Итого</h3>
					<div className={styles.spread}>
						<p>Сумма заказа:</p>
						<p>{orderInfo.amount} сум</p>
					</div>
				</div>
				<div className={styles.section}>
					<h3>Оплата</h3>
					<Payment order={orderInfo} />
				</div>
			</div>
		</Container>
	)
}

export default Order
