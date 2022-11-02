import { useRef, useState } from 'react'
import Container from './Container'
import styles from '../styles/footer.module.sass'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom'
import Instagram from '../images/instagram_1.png'
import Text from './Text'
import { useStoreState } from 'easy-peasy'

const Footer = () => {
	const language = useStoreState((state) => state.displayLanguage)
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
				alert(
					<Text
						lang={language}
						ru='Подписка не была оформлена!'
						uz="Obuna bo'lishda xatolik yuz berdi!"
					/>
				)
			})
	}

	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<p>
						<b>
							<Text
								lang={language}
								ru='Подписка на рассылку'
								uz="Obuna bo'lish"
							/>
						</b>
					</p>
				</Modal.Header>
				<Modal.Body>
					<Text
						lang={language}
						ru='Подписка была успешно оформлена, спасибо!'
						uz="Obuna muvaffaqiyatli bo'ldi, rahmat!"
					/>
				</Modal.Body>
			</Modal>
			<footer className={styles.footer}>
				<Container className={styles.footerWrapper}>
					<Row>
						<Col xs={12} md={3} className='mb-4 mb-sm-0'>
							<h5>
								<Text
									lang={language}
									ru='О компании'
									uz='Kompaniya haqida'
								/>
							</h5>
							<ul>
								<li>
									<p>
										<Text
											lang={language}
											ru='Контактные данные:'
											uz="Aloqa uchun ma'lumotlar:"
										/>
									</p>
								</li>
								<li>
									<img
										src={Instagram}
										alt='instagram'
										width={20}
										style={{
											marginRight: '4px',
											marginBottom: '1px',
										}}
									/>
									<a
										href='https://instagram.com/teripure_uz'
										target='_blank'
										rel='noopener noreferrer'>
										teripure_uz
									</a>
								</li>
								<li>
									<Text
										lang={language}
										ru='Телефон:'
										uz='Telefon'
									/>
									<a href='tel:+998994766477'>
										+998 (99) 476 64 77
									</a>
								</li>
							</ul>
						</Col>
						<Col xs={12} md={3} className='mb-4 mb-sm-0'>
							<h5>
								<Text
									lang={language}
									ru='Информация'
									uz="Ma'lumot"
								/>
							</h5>
							<ul>
								<li>
									<Link to='contact-us'>
										<Text
											lang={language}
											ru='Свяжитесь с нами'
											uz="Biz bilan bog'laning"
										/>
									</Link>
								</li>
								<li>
									<Link to='product'>
										<Text
											lang={language}
											ru='Часто задаваемые вопросы'
											uz="Ko'p so'raladigan savollar"
										/>
									</Link>
								</li>
								<li>
									<Link to='/'>
										<Text
											lang={language}
											ru='Политика конфиденциальности'
											uz='Maxfiylik siyosati'
										/>
									</Link>
								</li>
							</ul>
						</Col>
						<Col xs={12} md={3} className='mb-4 mb-sm-0'>
							<h5>
								<Text
									lang={language}
									ru='Партнёры'
									uz='Hamkorlarimiz'
								/>
							</h5>
							<ul>
								<li>
									<a
										href='https://tabletka.uz/'
										target='_blank'
										rel='noopener noreferrer'>
										<Text
											lang={language}
											ru='Сеть аптек Таблетка'
											uz='Tabletka'
										/>
									</a>
								</li>
								<li>
									<a
										href='http://oxymed.uz/'
										target='_blank'
										rel='noopener noreferrer'>
										<Text
											lang={language}
											ru='Oxy-Med'
											uz='Oxy-Med'
										/>
									</a>
								</li>
								<li>
									<a
										href='http://www.shohfarm.com/'
										target='_blank'
										rel='noopener noreferrer'>
										<Text
											lang={language}
											ru='Shoh-Farm'
											uz='Shoh-Farm'
										/>
									</a>
								</li>
								<li>
									<a
										href='https://arzonapteka.uz/ru/org/3416'
										target='_blank'
										rel='noopener noreferrer'>
										<Text
											lang={language}
											ru='EURO PHARM MARKET'
											uz='EURO PHARM MARKET'
										/>
									</a>
								</li>
								<li>
									<a
										href='https://arzonapteka.uz/ru/org/2393'
										target='_blank'
										rel='noopener noreferrer'>
										<Text
											lang={language}
											ru='5+ Sampi'
											uz='5+ Sampi'
										/>
									</a>
								</li>
							</ul>
						</Col>
						<Col xs={12} md={3} className='mb-2 mb-sm-0'>
							<h5>
								<Text
									lang={language}
									ru='Сервис рассылки'
									uz='Axborot xizmati'
								/>
							</h5>
							<p>
								<Text
									lang={language}
									ru='Введите свой адрес электронной почты ниже, чтобы
									первыми узнавать о новых коллекциях.'
									uz="Yangi to'plamlar haqida birinchilardan bo'lib xabardor bo'lish uchun quyida elektron pochta manzilingizni kiriting."
								/>
							</p>
							<form onSubmit={submit} ref={form}>
								<div className={styles.email}>
									<input
										type='email'
										placeholder={'Email'}
										ref={email}
										required
									/>
									<Button
										type='submit'
										variant='dark'
										disabled={isSending}>
										{isSending ? (
											<Text
												lang={language}
												ru='Обработка...'
												uz='Yuklanmoqda...'
											/>
										) : (
											<Text
												lang={language}
												ru='Подписаться'
												uz="Obuna bo'lish"
											/>
										)}
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
