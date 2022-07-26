import React from 'react'
import Container from './Container'
import styles from '../styles/breadcumb.module.sass'
import { useLocation } from 'react-router-dom'

const Breadcumb = () => {
	let location = useLocation()
	console.log(location)
	return (
		<section className={styles.breadcumb}>
			<Container className='d-flex flex-center'>
				Current position - {location.pathname}
			</Container>
		</section>
	)
}

export default Breadcumb
