import { useRef } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import styles from '../styles/orders.module.sass'
import { useNavigate } from 'react-router-dom'
import Text from '../components/Text'
import { useStoreState } from 'easy-peasy'

const Orders = () => {
	let inputRef = useRef()
	let formRef = useRef()
	const navigate = useNavigate()
	const onSubmit = (e) => {
		e.preventDefault()
		navigate(`/orders/${inputRef.current.value}`)
	}

	const lang = useStoreState((state) => state.displayLanguage)

	return (
		<>
			<Container>
				<Form onSubmit={onSubmit} ref={formRef} className={styles.form}>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>
							<Text ru='Номер заказа' uz='Buyurtma raqami'></Text>
						</Form.Label>
						<Form.Control
							type='text'
							placeholder={
								lang === 'ru'
									? 'Введите номер заказа'
									: 'Buyurtma raqamini kiriting'
							}
							required
							ref={inputRef}
						/>
					</Form.Group>
					<Button variant='dark' type='submit'>
						<Text
							ru='Получить информацию о заказе'
							uz="Ma'lumot olish"></Text>
					</Button>
				</Form>
			</Container>
		</>
	)
}

export default Orders
