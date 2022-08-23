import React, { useRef, useState } from 'react'
import Container from './Container'
import styles from '../styles/footer.module.sass'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const Footer = () => {
	const email = useRef(null)
	const form = useRef(null)

	const [isSending, setIsSending] = useState(false)
	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	const submit = (e) => {
		e.preventDefault()
		let formData = {
			email: email.current.value,
		}
		setIsSending(true)
		axios
			.post(
				'https://obscure-beach-21124.herokuapp.com/subscribe',
				formData
			)
			.then((result) => {
				handleShow()
				setIsSending(false)
				form.current.reset()
			})
			.catch((e) => {
				setIsSending(false)
				alert('Подписка не была оформлена!')
			})
	}

	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<p>
						<b>Подписка на рассылку</b>
					</p>
				</Modal.Header>
				<Modal.Body>
					Подписка была успешно оформлена, спасибо!
				</Modal.Body>
			</Modal>
			<footer className={styles.footer}>
				<Container className={styles.footerWrapper}>
					<Row>
						<Col xs md={4} lg={3}>
							<h5>О компании</h5>
							<ul>
								<li>
									<p>Контактные данные:</p>
								</li>
								<li>
									Instagram:{' '}
									<a
										href='https://instagram.com/teripure_uz'
										target='_blank'
										rel='noopener noreferrer'>
										@teripure_uz
									</a>
								</li>
								<li>
									Телефон:{' '}
									<a href='tel:+998994766477'>
										+998 (99) 476 64 77
									</a>
								</li>
							</ul>
						</Col>
						<Col xs md={4} lg={3}>
							<h5>Полезные ссылки</h5>
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
						</Col>
						<Col xs md={4} lg={3}>
							<h5>Информация</h5>
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
						</Col>
						<Col md={8} lg={3}>
							<h5>Сервис рассылки</h5>
							<p>
								Введите свой адрес электронной почты ниже, чтобы
								первыми узнавать о новых коллекциях.
							</p>
							<form onSubmit={submit} ref={form}>
								<div className={styles.email}>
									<input
										type='email'
										placeholder='Адрес электронной почты'
										ref={email}
										required
									/>
									<Button
										type='submit'
										variant='dark'
										disabled={isSending}>
										{isSending
											? 'Обработка...'
											: 'Подписаться'}
									</Button>
								</div>
							</form>
						</Col>
					</Row>
					<Row>
						<Col className={styles.bottom}>
							<p>&copy; Teripure 2022</p>
						</Col>
					</Row>
				</Container>
			</footer>
		</>
	)
}

export default Footer
