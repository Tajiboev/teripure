import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from '../styles/admin.module.sass'

const Products = () => {
	const [products, setProducts] = useState([])
	useEffect(() => {
		axios
			.get('https://obscure-beach-21124.herokuapp.com/products')
			.then((response) => setProducts(response.data.data))
	}, [])

	return (
		<div>
			<table className={styles.ordersTable}>
				<tr>
					<th>Название</th>
					<th>Описание</th>
					<th>Цена</th>
					<th>Дата</th>
				</tr>
				{products.map((product, index) => {
					return (
						<tr key={index}>
							<td>{product.name}</td>
							<td>{product.description}</td>
							<td>{product.price}</td>
							<td>{product.createdAt}</td>
						</tr>
					)
				})}
			</table>
		</div>
	)
}

export default Products
