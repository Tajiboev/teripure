import { useRef, useState } from 'react'
import styles from '../styles/addreview.module.sass'
import Button from './Button'
import axios from 'axios'
import Text from './Text'
import { toast } from 'react-toastify'
import { useStoreState } from 'easy-peasy'

const AddReview = ({ classname }) => {
	const [isSending, setIsSending] = useState(false)
	const [rating, setRating] = useState(5)
	const form = useRef()
	const name = useRef()
	const phoneNumber = useRef()
	const review = useRef()
	const lang = useStoreState((state) => state.displayLanguage)

	const onRadioChange = (e) => {
		setRating(e.target.value)
	}

	const submitReview = async (e) => {
		e.preventDefault()
		setIsSending(true)

		const formData = {
			product: '630c57f39d64102d54877f6c',
			name: name.current.value,
			phoneNumber: phoneNumber.current.value,
			rating,
			text: review.current.value,
		}

		const alert = {
			pending: lang === 'ru' ? 'Записываем отзыв...' : 'Yuklanmoqda...',
			success: lang === 'ru' ? 'Спасибо!' : 'Rahmat!',
			error: lang === 'ru' ? 'Ошибка!' : 'Xatolik!',
		}

		try {
			await toast.promise(
				axios.post(
					'https://teripure-server.onrender.com/reviews',
					formData
				),
				{
					pending: alert.pending,
					success: alert.success,
					error: alert.error,
				}
			)
		} catch (e) {
		} finally {
			setIsSending(false)
		}
	}

	return (
		<>
			<div className={styles.dialog + ' ' + classname}>
				<form ref={form} onSubmit={submitReview}>
					<h3>
						<Text
							ru='Отзыв о продукте Teripure Maximum'
							uz='Teripure Maximum haqida sharhlar'></Text>
					</h3>
					<fieldset className={styles.contactInfo}>
						<div>
							<label htmlFor='name'>
								<Text
									ru='Полное имя'
									uz='Ism va familiya'></Text>
							</label>
							<input
								type='text'
								name='name'
								id='name'
								required
								ref={name}
							/>
						</div>
						<div>
							<label htmlFor='phoneNumber'>
								<Text
									ru='Номер телефона'
									uz='Telefon raqamingiz'></Text>
							</label>
							<input
								type='tel'
								name='phoneNumber'
								id='phoneNumber'
								pattern='^\+998[0-9]{9}$'
								title='Incorrect phone number format'
								required
								ref={phoneNumber}
							/>
						</div>
					</fieldset>
					<fieldset className={styles.review}>
						<label htmlFor='name'>
							<Text ru='Текст отзыва' uz='Sharh matni'></Text>
						</label>
						<textarea
							name='review'
							id='review'
							cols='30'
							rows='6'
							ref={review}></textarea>
					</fieldset>
					<fieldset
						className={styles.rating}
						onChange={onRadioChange}>
						<p>
							<Text
								ru='В целом, насколько вы удовлетворены продуктом?'
								uz='Mahsulot bilan qanchalik mamnunsiz?'></Text>
						</p>
						<input type='radio' name='rating' id='1' value={1} />
						<label htmlFor='1'>1</label>
						<input type='radio' name='rating' id='2' value={2} />
						<label htmlFor='2'>2</label>
						<input type='radio' name='rating' id='3' value={3} />
						<label htmlFor='3'>3</label>
						<input type='radio' name='rating' id='4' value={4} />
						<label htmlFor='4'>4</label>
						<input
							type='radio'
							name='rating'
							id='5'
							value={5}
							defaultChecked
						/>
						<label htmlFor='5'>5</label>
					</fieldset>
					<fieldset className={styles.controlButtons}>
						<Button
							type='submit'
							isLoading={isSending}
							loadingText={'Записываем отзыв...'}>
							<Text ru='Отправить' uz='Yuborish'></Text>
						</Button>
						<button id='cancel' type='reset'>
							<Text ru='Отменить' uz='Bekor qilish'></Text>
						</button>
					</fieldset>
				</form>
			</div>
		</>
	)
}

export default AddReview
