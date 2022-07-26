import React from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'
import styles from '../styles/backdrop.module.sass'

const Backdrop = () => {
	let show = useStoreState((state) => state.bagOpen)
	let close = useStoreActions((actions) => actions.toggleBag)
	return <div onClick={close} className={show && styles.backdrop}></div>
}

export default Backdrop
