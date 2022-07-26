import React from 'react'
import Container from '../components/Container'
import styles from '../styles/checkout.module.sass'

import ProductImage from '../images/image3.png'
import { useStoreState } from 'easy-peasy'
import Breadcumb from '../components/Breadcumb'

const Checkout = () => {
	let itemsInBag = useStoreState((state) => state.itemsInBag)
	let price = useStoreState((state) => state.price)

	return (
		<>
			<Breadcumb />
			<Container className={styles.wrapper}>
				<h1 className='text-center'>Оформить заказ</h1>
				<div className={styles.innerWrap}>
					<section className={styles.left}>
						<p className={styles.textLead}></p>
						<form className={styles.form}>
							<section className={'d-flex ' + styles.top}>
								<div className={styles.name}>
									<label htmlFor='fullName'>
										Имя и фамилия
									</label>
									<input
										type='text'
										name='fullName'
										id='fullName'
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
									/>
								</div>
								<div className={styles.house}>
									<label htmlFor='house'>Дом</label>
									<input
										type='number'
										min={1}
										name='house'
										id='house'
									/>
								</div>
								<div className={styles.apartment}>
									<label htmlFor='apartment'>Квартира</label>
									<input
										type='number'
										min={1}
										name='apartment'
										id='apartment'
									/>
								</div>
							</section>
							<section className={styles.checkbox}>
								<input
									type='checkbox'
									name='consent'
									id='consent'
								/>
								<label htmlFor='consent'>
									Согласие на обработку персональных данных
								</label>
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
									<p>0 сум</p>
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
		</>
	)
}

export default Checkout
