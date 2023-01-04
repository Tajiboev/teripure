import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Payment from '../components/Payment'
import styles from '../styles/orders.module.sass'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'
import Text from '../components/Text'

const Order = () => {
	let { orderId } = useParams()

	const [order, setOrder] = useState({})
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			const result = await axios.get(
				`https://teripure-server.onrender.com/orders/${orderId}`
			)
			setOrder(result.data)
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
						<Text ru='Заказ от' uz='Buyurtma -'></Text>{' '}
						{new Date(order.createdAt).toLocaleDateString()}
					</h2>
				</div>
				<div className={styles.section}>
					<div className={styles.spread}>
						<p>
							<Text ru='Статус отлаты' uz="To'lov holati"></Text>:
						</p>
						<p className={styles.capitalize}>
							{order.isPaid ? (
								<Text ru='Оплачено' uz="To'langan"></Text>
							) : (
								<Text ru='Не оплачено' uz="To'lanmagan"></Text>
							)}
						</p>
					</div>

					<div className={styles.spread}>
						<p>
							<Text ru='Доставка' uz='Yetkazib berish'></Text>:
						</p>
						<p>
							15,000 <Text ru='сум' uz="so'm"></Text>{' '}
							<Text
								ru='(Оплачивается отдельно)'
								uz="(Aloxida to'lanadi)"></Text>
						</p>
					</div>
				</div>
				<div className={styles.section}>
					<h3>
						<Text ru='Получатель' uz='Buyurtma egasi'></Text>
					</h3>
					<div className={styles.spread}>
						<p>
							<Text ru='Полное имя' uz="To'liq ismi"></Text>:
						</p>
						<p>{order.name}</p>
					</div>
					<div className={styles.spread}>
						<p>
							<Text
								ru='Номер телефона'
								uz='Telefon raqami'></Text>
							:
						</p>
						<p>{order.phoneNumber}</p>
					</div>
				</div>
				<div className={styles.section}>
					<h3>
						<Text
							ru='Адрес доставки'
							uz='Qabul qilish manzili'></Text>
					</h3>
					<address>{order.address}</address>
				</div>
				<div className={styles.section}>
					<h3>
						<Text ru='Содержимое заказа' uz='Buyurtma'></Text>
					</h3>
					<div className={styles.spread}>
						<p>{order.product.name}</p>
						<p>
							{order.product.price} x {order.quantity}
						</p>
					</div>
					{order.coupon && (
						<div className={styles.spread}>
							<p>
								<Text ru='Скидка' uz='Chegirma'></Text> (
								{order.coupon.code})
							</p>
							<p>{order.coupon.discount * 100}%</p>
						</div>
					)}
				</div>
				<div className={styles.section}>
					<h3>
						<Text ru='Итого' uz="Ja'mi"></Text>
					</h3>
					<div className={styles.spread}>
						<p>
							<Text
								ru='Сумма заказа'
								uz='Buyurtma summasi'></Text>
							:
						</p>
						<p>
							{order.amount} <Text ru='сум' uz="so'm"></Text>
						</p>
					</div>
				</div>
				<div className={styles.section}>
					<h3>
						<Text
							ru='Оплатить'
							uz="To'lovni amalga oshirish"></Text>
					</h3>
					<Payment order={order} />
				</div>
			</div>
		</Container>
	)
}

export default Order
