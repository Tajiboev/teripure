import React from 'react'
import styles from '../styles/container.module.sass'

const Container = ({ className = '', children }) => {
	return <div className={styles.container + ' ' + className}>{children}</div>
}

export default Container
