import React from 'react'
import Container from '../components/Container'
import styles from '../styles/topbar.module.sass'
import { IoEarthOutline, IoBagOutline } from 'react-icons/io5'

import { useStoreActions, useStoreState } from 'easy-peasy'
import Text from '../components/Text'

const Topbar = () => {
	const changeLang = useStoreActions((actions) => actions.changeLanguage)
	const itemsInBag = useStoreState((state) => state.itemsInBag)
	const toggleBag = useStoreActions((actions) => actions.toggleBag)

	return (
		<section className={styles.topbar}>
			<Container className={styles.wrapper}>
				<div className={styles.promo}>
					<Text
						ru='Доставка по Ташкенту в течении 2 дней'
						uz="Toshkent shahri bo'yicha yetkazib berish bepul"
					/>
				</div>
				<div className={'d-flex ' + styles.utils}>
					<button
						className={'d-flex ' + styles.button}
						onClick={toggleBag}>
						<IoBagOutline className='react-icons' size={20} />
						<sup>{itemsInBag ? itemsInBag : null}</sup>
					</button>
					<button
						className={'d-flex ' + styles.button}
						onClick={changeLang}>
						<IoEarthOutline className='react-icons' size={20} />
						<span>
							<Text ru='Русский' uz="O'zbekcha" />
						</span>
					</button>
				</div>
			</Container>
		</section>
	)
}

export default Topbar
