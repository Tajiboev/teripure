import { useState } from 'react'
import axios from 'axios'
import click_logo from '../images/click.png'
import payme_logo from '../images/payme.png'
import styles from '../styles/payment.module.sass'

const Payment = ({ order, ...props }) => {
	const { _id, amount, customer } = order

	const [loading, setLoading] = useState(false)

	const handleClickPayment = async () => {
		setLoading(true)
		try {
			const response = await axios.post(
				'https://obscure-beach-21124.herokuapp.com/payment/click/createInvoice',
				{
					merchant_trans_id: _id,
					amount: amount,
					phone_number: customer.phoneNumber,
				}
			)
			alert(`Вам выставлен счёт в системе Click.uz!`)
		} catch {
			setLoading(false)
			alert('Мы не смогли выставить счёт по указанному номеру телефона')
		}
		setLoading(false)
	}

	return (
		<div>
			<button
				className={styles.click_button}
				onClick={handleClickPayment}
				disabled={loading}>
				<img src={click_logo} alt='Pay with click.uz' />
			</button>
			<button className={styles.payme_button} disabled>
				<img src={payme_logo} alt='Pay with payme.uz' />
			</button>
		</div>
	)
}

export default Payment
