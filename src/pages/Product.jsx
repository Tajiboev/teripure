import React from 'react'
import Container from '../components/Container'
import styles from '../styles/product.module.sass'
import image from '../images/image1.png'
import image2 from '../images/main.jpg'
import image3 from '../images/image2.png'
import image4 from '../images/image3.png'
import ProductInfo from '../components/ProductInfo'
import FAQS from '../components/DisplayFAQS'
import Reviews from '../components/Reviews'
import { Helmet } from 'react-helmet'
import Text from '../components/Text'

const Product = () => {
	return (
		<>
			<Helmet>
				<title>
					Салфетки Teripure - Заказать ватные диски для ухода за лицом
				</title>
			</Helmet>
			<section className='section'>
				<Container>
					<section className={styles.productInfo}>
						<div className={styles.withLogo}>
							<img
								src={image2}
								alt='first'
								className='img-responsive'
							/>
							<img
								src={image3}
								alt='first'
								className='img-responsive'
							/>
							<img
								src={image4}
								alt='first'
								className='img-responsive'
							/>
						</div>
						<div
							className={styles.withImage}
							style={{ backgroundImage: `url(${image})` }}></div>
						<ProductInfo />
					</section>
					<section className={styles.details}>
						<div className={styles.navigation}>
							<h5>
								<b>
									<Text
										ru='Детали продукта TeriPure Maximum'
										uz='TeriPure Maximum mahsulot tafsilotlari'
									/>
								</b>
							</h5>
							<ul>
								<li>
									- <Text ru='Технология' uz='Tehnologiya' />
								</li>
								<li>
									-{' '}
									<Text
										ru='Рекомендация по применению'
										uz="Qo'llash bo'yicha tavsiyalar"
									/>
								</li>
								<li>
									- <Text ru='Состав' uz='Tarkibi' />
								</li>
							</ul>
						</div>
						<div className={styles.content}>
							<div className={styles.detail}>
								<h5>
									<b>
										<Text
											ru='Технология'
											uz='Tehnologiya'
										/>
									</b>
								</h5>
								<p>
									<Text
										ru='TeriPure Maximum это ватные диски которые
									содержат салициловую кислоту и имеют
									кератолический эффект. Продукт разработан
									для всех типов кожи. Удаляет омертвевшие
									клетки кожи, которые могут способствовать
									закупорке пор, обеспечивая чистоту кожи при
									постоянном использовании.'
										uz="TeriPure Maximum - salitsil kislotasini o'z ichiga olgan va keratolik ta'sirga ega bo'lgan paxta yostig'chalari. Mahsulot barcha teri turlari uchun mo'ljallangan. Teshiklarning tiqilib qolishiga hissa qo'shishi mumkin bo'lgan o'lik teri hujayralarini olib tashlaydi va doimiy foydalanish bilan terini toza qiladi."
									/>
								</p>
							</div>
							<div className={styles.detail}>
								<br />
								<h5>
									<b>
										<Text
											ru='Рекомендация по применению'
											uz="Qo'llash bo'yicha tavsiyalar"
										/>
									</b>
								</h5>
								<p>
									<Text
										ru='Вымойте кожу перед применением. Вытирайте
									салфеткой весь пораженный участок от один
									раз перед сном до трех раз в день. Вымойте
									руки после применения. Не используйте на
									чувствительной, шелушащейся или поврежденной
									коже. Избегайте контакта с глазами. Если у
									вас появилось раздражение, крапивница,
									смойте средства с кожи и обратитесь к врачу.
									Использование другого средства от угревой
									сыпи одновременно с использованием данного
									продукта или сразу после его использования
									может привести к увеличению сухости и
									раздражения кожи. В таком случае необходимо
									остановиться на одном средстве, если иное не
									рекомендовано врачом.'
										uz="Ishlatishdan oldin terini yuving. Kuniga uch marta yotishdan oldin butun zararlangan hududni ro'molcha bilan artib oling. Qo'llashdan keyin qo'lingizni yuving. Nozik, xiralashgan yoki singan teriga ishlatmang. Ko'z bilan aloqa qilishdan saqlaning. Agar sizda tirnash xususiyati, ürtiker paydo bo'lsa, teridan mahsulotlarni yuving va shifokor bilan maslahatlashing. Ushbu mahsulotni ishlatish bilan bir vaqtda yoki undan keyin darhol boshqa akne davolashni qo'llash terining quruqligi va tirnash xususiyati kuchayishiga olib kelishi mumkin. Bunday holatda, agar shifokor boshqacha tavsiya qilmasa, bitta vositada to'xtash kerak."
									/>
								</p>
							</div>
							<div className={styles.detail}>
								<br />
								<h5>
									<b>
										<Text ru='Состав' uz='Tarkibi' />
									</b>
								</h5>
								<p>
									<Text
										ru='В салфетках TeriPure совсем не содержит
									спирта и эффективно действуют против угрей,
									не оставляя ожогов и подходят для любых
									типов кожи. Активный компонент Салициловая
									кислота 2,0%. Неактивные ингредиенты:
									очищенная вода, лаурилсульфат аммония,
									ксиленсульфонат аммония, лимонная кислота,
									этилгексилглицерин, ароматизатор, ментол,
									феноксиэтанол, симетикон, борат натрия,
									тетранатрий ЭДТА'
										uz="TeriPure salfetkalarida umuman alkogol yo'q va kuyish qoldirmasdan akne qarshi samarali va barcha teri turlariga mos keladi. Faol modda salitsil kislotasi 2,0%. Faol bo'lmagan ingredientlar: tozalangan suv, ammoniy lauril sulfat, ammoniy ksilen sulfonat, limon kislotasi, etilgeksilgliserin, lazzat, mentol, fenoksietanol, simetikon, natriy borat, tetrasodyum EDTA"
									/>
								</p>
							</div>
						</div>
					</section>
					<section className={styles.details}>
						<div className={styles.navigation}>
							<h5>
								<b>
									<Text
										ru='Часто задаваемые вопросы'
										uz="Ko'p so'raladigan savollar"
									/>
								</b>
							</h5>
							<ul>
								<li>
									- <Text ru='Контакты' uz='Kontaktlar' />
								</li>
								<li>
									- <Text ru='Продукт' uz='Mahsulot' />
								</li>
								<li>
									-{' '}
									<Text ru='Доставка' uz='Yetkazib berish' />
								</li>
								<li>
									- <Text ru='Возврат' uz='Qaytarish' />
								</li>
								<li>
									- <Text ru='Заказ' uz='Buyurtma' />
								</li>
							</ul>
						</div>
						<div className={styles.content}>
							<FAQS />
						</div>
					</section>
					<section className={styles.details} id='reviews'>
						<div className={styles.navigation}>
							<h5>
								<b>
									<Text
										ru='Отзывы клиентов'
										uz='Mijozlarning sharhlari'
									/>
								</b>
							</h5>
						</div>
						<div className={styles.content}>
							<Reviews />
						</div>
					</section>
				</Container>
			</section>
		</>
	)
}

export default Product
