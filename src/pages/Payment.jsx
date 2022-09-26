import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useStoreActions } from 'easy-peasy'

const Payment = ({
	orderId,
	amount,
	phoneNumber,
	paymentMethod,
	className,
	...props
}) => {
	let navigate = useNavigate()
	const clearBag = useStoreActions((actions) => actions.clearBag)

	const [show, setShow] = useState(false)
	const [loading, setLoading] = useState(false)
	const handleClose = () => {
		setShow(false)
		clearBag()
	}

	const handlePayment = async () => {
		console.log('payment button click')
		setLoading(true)
		if (paymentMethod === 'click') {
			const response = await axios.post(
				'https://obscure-beach-21124.herokuapp.com/payment/click/createInvoice',
				{
					merchant_trans_id: orderId,
					amount,
					phone_number: phoneNumber,
				}
			)
			console.log(response.data)
			setLoading(false)
			setShow(true)
		}
	}

	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<p>
						<b>Оплата заказа</b>
					</p>
				</Modal.Header>
				<Modal.Body>
					<p>Вам был выставлен счет в система {paymentMethod}.uz!</p>
					<p>
						Товары будут доставлены в течении 48 часов после отлаты.
					</p>
					<br />
					<p>
						Номер вашего заказа: {orderId}. Сохраните этот номер,
						пожалуйста!
					</p>
				</Modal.Body>
			</Modal>
			<Button
				{...props}
				className={'input-btn ' + className}
				isLoading={loading}
				onClick={handlePayment}>
				Оплатить заказ
			</Button>
		</>
	)
}

export default Payment
