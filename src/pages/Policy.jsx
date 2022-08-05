import React from 'react'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import ShoppingBag from '../components/ShoppingBag'
import Topbar from '../components/Topbar'
import Backdrop from '../components/Backdrop'
import Breadcrumb from '../components/Breadcrumb'

import styles from '../styles/about.module.sass'
import { Link } from 'react-router-dom'

import Footer from '../components/Footer'

const Policy = () => {
	return (
		<>
			<Backdrop />
			<header className='header'>
				<Topbar />
				<Navbar />
				<ShoppingBag />
			</header>
			<Breadcrumb />
			<Container>
				<div className={styles.hero}>
					<h2>О компании</h2>
					<p></p>
				</div>
			</Container>
			<Footer></Footer>
		</>
	)
}

export default Policy
