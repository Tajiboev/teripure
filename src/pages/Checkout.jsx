import React from 'react'
import Container from '../components/Container'
import styles from '../styles/checkout.module.sass'
import CreateOrder from './CreateOrder'
import BagSummary from '../components/BagSummary'
import Text from '../components/Text'

const Checkout = () => {
	return (
		<>
			<Container className={styles.wrapper}>
				<h1 className='text-center'>
					<Text ru='Оформить заказ' uz='Buyurtma berish'></Text>
				</h1>

				<div className={styles.innerWrap}>
					<section className={styles.left}>
						<CreateOrder />
						<p className={styles.dostavka}>
							<Text
								ru='В данный момент доставка работает только по городу
							Ташкент. Если вы хотите заказать за пределы
							Ташкента, напишите нам на Instagram канале '
								uz='Hozirda yetkazib berish faqat Toshkent shahri ichida mavjud. Agar siz boshqa viloyat/sharahga buyurtma berishni xohlasangiz, bizga quyidagi Instagram kanalida yozing: '></Text>
							<a
								href='https://instagram.com/teripure_uz'
								target='_blank'
								rel='noopener noreferrer'>
								@Teripure_uz
							</a>
							.{' '}
							<Text
								ru='Стоимость доставки зависит от расстояния и времени
							доставки товара.'
								uz="Yetkazib berish narxi, yetkazib berish masofasi va vaqtiga bog'liq."></Text>
						</p>
					</section>
					<section className={styles.right}>
						<BagSummary />
					</section>
				</div>
			</Container>
		</>
	)
}

export default Checkout
