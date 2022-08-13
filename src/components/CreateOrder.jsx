import { useRef, useState } from 'react'
import styles from '../styles/checkout.module.sass'
import axios from 'axios'
import { useStoreState } from 'easy-peasy'
import Button from './Button'

const CreateOrder = () => {
	let itemsInBag = useStoreState((state) => state.itemsInBag)

	const form = useRef(null)
	const name = useRef(null)
	const phoneNumber = useRef(null)
	const street = useRef(null)
	const house = useRef(null)
	const apt = useRef(null)

	const [isSending, setIsSending] = useState(false)

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
				alert('Заказ оформлен! Спасибо!')
				setIsSending(false)
				form.current.reset()
			})
			.catch((e) => {
				console.log(e.message)
				alert('Заказ не был оформлен!')
				setIsSending(false)
			})
	}
	return (
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
					loadingText='Оформляем заказ...'>
					Оформить заказ
				</Button>
			</section>
		</form>
	)
}

export default CreateOrder
