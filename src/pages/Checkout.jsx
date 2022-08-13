import React from 'react'
import Container from '../components/Container'
import styles from '../styles/checkout.module.sass'

import Backdrop from '../components/Backdrop'
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'
import ShoppingBag from '../components/ShoppingBag'
import Footer from '../components/Footer'
import CreateOrder from '../components/CreateOrder'
import BagSummary from '../components/BagSummary'

const Checkout = () => {
	return (
		<>
			<Backdrop />
			<header className='header'>
				<Topbar />
				<Navbar />
				<ShoppingBag />
			</header>
			<Container className={styles.wrapper}>
				<h1 className='text-center'>Оформить заказ</h1>

				<div className={styles.innerWrap}>
					<section className={styles.left}>
						<CreateOrder />
						<p className={styles.dostavka}>
							В данный момент доставка работает только по городу
							Ташкент. Если вы хотите заказать за пределы
							Ташкента, напишите нам на Instagram канале{' '}
							<a
								href='https://instagram.com/teripure_uz'
								target='_blank'
								rel='noopener noreferrer'>
								@Teripure_uz
							</a>
							. Стоимость доставки зависит от расстояния и времени
							доставки товара.
						</p>
					</section>
					<section className={styles.right}>
						<BagSummary />
					</section>
				</div>
			</Container>
			<Footer />
		</>
	)
}

export default Checkout
