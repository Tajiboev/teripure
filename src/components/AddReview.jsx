import { useRef, useState } from 'react'
import styles from '../styles/addreview.module.sass'
import Button from './Button'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import IntText from './IntText'

const AddReview = ({ classname, product = 'Teripure Maximum' }) => {
	const [isSending, setIsSending] = useState(false)
	const [rating, setRating] = useState(5)
	const form = useRef()
	const name = useRef()
	const phoneNumber = useRef()
	const review = useRef()

	const onRadioChange = (e) => {
		setRating(e.target.value)
	}

	const [show, setShow] = useState(false)
	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	const onSubmit = (e) => {
		e.preventDefault()
		setIsSending(true)
		let formData = {
			author: name.current.value,
			phoneNumber: phoneNumber.current.value,
			rating,
			text: review.current.value,
		}
		console.log(formData)
		axios
			.post('https://obscure-beach-21124.herokuapp.com/reviews', formData)
			.then((result) => {
				// console.log(result)
				handleShow()
				setIsSending(false)
				form.current.reset()
			})
			.catch((e) => {
				console.log(e)
				alert('Отзыв не был записан!')
				setIsSending(false)
			})
	}

	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<p>
						<b>
							<IntText
								ru='Отзыв о продукте'
								uz='Mahsulot haqida sharh'
							/>
						</b>
					</p>
				</Modal.Header>
				<Modal.Body>
					<IntText
						ru='Отзыв был успешно записан, спасибо!'
						uz='Sharh yozib olindi, rahmat!'></IntText>
				</Modal.Body>
			</Modal>
			<div className={styles.dialog + ' ' + classname}>
				<form ref={form} onSubmit={onSubmit}>
					<h3>
						<IntText
							ru='Отзыв о продукте Teripure Maximum'
							uz='Teripure Maximum haqida sharhlar'></IntText>
					</h3>
					<fieldset className={styles.contactInfo}>
						<div>
							<label htmlFor='name'>
								<IntText
									ru='Полное имя'
									uz='Ism va familiya'></IntText>
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
								<IntText
									ru='Номер телефона'
									uz='Telefon raqamingiz'></IntText>
							</label>
							<input
								type='tel'
								name='phoneNumber'
								id='phoneNumber'
								required
								ref={phoneNumber}
							/>
						</div>
					</fieldset>
					<fieldset className={styles.review}>
						<label htmlFor='name'>
							<IntText
								ru='Текст отзыва'
								uz='Sharh matni'></IntText>
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
							<IntText
								ru='В целом, насколько вы удовлетворены продуктом?'
								uz='Mahsulot bilan qanchalik mamnunsiz?'></IntText>
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
							<IntText ru='Отправить' uz='Yuborish'></IntText>
						</Button>
						<button id='cancel' type='reset'>
							<IntText ru='Отменить' uz='Bekor qilish'></IntText>
						</button>
					</fieldset>
				</form>
			</div>
		</>
	)
}

export default AddReview
