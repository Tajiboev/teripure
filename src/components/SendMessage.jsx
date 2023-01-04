import axios from 'axios'
import { useStoreState } from 'easy-peasy'
import React, { useRef, useState } from 'react'
import styles from '../styles/contact.module.sass'
import Button from './Button'
import Text from './Text'

const SendMessage = () => {
	const lang = useStoreState((state) => state.displayLanguage)
	const form = useRef(null)
	const name = useRef(null)
	const email = useRef(null)
	const message = useRef(null)

	const [isSending, setIsSending] = useState(false)

	const sendMessage = async (e) => {
		e.preventDefault()
		setIsSending(true)
		const formData = {
			name: name.current.value,
			email: email.current.value,
			text: message.current.value,
		}
		try {
			axios.post(
				'https://teripure-server.onrender.com/messages',
				formData
			)
		} catch (e) {
		} finally {
			setIsSending(false)
		}
	}

	return (
		<div className={styles.formWrapper}>
			<form ref={form} onSubmit={sendMessage}>
				<h2>
					<Text ru='Отправить сообщение' uz='Xabar yuborish'></Text>
				</h2>
				<div>
					<input
						type='text'
						name='name'
						id='name'
						placeholder={
							lang === 'Русский'
								? 'Полное имя'
								: 'Ism va familiya'
						}
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
					placeholder={
						lang === 'Русский' ? 'Текст сообщения' : 'Xabar matni'
					}
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
						<Text
							ru='Согласие на обработку персональных данных'
							uz="Shaxsiy ma'lumotlarni qayta ishlashga rozilik"></Text>
					</label>
				</div>
				<Button isLoading={isSending}>
					<Text lang={lang} ru='Отправить' uz='Yuborish'></Text>
				</Button>
			</form>
		</div>
	)
}

export default SendMessage
