import { useRef, useState } from 'react'
import Container from './Container'
import styles from '../styles/footer.module.sass'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Instagram from '../images/instagram_1.png'
import Instagram_w from '../images/instagram_1.webp'
import Text from './Text'
import { useStoreState } from 'easy-peasy'
import { toast } from 'react-toastify'

const Footer = () => {
	const form = useRef(null)
	const email = useRef(null)
	const lang = useStoreState((state) => state.displayLanguage)

	const [isSending, setIsSending] = useState(false)

	const alert = {
		pending: lang === 'ru' ? 'Записываем...' : 'Yuklanmoqda...',
		success: lang === 'ru' ? 'Спасибо!' : 'Rahmat!',
		error: lang === 'ru' ? 'Ошибка!' : 'Xatolik!',
	}

	const subscribe = async (e) => {
		e.preventDefault()
		const formData = {
			email: email.current.value,
		}
		setIsSending(true)

		try {
			await toast.promise(
				axios.post(
					'https://teripure-server.onrender.com/subscribers',
					formData
				),
				{
					pending: alert.pending,
					success: alert.success,
					error: alert.error,
				}
			)
		} catch (e) {
		} finally {
			setIsSending(false)
		}
	}

	return (
		<footer className={styles.footer}>
			<Container className={styles.footerWrapper}>
				<Row>
					<Col xs={12} md={3} className='mb-4 mb-sm-0'>
						<h5>
							<Text ru='О компании' uz='Kompaniya haqida' />
						</h5>
						<ul>
							<li>
								<p>
									<Text
										ru='Контактные данные:'
										uz="Aloqa uchun ma'lumotlar:"
									/>
								</p>
							</li>
							<li>
								<picture
									style={{
										marginRight: '4px',
										marginBottom: '1px',
									}}>
									<source
										srcSet={Instagram_w}
										type='image/webp'
									/>
									<img
										src={Instagram}
										alt='instagram'
										width={20}
									/>
								</picture>
								<a
									href='https://instagram.com/teripure_uz'
									target='_blank'
									rel='noopener noreferrer'>
									teripure_uz
								</a>
							</li>
							<li>
								<Text ru='Телефон:' uz='Telefon' />
								<a href='tel:+998994766477'>
									+998 (99) 476 64 77
								</a>
							</li>
						</ul>
					</Col>
					<Col xs={12} md={3} className='mb-4 mb-sm-0'>
						<h5>
							<Text ru='Информация' uz="Ma'lumot" />
						</h5>
						<ul>
							<li>
								<Link to='contact-us'>
									<Text
										ru='Свяжитесь с нами'
										uz="Biz bilan bog'laning"
									/>
								</Link>
							</li>
							<li>
								<Link to='product'>
									<Text
										ru='Часто задаваемые вопросы'
										uz="Ko'p so'raladigan savollar"
									/>
								</Link>
							</li>
							<li>
								<Link to='/'>
									<Text
										ru='Политика конфиденциальности'
										uz='Maxfiylik siyosati'
									/>
								</Link>
							</li>
						</ul>
					</Col>
					<Col xs={12} md={3} className='mb-4 mb-sm-0'>
						<h5>
							<Text ru='Партнёры' uz='Hamkorlarimiz' />
						</h5>
						<ul>
							<li>
								<a
									href='https://tabletka.uz/'
									target='_blank'
									rel='noopener noreferrer'>
									<Text
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
									<Text ru='Oxy-Med' uz='Oxy-Med' />
								</a>
							</li>
							<li>
								<a
									href='http://www.shohfarm.com/'
									target='_blank'
									rel='noopener noreferrer'>
									<Text ru='Shoh-Farm' uz='Shoh-Farm' />
								</a>
							</li>
							<li>
								<a
									href='https://arzonapteka.uz/ru/org/3416'
									target='_blank'
									rel='noopener noreferrer'>
									<Text
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
									<Text ru='5+ Sampi' uz='5+ Sampi' />
								</a>
							</li>
						</ul>
					</Col>
					<Col xs={12} md={3} className='mb-2 mb-sm-0'>
						<h5>
							<Text ru='Сервис рассылки' uz='Axborot xizmati' />
						</h5>
						<p>
							<Text
								ru='Введите свой адрес электронной почты ниже, чтобы
									первыми узнавать о новых коллекциях.'
								uz="Yangi to'plamlar haqida birinchilardan bo'lib xabardor bo'lish uchun quyida elektron pochta manzilingizni kiriting."
							/>
						</p>
						<form onSubmit={subscribe} ref={form}>
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
											ru='Обработка...'
											uz='Yuklanmoqda...'
										/>
									) : (
										<Text
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
	)
}

export default Footer
