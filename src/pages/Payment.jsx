import { useEffect } from 'react'
import Button from 'react-bootstrap/Button'

const Payment = ({ orderId }) => {
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
					amount: 1001.0,
					transaction_param: orderId,
					merchant_user_id: 27796,
				},
				function (data) {
					console.log('closed', data.status)
				}
			)
		})

		return () => {
			document.body.removeChild(script)
		}
	})
	return (
		<div>
			<Button className='input-btn'>Payment</Button>
		</div>
	)
}

export default Payment
