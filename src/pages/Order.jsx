import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Order = () => {
	let { orderId } = useParams()

	const [orderInfo, setOrderInfo] = useState({})

	useEffect(() => {
		axios
			.get(`https://obscure-beach-21124.herokuapp.com/orders/${orderId}`)
			.then((response) => {
				setOrderInfo(response.data)
			})
			.catch((e) => {
				alert(e.message)
			})
	})

	return (
		<div>
			<h4>{orderInfo.name}</h4>
			<h4>{orderInfo.address}</h4>
			<h4>{orderInfo.amount}</h4>
			<h4>{orderInfo.quantity}</h4>
		</div>
	)
}

export default Order
