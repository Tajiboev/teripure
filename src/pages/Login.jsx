import { useStoreActions } from 'easy-peasy'
import React, { useRef } from 'react'
import styles from '../styles/login.module.sass'
// import Container from '../components/Container'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
	const authenticate = useStoreActions((actions) => actions.authenticate)
	const setToken = useStoreActions((actions) => actions.setToken)
	const email = useRef(null)
	const password = useRef(null)
	const form = useRef(null)
	const navigate = useNavigate()

	const submit = (e) => {
		e.preventDefault()
		let formData = {
			email: email.current.value,
			password: password.current.value,
		}
		console.log(formData)
		axios
			.post(
				'https://obscure-beach-21124.herokuapp.com/auth/login',
				formData
			)
			.then((result) => {
				authenticate()
				setToken(result.data.token)
				form.current.reset()
				navigate('/admin')
			})
			.catch((e) => {
				console.log(e.message)
				alert('Could not log in')
			})
	}

	return (
		<main className={styles.login}>
			<div className={styles.formWrapper}>
				<form ref={form} onSubmit={submit}>
					<h3>Панель администратора</h3>

					<label htmlFor='email'>Адрес электронной почты</label>
					<input
						type='email'
						name='email'
						id='email'
						ref={email}
						required
					/>

					<label htmlFor='password'>Пароль</label>
					<input
						type='password'
						name='password'
						id='password'
						ref={password}
						required
					/>

					<button>Войти</button>
				</form>
			</div>
		</main>
	)
}

export default Login
