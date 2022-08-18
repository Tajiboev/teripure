import React from 'react'
import BButton from 'react-bootstrap/Button'

const Button = ({
	children,
	loadingText = 'Загрузка...',
	isLoading = false,
	...props
}) => {
	return (
		<BButton disabled={isLoading} {...props}>
			{isLoading ? loadingText : children}
		</BButton>
	)
}

export default Button
