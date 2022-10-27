import React from 'react'
import Instagram from '../images/instagram.png'
import Container from '../components/Container'

import {
	IoLocationOutline,
	IoCallOutline,
	IoTimeOutline,
} from 'react-icons/io5'

import { YMaps, Map, Placemark } from 'react-yandex-maps'

import styles from '../styles/contact.module.sass'

import SendMessage from '../components/SendMessage'

const Contact = () => {
	return (
		<>
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
						<IoLocationOutline />
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
						<IoCallOutline />
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
										mtajiboev@teripure.uz
									</a>
								</span>
							</p>
							<p>
								<span>
									<img
										src={Instagram}
										alt='instagram'
										width={18}
										style={{
											marginRight: '4px',
											marginBottom: '1px',
										}}
									/>
									<a
										href='https://instagram.com/teripure_uz'
										target='_blank'
										rel='noopener noreferrer'>
										@teripure_uz
									</a>
								</span>
							</p>
						</div>
					</div>
					<div className={styles.info}>
						<IoTimeOutline />
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
							className={styles.map}>
							<Placemark
								geometry={[41.3207479456, 69.3002333068]}
							/>
						</Map>
					</YMaps>
				</div>
				<SendMessage />
			</Container>
		</>
	)
}

export default Contact
