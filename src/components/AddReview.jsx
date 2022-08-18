import { useRef, useState } from 'react'
import styles from '../styles/addreview.module.sass'
import Button from './Button'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'

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
						<b>Отзыв о продукте</b>
					</p>
				</Modal.Header>
				<Modal.Body>Отзыв был успешно записан, спасибо!</Modal.Body>
			</Modal>
			<div className={styles.dialog + ' ' + classname}>
				<form ref={form} onSubmit={onSubmit}>
					<h3>Отзыв о продукте {product}</h3>
					<fieldset className={styles.contactInfo}>
						<div>
							<label htmlFor='name'>Полное имя</label>
							<input
								type='text'
								name='name'
								id='name'
								required
								ref={name}
							/>
						</div>
						<div>
							<label htmlFor='phoneNumber'>Номер телефона</label>
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
						<label htmlFor='name'>Текст отзыва</label>
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
						<p>В целом, насколько вы удовлетворены продуктом?</p>
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
							Отправить
						</Button>
						<button id='cancel' type='reset'>
							Отменить
						</button>
					</fieldset>
				</form>
			</div>
		</>
	)
}

export default AddReview
