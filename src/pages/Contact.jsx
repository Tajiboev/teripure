import React from 'react'
import Backdrop from '../components/Backdrop'
import Breadcrumb from '../components/Breadcrumb'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import ShoppingBag from '../components/ShoppingBag'
import Topbar from '../components/Topbar'
import {
	IoLocationOutline,
	IoCallOutline,
	IoTimeOutline,
} from 'react-icons/io5'

import { YMaps, Map, Placemark } from 'react-yandex-maps'

import styles from '../styles/contact.module.sass'
import Footer from '../components/Footer'

const Contact = () => {
	return (
		<>
			<Backdrop />
			<header className='header'>
				<Topbar />
				<Navbar />
				<ShoppingBag />
			</header>
			<Breadcrumb />

			<Container>
				<div className={styles.hero}>
					<h1>Оставайтесь с нами на связи</h1>
					<h2>
						Мы здесь, чтобы помочь и ответить на любой ваш вопрос.
						<br />
						Мы с нетерпением ждем услышать от вас
					</h2>
				</div>
				<div className={styles.infoWrapper}>
					<div className={styles.info}>
						<IoLocationOutline size={32} />
						<div>
							<p className={styles.headline}>Адрес</p>
							<address>
								Бизнес-центр "Инконель"
								<br />
								75, проспект Мустакиллик
								<br />
								Ташкент, Узбекистан
								<br />
								100000
							</address>
						</div>
					</div>
					<div className={styles.info}>
						<IoCallOutline size={32} />
						<div>
							<p className={styles.headline}>Контакты</p>
							<p>
								<span>Мобильный:</span>{' '}
								<a href='tel:+998994766477'>
									+998 (99) 476 64 77
								</a>
							</p>
							<p>
								<span>Горячая линия:</span>{' '}
								<a href='tel:+998975700225'>
									+998 (97) 570 02 25
								</a>
							</p>
							<p>
								<span>
									Электронный адрес:{' '}
									<a href='mailto:mtajiboev@gmail.com'>
										mtajiboev@gmail
									</a>
								</span>
							</p>
						</div>
					</div>
					<div className={styles.info}>
						<IoTimeOutline size={32} />
						<div>
							<p className={styles.headline}>Время работы</p>
							<p>
								<span>Понедельник-Пятница:</span> 09:00 - 20:00
							</p>
							<p>
								<span>Субботник-Воскресенье:</span> 09:30 -
								20:30
							</p>
						</div>
					</div>
				</div>
				<div className={styles.mapWrapper}>
					<YMaps>
						<Map
							defaultState={{
								center: [41.32557, 69.294599],
								zoom: 13,
							}}
							width='auto'
							height='530px'>
							<Placemark
								geometry={[41.3207479456, 69.3002333068]}
							/>
						</Map>
					</YMaps>
				</div>
				<div className={styles.formWrapper}>
					<form>
						<h2>Отправить сообщение</h2>

						<div>
							<input
								type='text'
								name='name'
								id='name'
								placeholder='Полное имя'
							/>
							<input
								type='text'
								name='email'
								id='email'
								placeholder='Электронный адрес'
							/>
						</div>
						<textarea
							name='text'
							id='text'
							rows='10'
							placeholder='Текст сообщения'></textarea>
						<div>
							<input
								type='checkbox'
								name='agree'
								id='agree'
								defaultChecked
							/>
							<label htmlFor='agree'>
								Согласие на обработку персональных данных
							</label>
						</div>
						<button>Отправить</button>
					</form>
				</div>
			</Container>
			<Footer />
		</>
	)
}

export default Contact
