import React from 'react'
import ContainerB from 'react-bootstrap/Container'

const Container = ({ children, ...props }) => {
	return <ContainerB {...props}>{children}</ContainerB>
}

export default Container
