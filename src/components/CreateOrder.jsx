import { useRef, useState } from 'react'
import styles from '../styles/checkout.module.sass'
import axios from 'axios'
import { useStoreState } from 'easy-peasy'
import Button from './Button'
import Modal from 'react-bootstrap/Modal'

const CreateOrder = () => {
	let itemsInBag = useStoreState((state) => state.itemsInBag)

	const form = useRef(null)
	const name = useRef(null)
	const phoneNumber = useRef(null)
	const street = useRef(null)
	const house = useRef(null)
	const apt = useRef(null)

	const [isSending, setIsSending] = useState(false)
	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	const submit = function (e) {
		e.preventDefault()
		setIsSending(true)
		let formData = {
			name: name.current.value,
			phoneNumber: phoneNumber.current.value,
			address: [
				street.current.value,
				house.current.value,
				apt.current.value,
			].join(', '),
			quantity: itemsInBag,
			product: '62e67e83e2f38321945f2c60',
		}
		axios
			.post('https://obscure-beach-21124.herokuapp.com/orders', formData)
			.then((result) => {
				console.log(result)
				handleShow()
				setIsSending(false)
				form.current.reset()
			})
			.catch((e) => {
				console.log(e)
				alert('Заказ не был оформлен!')
				setIsSending(false)
			})
	}
	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<p>
						<b>Оформление заказа</b>
					</p>
				</Modal.Header>
				<Modal.Body>Заказ был успешно оформлен, спасибо!</Modal.Body>
			</Modal>
			<form className={styles.form} onSubmit={submit} ref={form}>
				<section className={'d-flex ' + styles.top}>
					<div className={styles.name}>
						<label htmlFor='fullName'>Имя и фамилия</label>
						<input
							type='text'
							name='fullName'
							id='fullName'
							ref={name}
							required
						/>
					</div>
					<div className={styles.phone}>
						<label htmlFor='phoneNumber'>Номер телефона</label>
						<input
							type='tel'
							name='phoneNumber'
							id='phoneNumber'
							ref={phoneNumber}
							required
						/>
					</div>
				</section>
				<section className={'d-flex ' + styles.bottom}>
					<div className={styles.street}>
						<label htmlFor='street'>Улица</label>
						<input
							type='text'
							name='street'
							id='street'
							ref={street}
							required
						/>
					</div>
					<div className={styles.house}>
						<label htmlFor='house'>Дом</label>
						<input
							type='number'
							min={1}
							name='house'
							id='house'
							ref={house}
							required
						/>
					</div>
					<div className={styles.apartment}>
						<label htmlFor='apartment'>Квартира</label>
						<input
							type='number'
							min={1}
							name='apartment'
							id='apartment'
							ref={apt}
							required
						/>
					</div>
				</section>
				<section className={styles.checkbox}>
					<input
						type='checkbox'
						name='consent'
						id='consent'
						checked
						readOnly
					/>
					<label htmlFor='consent'>
						Согласие на обработку персональных данных
					</label>
				</section>
				<section>
					<Button
						className={styles.orderButton}
						isLoading={isSending}
						variant='dark'
						type='submit'
						loadingText='Оформляем заказ...'>
						Оформить заказ
					</Button>
				</section>
			</form>
		</>
	)
}

export default CreateOrder
