import React, { useRef } from 'react'
import Container from './Container'
import styles from '../styles/footer.module.sass'
import axios from 'axios'

const Footer = () => {
	const email = useRef(null)
	const form = useRef(null)
	const submit = (e) => {
		e.preventDefault()
		let formData = {
			email: email.current.value,
		}
		axios
			.post(
				'https://obscure-beach-21124.herokuapp.com/subscribe',
				formData
			)
			.then((result) => {
				console.log(result)
				alert('Подписка оформлена! Спасибо!')
				form.current.reset()
			})
			.catch((e) => {
				console.log(e.message)
				alert('Подписка не была оформлена!')
			})
	}

	return (
		<footer className={styles.footer}>
			<Container className={styles.footerWrapper}>
				<div>
					<h3>О компании</h3>
					<ul>
						<li>
							<p>Контактные данные:</p>
						</li>
						<li>
							<a
								href='https://instagram.com/teripure_uz'
								target='_blank'
								rel='noopener noreferrer'>
								Instagram: @teripure_uz
							</a>
						</li>
						<li>
							<a href='tel:+998994766477'>+998 (99) 476 64 77</a>
						</li>
					</ul>
				</div>
				<div>
					<h3>Полезные ссылки</h3>
					<ul>
						<li>
							<a href='/'>Новые товары</a>
						</li>
						<li>
							<a href='/'>Хиты продаж</a>
						</li>
						<li>
							<a href='/'>Скидки</a>
						</li>
						<li>
							<a href='/'>Подарочная карта</a>
						</li>
					</ul>
				</div>
				<div>
					<h3>Информация</h3>
					<ul>
						<li>
							<a href='/'>Возврат товара</a>
						</li>
						<li>
							<a href='/'>Свяжитесь с нами</a>
						</li>
						<li>
							<a href='/'>Доставка</a>
						</li>
						<li>
							<a href='/'>Условия</a>
						</li>
						<li>
							<a href='/'>Политика конфиденциальности</a>
						</li>
					</ul>
				</div>
				<div>
					<h3>Сервис рассылки</h3>
					<p>
						Введите свой адрес электронной почты ниже, чтобы первыми
						узнавать о новых коллекциях.
					</p>
					<form onSubmit={submit} ref={form}>
						<div className={styles.email}>
							<input
								type='email'
								placeholder='Адрес электронной почты'
								ref={email}
								required
							/>
							<button type='submit'>Подписаться</button>
						</div>
					</form>
				</div>
			</Container>
			<Container className={styles.bottom}>
				<p>© Teripure 2022</p>
			</Container>
		</footer>
	)
}

export default Footer
