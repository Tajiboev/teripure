import React from 'react'

const Button = ({
	children,
	loadingText = 'Загрузка...',
	isLoading = false,
	className,
}) => {
	return (
		<button className={className} disabled={isLoading}>
			{isLoading ? loadingText : children}
		</button>
	)
}

export default Button
