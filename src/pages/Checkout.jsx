import React, { useRef } from 'react'
import Container from '../components/Container'
import styles from '../styles/checkout.module.sass'
import ProductImage from '../images/image3.png'
import { useStoreState } from 'easy-peasy'
import axios from 'axios'
import Backdrop from '../components/Backdrop'
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'
import ShoppingBag from '../components/ShoppingBag'
import Footer from '../components/Footer'

const Checkout = () => {
	let itemsInBag = useStoreState((state) => state.itemsInBag)
	let price = useStoreState((state) => state.price)
	const form = useRef(null)
	const name = useRef(null)
	const phoneNumber = useRef(null)
	const street = useRef(null)
	const house = useRef(null)
	const apt = useRef(null)

	const submit = function (e) {
		e.preventDefault()
		let formData = {
			name: name.current.value,
			phoneNumber: phoneNumber.current.value,
			address: [
				street.current.value,
				house.current.value,
				apt.current.value,
			].join(', '),
			quantity: itemsInBag,
			product: '62e67e83e2f38321945f2c60',
		}
		axios
			.post('https://obscure-beach-21124.herokuapp.com/orders', formData)
			.then((result) => {
				console.log(result)
				alert('Заказ оформлен! Спасибо!')
				form.current.reset()
			})
			.catch((e) => {
				console.log(e.message)
				alert('Заказ не был оформлен!')
			})
	}

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
						<p className={styles.textLead}></p>
						<form
							className={styles.form}
							onSubmit={submit}
							ref={form}>
							<section className={'d-flex ' + styles.top}>
								<div className={styles.name}>
									<label htmlFor='fullName'>
										Имя и фамилия
									</label>
									<input
										type='text'
										name='fullName'
										id='fullName'
										ref={name}
										required
									/>
								</div>
								<div className={styles.phone}>
									<label htmlFor='phoneNumber'>
										Номер телефона
									</label>
									<input
										type='tel'
										name='phoneNumber'
										id='phoneNumber'
										ref={phoneNumber}
										required
									/>
								</div>
							</section>
							<section className={'d-flex ' + styles.bottom}>
								<div className={styles.street}>
									<label htmlFor='street'>Улица</label>
									<input
										type='text'
										name='street'
										id='street'
										ref={street}
										required
									/>
								</div>
								<div className={styles.house}>
									<label htmlFor='house'>Дом</label>
									<input
										type='number'
										min={1}
										name='house'
										id='house'
										ref={house}
										required
									/>
								</div>
								<div className={styles.apartment}>
									<label htmlFor='apartment'>Квартира</label>
									<input
										type='number'
										min={1}
										name='apartment'
										id='apartment'
										ref={apt}
										required
									/>
								</div>
							</section>
							<section className={styles.checkbox}>
								<input
									type='checkbox'
									name='consent'
									id='consent'
									checked
									readOnly
								/>
								<label htmlFor='consent'>
									Согласие на обработку персональных данных
								</label>
							</section>
							<section>
								<button className={styles.orderButton}>
									Оформить заказ
								</button>
								<p className={styles.dostavka}>
									В данный момент доставка работает только по
									городу Ташкент. Если вы хотите заказать за
									пределы Ташкента, напишите нам на Instagram
									канале{' '}
									<a
										href='https://instagram.com/teripure_uz'
										target='_blank'
										rel='noopener noreferrer'>
										@Teripure_uz
									</a>
									. Стоимость доставки зависит от расстояния и
									времени доставки товара.
								</p>
							</section>
						</form>
					</section>
					<section className={styles.right}>
						<div className={styles.card}>
							<h4>Итог заказа</h4>
							<div className={styles.withImage}>
								<div className={styles.image}>
									<img
										src={ProductImage}
										alt='product'
										className={'img-responsive'}
									/>
								</div>
								<div className={styles.info}>
									<p>Teripure Maximum</p>
									<p>
										Количество: <span>{itemsInBag}</span>
									</p>
								</div>
								<p className={styles.price}>
									<b>{price} сум</b>
								</p>
							</div>
							<div className={styles.subtotal}>
								<div className='d-flex'>
									<p>Сумма:</p>
									<p>{price * itemsInBag} сум</p>
								</div>
								<div className='d-flex'>
									<p>Доставка:</p>
									<p>Оплачивается отдельно</p>
								</div>
							</div>
							<div className={styles.total}>
								<div className='d-flex'>
									<p>Общая сумма:</p>
									<p>{price * itemsInBag} сум</p>
								</div>
							</div>
						</div>
					</section>
				</div>
			</Container>
			<Footer />
		</>
	)
}

export default Checkout
