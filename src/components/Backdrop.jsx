import React from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'
import styles from '../styles/backdrop.module.sass'

const Backdrop = () => {
	let show = useStoreState((state) => state.bagOpen)
	let close = useStoreActions((actions) => actions.toggleBag)
	if (show) {
		return (
			<div onClick={close} className={show ? styles.backdrop : ''}></div>
		)
	}
	return <></>
}

export default Backdrop
