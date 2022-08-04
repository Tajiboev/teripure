import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from '../../styles/admin.module.sass'

const Subscribers = () => {
	const [subscribers, setSubscribers] = useState([])
	useEffect(() => {
		axios
			.get('https://obscure-beach-21124.herokuapp.com/subscribe')
			.then((response) => setSubscribers(response.data.data))
	}, [])

	return (
		<div>
			<table className={styles.ordersTable}>
				<tr>
					<th>Имя</th>
					<th>Статус</th>
					<th>Дата подписки</th>
				</tr>
				{subscribers.map((subscriber, index) => {
					return (
						<tr key={index}>
							<td>{subscriber.email}</td>
							<td>{subscriber.status}</td>
							<td>{subscriber.createdAt}</td>
						</tr>
					)
				})}
			</table>
		</div>
	)
}

export default Subscribers
