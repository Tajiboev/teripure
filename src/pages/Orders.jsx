import { useRef } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import styles from '../styles/orders.module.sass'
import { useNavigate } from 'react-router-dom'

const Orders = () => {
	let inputRef = useRef()
	let formRef = useRef()
	const navigate = useNavigate()
	const onSubmit = (e) => {
		e.preventDefault()
		navigate(`/orders/${inputRef.current.value}`)
	}

	return (
		<>
			<Container>
				<Form onSubmit={onSubmit} ref={formRef} className={styles.form}>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>Номер заказа</Form.Label>
						<Form.Control
							type='text'
							placeholder='Введите номер заказа'
							ref={inputRef}
						/>
					</Form.Group>
					<Button variant='dark' type='submit'>
						Получить информацию о заказе
					</Button>
				</Form>
			</Container>
		</>
	)
}

export default Orders
