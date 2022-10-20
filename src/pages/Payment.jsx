import { useState } from 'react'
import axios from 'axios'

const Payment = ({ order, ...props }) => {
	const { merchant_trans_id, amount, phoneNumber } = order

	const [loading, setLoading] = useState(false)

	const handleClickPayment = async () => {
		setLoading(true)
		try {
			const response = await axios.post(
				'https://obscure-beach-21124.herokuapp.com/payment/click/createInvoice',
				{
					merchant_trans_id,
					amount,
					phone_number: phoneNumber,
				}
			)
		} catch {
			setLoading(false)
		}
		setLoading(false)
	}

	return (
		<div>
			<button className='click-button'>Click</button>
			<button className='payme-button'>Payme</button>
		</div>
	)
}

export default Payment
