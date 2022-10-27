import axios from 'axios'
import React, { useRef, useState } from 'react'
import styles from '../styles/contact.module.sass'
import Button from './Button'

const SendMessage = () => {
	const form = useRef(null)
	const name = useRef(null)
	const email = useRef(null)
	const message = useRef(null)

	const [isSending, setIsSending] = useState(false)

	const sendMessage = (e) => {
		e.preventDefault()
		setIsSending(true)
		let formData = {
			name: name.current.value,
			email: email.current.value,
			text: message.current.value,
		}
		axios
			.post(
				'https://obscure-beach-21124.herokuapp.com/messages',
				formData
			)
			.then((result) => {
				console.log(result)
				alert('Мы получили ваше сообщение. Спасибо!')
				setIsSending(false)
				form.current.reset()
			})
			.catch((e) => {
				console.log(e.message)
				alert('Сообщение не было отправлено!')
				setIsSending(false)
			})
	}

	return (
		<div className={styles.formWrapper}>
			<form ref={form} onSubmit={sendMessage}>
				<h2>Отправить сообщение</h2>
				<div>
					<input
						type='text'
						name='name'
						id='name'
						placeholder='Полное имя'
						ref={name}
						required
					/>
					<input
						type='email'
						name='email'
						id='email'
						placeholder='Email'
						ref={email}
						required
					/>
				</div>
				<textarea
					name='text'
					id='text'
					rows='10'
					placeholder='Текст сообщения'
					ref={message}
					required></textarea>
				<div>
					<input
						type='checkbox'
						name='agree'
						id='agree'
						defaultChecked
						required
					/>
					<label htmlFor='agree'>
						Согласие на обработку персональных данных
					</label>
				</div>
				<Button isLoading={isSending} loadingText={'Отправляем...'}>
					Отправить
				</Button>
			</form>
		</div>
	)
}

export default SendMessage
