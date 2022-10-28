import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from './Container'
import styles from '../styles/navbar.module.sass'
import { NavHashLink } from 'react-router-hash-link'
import Text from './Text'
import { useStoreState } from 'easy-peasy'

const Navbar = () => {
	const language = useStoreState((state) => state.displayLanguage)
	return (
		<nav className={styles.navbar}>
			<Container className={styles.wrapper}>
				<ul>
					<li>
						<NavLink className={styles.navlink} to='/'>
							<Text lang={language} ru='Главная' uz='Asosiy' />
						</NavLink>
					</li>
					<li>
						<NavLink className={styles.navlink} to='/about-us'>
							<Text
								lang={language}
								ru='О нас'
								uz='Biz haqimizda'
							/>
						</NavLink>
					</li>
					<li>
						<NavHashLink
							className={styles.navlink}
							to='/product#reviews'>
							<Text lang={language} ru='Отзывы' uz='Sharhlar' />
						</NavHashLink>
					</li>
					<li>
						<NavLink className={styles.navlink} to='/contact-us'>
							<Text
								lang={language}
								ru='Контакты'
								uz='Kontaktlar'
							/>
						</NavLink>
					</li>
					<li>
						<NavLink className={styles.navlink} to='/orders'>
							<Text
								lang={language}
								ru='Мои заказы'
								uz='Mening buyurtmalarim'
							/>
						</NavLink>
					</li>
				</ul>
			</Container>
		</nav>
	)
}

export default Navbar
