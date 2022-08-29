import { useRef, useState } from 'react'
import styles from '../styles/checkout.module.sass'
import axios from 'axios'
import { useStoreState } from 'easy-peasy'
import Button from './Button'
import Modal from 'react-bootstrap/Modal'
import { useNavigate } from 'react-router-dom'

const CreateOrder = () => {
	let navigate = useNavigate()
	let itemsInBag = useStoreState((state) => state.itemsInBag)

	const form = useRef(null)
	const name = useRef(null)
	const phoneNumber = useRef(null)
	const street = useRef(null)
	const house = useRef(null)
	const apt = useRef(null)

	const [isSending, setIsSending] = useState(false)
	const [show, setShow] = useState(false)

	// const [orderId, setOrderId] = useState('')

	const handleClose = () => setShow(false)
	// const handleShow = () => setShow(true)

	const submit = function (e) {
		e.preventDefault()
		setIsSending(true)
		let formData = {
			customer: {
				name: name.current.value,
				phoneNumber: phoneNumber.current.value,
				address: [
					street.current.value,
					house.current.value,
					apt.current.value,
				].join(', '),
			},
			quantity: itemsInBag,
			product: '630c57f39d64102d54877f6c',
		}
		axios
			.post('https://obscure-beach-21124.herokuapp.com/orders', formData)
			.then((result) => {
				setIsSending(false)
				form.current.reset()
				navigate(`/orders/${result.data._id}`)
			})
			.catch((e) => {
				console.log(e)
				setIsSending(false)
				alert('Заказ не был оформлен!')
			})
	}
	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<p>
						<b>Оформление заказа</b>
						Payment
					</p>
				</Modal.Header>
				<Modal.Body>
					<p>Заказ был успешно оформлен, спасибо!</p>
				</Modal.Body>
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
