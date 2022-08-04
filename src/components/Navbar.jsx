import React from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'
import styles from '../styles/navbar.module.sass'

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<Container className={styles.wrapper}>
				<ul className='d-flex'>
					<li>
						<Link className={styles.navlink} to='/'>
							Главная
						</Link>
					</li>
					<li>
						<Link className={styles.navlink} to='/o-nas'>
							О нас
						</Link>
					</li>
					<li>
						<Link className={styles.navlink} to='/otzivi'>
							Отзывы
						</Link>
					</li>
					<li>
						<Link className={styles.navlink} to='/kontakti'>
							Контакты
						</Link>
					</li>
					<li>
						<Link className={styles.navlink} to='/admin'>
							Admin <i>test mode</i>
						</Link>
					</li>
				</ul>
			</Container>
		</nav>
	)
}

export default Navbar
