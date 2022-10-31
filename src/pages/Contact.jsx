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
import Text from '../components/Text'
import { useStoreState } from 'easy-peasy'

const Contact = () => {
	const lang = useStoreState((state) => state.displayLanguage)
	return (
		<>
			<Container>
				<div className={styles.hero}>
					<h1>
						<Text
							lang={lang}
							ru='Оставайтесь с нами на связи'
							uz="Biz bilan aloqada bo'ling"
						/>
					</h1>
					<h2>
						<Text
							lang={lang}
							ru='Мы здесь, чтобы помочь и ответить на любой ваш вопрос.'
							uz='Biz yordam berish va har qanday savolingizga javob berish uchun shu yerdamiz.'
						/>

						<br />
						<Text
							lang={lang}
							ru='Мы с нетерпением ждем услышать от вас'
							uz='Sizdan xabar kutib qolamiz'
						/>
					</h2>
				</div>
				<div className={styles.infoWrapper}>
					<div className={styles.info}>
						<IoLocationOutline />
						<div>
							<p className={styles.headline}>
								<Text lang={lang} ru='Адрес' uz='Manzil' />
							</p>
							<address>
								<Text
									lang={lang}
									ru='Бизнес-центр "Инконель"'
									uz='"Inkonel" biznes markazi"'
								/>
								<br />
								<Text
									lang={lang}
									ru='75, проспект Мустакиллик'
									uz="75, Mustaqillik shox ko'chasi"
								/>
								<br />
								<Text
									lang={lang}
									ru='Ташкент, Узбекистан'
									uz="Toshkent, O'zbekiston"
								/>
								<br />
								100000
							</address>
						</div>
					</div>
					<div className={styles.info}>
						<IoCallOutline />
						<div>
							<p className={styles.headline}>
								<Text
									lang={lang}
									ru='Контакты'
									uz='Kontaktlar '
								/>
							</p>
							<p>
								<span>
									<Text
										lang={lang}
										ru='Мобильный:'
										uz='Mobil:'
									/>
								</span>{' '}
								<a href='tel:+998994766477'>
									+998 (99) 476 64 77
								</a>
							</p>
							<p>
								<span>
									<Text
										lang={lang}
										ru='Горячая линия:'
										uz='Ishonch raqami:'
									/>
								</span>{' '}
								<a href='tel:+998975700225'>
									+998 (97) 570 02 25
								</a>
							</p>
							<p>
								<span>
									<Text
										lang={lang}
										ru='Электронный адрес:'
										uz='Elektron manzil:'
									/>

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
										teripure_uz
									</a>
								</span>
							</p>
						</div>
					</div>
					<div className={styles.info}>
						<IoTimeOutline />
						<div>
							<p className={styles.headline}>
								<Text
									lang={lang}
									ru='Время работы:'
									uz='Ish vaqti:'
								/>
							</p>
							<p>
								<span>
									<Text
										lang={lang}
										ru='Понедельник-Пятница:'
										uz='Dushanba-Juma:'
									/>
								</span>{' '}
								09:00 - 20:00
							</p>
							<p>
								<span>
									<Text
										lang={lang}
										ru='Суббота-Воскресенье:'
										uz='Shanba-Yakshanba:'
									/>
								</span>{' '}
								09:30 - 20:30
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
