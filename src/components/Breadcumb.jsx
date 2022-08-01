import React from 'react'
import Container from './Container'
import styles from '../styles/breadcumb.module.sass'
import { useLocation } from 'react-router-dom'

const Breadcumb = () => {
	let location = useLocation().pathname.replace('/', '')
	let printLocation = location.charAt(0).toUpperCase() + location.slice(1)

	return (
		<section className={styles.breadcumb}>
			<Container className='d-flex flex-center'>
				Home - {printLocation}
			</Container>
		</section>
	)
}

export default Breadcumb
