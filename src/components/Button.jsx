import React from 'react'
import BootstrapButton from 'react-bootstrap/Button'

const Button = ({
	children,
	loadingText = 'Загрузка...',
	isLoading = false,
	...props
}) => {
	return (
		<BootstrapButton disabled={isLoading} {...props}>
			{isLoading ? loadingText : children}
		</BootstrapButton>
	)
}

export default Button
