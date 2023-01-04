import React from 'react'
import BootstrapContainer from 'react-bootstrap/Container'

const Container = ({ children, ...props }) => {
	return <BootstrapContainer {...props}>{children}</BootstrapContainer>
}

export default Container
