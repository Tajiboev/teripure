import React from 'react'
import Container from './Container'
import styles from '../styles/footer.module.sass'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Container className={styles.footerWrapper}>
				<div>
					<h3>О компании</h3>
					<ul>
						<li>
							<p>Контактные данные:</p>
						</li>
						<li>
							<a href='tel:+998975700225'>+998 (97) 570 02 25</a>
						</li>
						<li>
							<a href='mailto:mtajiboev@teripure.com'>
								mtajiboev@teripure.com
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h3>Полезные ссылки</h3>
					<ul>
						<li>
							<a href='/'>Новые товары</a>
						</li>
						<li>
							<a href='/'>Хиты продаж</a>
						</li>
						<li>
							<a href='/'>Скидки</a>
						</li>
						<li>
							<a href='/'>Подарочная карта</a>
						</li>
					</ul>
				</div>
				<div>
					<h3>Информация</h3>
					<ul>
						<li>
							<a href='/'>Возврат товара</a>
						</li>
						<li>
							<a href='/'>Свяжитесь с нами</a>
						</li>
						<li>
							<a href='/'>Доставка</a>
						</li>
						<li>
							<a href='/'>Условия</a>
						</li>
						<li>
							<a href='/'>Политика конфиденциальности</a>
						</li>
					</ul>
				</div>
				<div>
					<h3>Сервис рассылки</h3>
					<p>
						Введите свой адрес электронной почты ниже, чтобы первыми
						узнавать о новых коллекциях.
					</p>
					<form>
						<div className={styles.email}>
							<input
								type='email'
								placeholder='Адрес электронной почты'
							/>
							<button type='submit'>Подписаться</button>
						</div>
					</form>
				</div>
			</Container>
			<Container className={styles.bottom}>
				<p>© Teripure 2022</p>
			</Container>
		</footer>
	)
}

export default Footer
