import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from '../styles/admin.module.sass'

const Orders = () => {
	const [orders, setOrders] = useState([])
	useEffect(() => {
		axios
			.get('https://obscure-beach-21124.herokuapp.com/orders')
			.then((response) => setOrders(response.data.data))
	}, [])

	return (
		<div>
			<table className={styles.ordersTable}>
				<tr>
					<th>Имя</th>
					<th>Номер телефона</th>
					<th>Продукт</th>
					<th>Адрес</th>
					<th>Количество</th>
					<th>Дата заказа</th>
					<th>Изменить статус</th>
				</tr>
				{orders.map((order, index) => {
					return (
						<tr key={index}>
							<td>{order.name}</td>
							<td>{order.phoneNumber}</td>
							<td>TeriPure Maximum</td>
							<td>{order.address}</td>
							<td>{order.quantity}</td>
							<td>{order.createdAt}</td>
							<td>
								<button>Удалить</button>
							</td>
						</tr>
					)
				})}
			</table>
		</div>
	)
}

export default Orders
