import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from './Container'
import styles from '../styles/navbar.module.sass'

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<Container className={styles.wrapper}>
				<ul className='d-flex'>
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
						<NavLink className={styles.navlink} to='/reviews'>
							Отзывы
						</NavLink>
					</li>
					<li>
						<NavLink className={styles.navlink} to='/contact-us'>
							Контакты
						</NavLink>
					</li>
					<li>
						<NavLink className={styles.navlink} to='/admin'>
							Админ{' '}
							<sup>
								<i>test</i>
							</sup>
						</NavLink>
					</li>
				</ul>
			</Container>
		</nav>
	)
}

export default Navbar
