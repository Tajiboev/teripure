import React from 'react'
import Container from 'react-bootstrap/Container'
import { Outlet } from 'react-router-dom'

const Orders = () => {
	return (
		<>
			<Container>
				<Outlet />
			</Container>
		</>
	)
}

export default Orders
