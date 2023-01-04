import React from 'react'
import Container from './Container'
import styles from '../styles/navbar.module.sass'
import { NavHashLink } from 'react-router-hash-link'
import Text from './Text'

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<Container className={styles.wrapper}>
				<ul>
					<li>
						<NavHashLink className={styles.navlink} to='/'>
							<Text ru='Главная' uz='Asosiy' />
						</NavHashLink>
					</li>
					<li>
						<NavHashLink className={styles.navlink} to='/about-us'>
							<Text ru='О нас' uz='Biz haqimizda' />
						</NavHashLink>
					</li>
					<li>
						<NavHashLink
							className={styles.navlink}
							to='/product#reviews'>
							<Text ru='Отзывы' uz='Sharhlar' />
						</NavHashLink>
					</li>
					<li>
						<NavHashLink
							className={styles.navlink}
							to='/contact-us'>
							<Text ru='Контакты' uz='Kontaktlar' />
						</NavHashLink>
					</li>
					<li>
						<NavHashLink className={styles.navlink} to='/orders'>
							<Text ru='Мои заказы' uz='Mening buyurtmalarim' />
						</NavHashLink>
					</li>
				</ul>
			</Container>
		</nav>
	)
}

export default Navbar
