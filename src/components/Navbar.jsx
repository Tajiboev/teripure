import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from './Container'
import styles from '../styles/navbar.module.sass'
import { NavHashLink } from 'react-router-hash-link'

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<Container className={styles.wrapper}>
				<ul>
					<li>
						<NavLink className={styles.navlink} to='/'>
							Главная
						</NavLink>
					</li>
					<li>
						<NavLink className={styles.navlink} to='/about-us'>
							О нас
						</NavLink>
					</li>
					<li>
						<NavHashLink
							className={styles.navlink}
							to='/product#reviews'>
							Отзывы
						</NavHashLink>
					</li>
					<li>
						<NavLink className={styles.navlink} to='/contact-us'>
							Контакты
						</NavLink>
					</li>
					<li>
						<NavLink className={styles.navlink} to='/orders'>
							Мои заказы
						</NavLink>
					</li>
				</ul>
			</Container>
		</nav>
	)
}

export default Navbar
