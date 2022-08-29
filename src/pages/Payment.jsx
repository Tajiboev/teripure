import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useStoreActions } from 'easy-peasy'

const Payment = ({ orderId, amount, className, ...props }) => {
	let navigate = useNavigate()
	const clearBag = useStoreActions((actions) => actions.clearBag)

	const [show, setShow] = useState(false)
	const handleClose = () => {
		setShow(false)
		navigate('/')
	}
	const handleShow = () => setShow(true)

	useEffect(() => {
		const script = document.createElement('script')

		script.src = 'https://my.click.uz/pay/checkout.js'
		script.async = true

		document.body.appendChild(script)

		var linkEl = document.querySelector('.input-btn')
		linkEl.addEventListener('click', function () {
			window.createPaymentRequest(
				{
					service_id: 24817,
					merchant_id: 17292,
					amount,
					transaction_param: orderId,
					merchant_user_id: 27796,
				},
				function (data) {
					if (data.status === 2) {
						axios
							.patch(
								`https://obscure-beach-21124.herokuapp.com/orders/${orderId}`,
								{
									paymentStatus: 'оплачено',
								}
							)
							.then((result) => {
								console.log(result.data)
								handleShow()
								clearBag()
							})
							.catch((e) => {
								console.log(e.message)
							})
					}
				}
			)
		})

		return () => {
			document.body.removeChild(script)
		}
	})
	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<p>
						<b>Оплата заказа</b>
					</p>
				</Modal.Header>
				<Modal.Body>
					<p>Заказ был успешно оплачен, спасибо!</p>
					<p>Мы отправим ваш заказ в ближайшее время</p>
					<br />
					<p>
						Номер вашего заказа: {orderId}. Сохраните этот номер,
						пожалуйста!
					</p>
				</Modal.Body>
			</Modal>
			<Button {...props} className={'input-btn ' + className}>
				Оплатить заказ
			</Button>
		</>
	)
}

export default Payment
