import { useRef, useState } from 'react'
import styles from '../styles/checkout.module.sass'
import axios from 'axios'
import { useStoreState } from 'easy-peasy'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion'
import Text from '../components/Text'
import { toast } from 'react-toastify'

const CreateOrder = () => {
	let navigate = useNavigate()
	let itemsInBag = useStoreState((state) => state.itemsInBag)
	const lang = useStoreState((state) => state.displayLanguage)

	const form = useRef(null)
	const name = useRef(null)
	const phoneNumber = useRef(null)
	const city = useRef(null)
	const district = useRef(null)
	const street = useRef(null)
	const dom = useRef(null)
	const kvartira = useRef(null)
	const coupon = useRef(null)

	const [isSending, setIsSending] = useState(false)

	const createOrder = async (e) => {
		e.preventDefault()
		setIsSending(true)
		let formData = {
			product: '630c57f39d64102d54877f6c',
			quantity: itemsInBag,
			name: name.current.value,
			phoneNumber: phoneNumber.current.value,
			address: [
				city.current.value,
				district.current.value,
				street.current.value,
				dom.current.value,
				kvartira.current.value,
			].join(', '),
			coupon: coupon.current?.value || '',
		}

		const alert = {
			pending:
				lang === 'ru'
					? 'Оформляем заказ...'
					: 'Buyurtma yozib olinmoqda...',
			success:
				lang === 'ru' ? 'Спасибо за заказ!' : 'Buyurtma uchun rahmat!',
			error:
				lang === 'ru'
					? 'Извините, произошла ошибка!'
					: 'Kechirasiz, xatolik yuz berdi!',
		}

		try {
			const result = await toast.promise(
				axios.post(
					'https://teripure-server.onrender.com/orders',
					formData
				),
				{
					pending: alert.pending,
					success: alert.success,
					error: alert.error,
				}
			)
			navigate(`/orders/${result.data._id}`)
		} catch (e) {
			console.log(e)
		} finally {
			form.current.reset()
			setIsSending(false)
		}
	}
	return (
		<form ref={form} className={styles.form} onSubmit={createOrder}>
			<Accordion
				allowZeroExpanded={false}
				allowMultipleExpanded={false}
				preExpanded={[1]}>
				<AccordionItem uuid={1} className={styles.item}>
					<AccordionItemHeading>
						<AccordionItemButton>
							<h4 className={styles.heading}>
								<Text
									ru='Контактные данные'
									uz="Bog'lanish uchun ma'lumotlar"></Text>
							</h4>
						</AccordionItemButton>
					</AccordionItemHeading>
					<AccordionItemPanel className={styles.panel}>
						<fieldset>
							<label htmlFor='name'>
								<Text
									ru='Полное имя'
									uz="To'liq ismingiz"></Text>
							</label>
							<input
								type='text'
								name='name'
								id='name'
								required
								ref={name}
							/>
						</fieldset>
						<fieldset>
							<label htmlFor='phoneNumber'>
								<Text
									ru='Номер телефона'
									uz='Telefon raqamingiz'></Text>
							</label>
							<input
								type='tel'
								name='phoneNumber'
								id='phoneNumber'
								pattern='^\+998[0-9]{9}$'
								title='Неверный формат номера телефона'
								required
								ref={phoneNumber}
							/>
						</fieldset>
					</AccordionItemPanel>
				</AccordionItem>
				<AccordionItem uuid={2} className={styles.item}>
					<AccordionItemHeading>
						<AccordionItemButton>
							<h4 className={styles.heading}>
								<Text
									ru='Доставка'
									uz="Yetkazib berish uchun ma'lumotlar"></Text>
							</h4>
						</AccordionItemButton>
					</AccordionItemHeading>
					<AccordionItemPanel className={styles.panel}>
						<fieldset>
							<label htmlFor='city'>
								<Text ru='Город' uz='Shahar'></Text>
							</label>
							<input
								type='text'
								name='city'
								id='city'
								defaultValue='Ташкент'
								ref={city}
								readOnly
							/>
						</fieldset>
						<fieldset>
							<label htmlFor='district'>
								<Text ru='Район' uz='Tuman'></Text>
							</label>
							<input
								type='text'
								name='district'
								id='district'
								list='districts'
								ref={district}
								required
							/>
							<datalist id='districts'>
								<option value='Алмазар'></option>
								<option value='Бектемир'></option>
								<option value='Мирабад'></option>
								<option value='Мирзо-Улугбек'></option>
								<option value='Сергели'></option>
								<option value='Чиланзар'></option>
								<option value='Шайхантаур'></option>
								<option value='Юнусабад'></option>
								<option value='Яккасарай'></option>
								<option value='Яшнабад'></option>
								<option value='Учтепа'></option>
							</datalist>
						</fieldset>
						<fieldset>
							<label htmlFor='street'>
								<Text ru='Улица' uz="Ko'cha"></Text>
							</label>
							<input
								type='text'
								name='street'
								id='street'
								required
								ref={street}
							/>
						</fieldset>
						<fieldset>
							<label htmlFor='dom'>
								<Text ru='Дом' uz='Uy raqami'></Text>
							</label>
							<input
								type='number'
								name='dom'
								id='dom'
								min={1}
								required
								ref={dom}
							/>
						</fieldset>
						<fieldset>
							<label htmlFor='kvartira'>
								<Text ru='Квартира' uz='Xonadon raqami'></Text>
							</label>
							<input
								type='number'
								name='kvartira'
								id='kvartira'
								min={1}
								required
								ref={kvartira}
							/>
						</fieldset>
					</AccordionItemPanel>
				</AccordionItem>
				<AccordionItem uuid={3} className={styles.item}>
					<AccordionItemHeading>
						<AccordionItemButton>
							<h4 className={styles.heading}>
								<Text
									ru='Скидочный купон'
									uz='Chegirma kuponi'></Text>
							</h4>
						</AccordionItemButton>
					</AccordionItemHeading>
					<AccordionItemPanel className={styles.panel}>
						<fieldset>
							<label htmlFor='coupon'>
								<Text
									ru='Код скидочного купона'
									uz='Chegirma kuponi kodi'></Text>
							</label>
							<input
								type='text'
								name='coupon'
								id='coupon'
								ref={coupon}
							/>
						</fieldset>
					</AccordionItemPanel>
				</AccordionItem>
			</Accordion>

			<Button
				className={styles.orderButton}
				isLoading={isSending}
				variant='dark'
				type='submit'
				loadingText='Оформляем заказ...'>
				<Text ru='Оформить заказ' uz='Buyurtmani tasdiqlash'></Text>
			</Button>
		</form>
	)
}

export default CreateOrder
