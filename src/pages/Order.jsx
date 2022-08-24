import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Payment from './Payment'

const Order = () => {
	let { orderId } = useParams()

	const [orderInfo, setOrderInfo] = useState({})
	const [loading, setLoading] = useState(true)

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
	}, [])

	console.log(orderInfo)

	if (loading) {
		return <p>Loading data...</p>
	}

	return (
		<div>
			<br />
			<p>Имя: {orderInfo.customer.name}</p>
			<p>Номер телефона: {orderInfo.customer.phoneNumber}</p>
			<p>Адрес: {orderInfo.customer.address}</p>
			<p>Количество: {orderInfo.quantity}</p>
			<Payment orderId={orderInfo._id} />
			<br />
		</div>
	)
}

export default Order
