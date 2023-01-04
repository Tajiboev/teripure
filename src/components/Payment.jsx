import { useState } from 'react'
import axios from 'axios'
import click_logo from '../images/click.png'
import payme_logo from '../images/payme.png'
import styles from '../styles/payment.module.sass'
import { toast } from 'react-toastify'
import { useStoreState } from 'easy-peasy'

const Payment = ({ order }) => {
	const { _id } = order

	const [loading, setLoading] = useState(false)
	const lang = useStoreState((state) => state.displayLanguage)

	const handleClickPayment = async () => {
		setLoading(true)

		const alert = {
			pending: lang === 'ru' ? 'Записываем отзыв...' : 'Yuklanmoqda...',
			success: lang === 'ru' ? 'Спасибо!' : 'Rahmat!',
			error: lang === 'ru' ? 'Ошибка!' : 'Xatolik!',
		}

		try {
			await toast.promise(
				axios.post(
					'https://teripure-server.onrender.com/payment/click/createInvoice',
					{
						order: _id,
					}
				),
				{
					pending: alert.pending,
					success: alert.success,
					error: alert.error,
				}
			)
		} catch {
		} finally {
			setLoading(false)
		}
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
