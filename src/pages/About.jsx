import React from 'react'
import Container from '../components/Container'

import styles from '../styles/about.module.sass'
import { Link } from 'react-router-dom'

// import image1 from '../images/image1.png'
import image2 from '../images/main.jpg'
import image3 from '../images/image2.png'
import Text from '../components/Text'

const About = () => {
	return (
		<>
			<Container>
				<div className={styles.hero}>
					<h2>
						<Text ru='О компании' uz='Kompaniya haqida' />
					</h2>
					<p>
						<Text
							ru='«ТериПюр» молодая компания в Узбекистане предлагающая
						знакомые эффективные технологии в области ухода за
						кожей. Бренд был основан, в целях создания комплексного
						и щадящего решения для проблемной кожи. Компания
						предлагает нашим клиентам решения для создания яркой,
						гладкой здоровой кожи без угрей, с постоянным чувством
						чистоты.'
							uz="TeriPure - terni parvarish qilish sohasida tanish va samarali texnologiyalarni taklif etuvchi O'zbekistondagi yosh kompaniya. Brend muammoli ter uchun keng qamrovli va yumshoq yechim yaratish maqsadida tashkil etilgan. Kompaniya mijozlarga doimiy tozalik hissi bilan yorqin, silliq, aknesiz sog'lom terini yaratish uchun yechimlarni taklif qiladi."
						/>
					</p>
				</div>

				<section className={styles.content}>
					<div className={styles.textWrapper}>
						<div>
							<h2>
								<Text ru='Продукт' uz='Mahsulot' />
							</h2>
							<p>
								<Text
									ru='Наш бренд создан с целью помочь нашим клиентам
						почувствовать здоровую и гладкую кожи без угрей.
						В 2022 году, был выпущен наш первый продукт по
						уходу за кожей TeriPure Maximum. Данный продукт
						прошел тестирование и испытания национальными
						технологами и дерматологами и рекомендован
						дерматологами Узбекистана для ухода за
						проблемной кожей и лечения угрей.'
									uz="Bizning brendimiz mijozlarimizga sog'lom, aknesiz, silliq terini his qilishlariga yordam berish maqsadida yaratilgan. 2022-yilda bizning terini parvarish qilish uchun birinchi mahsulotimiz TeriPure Maximum chiqarildi. Ushbu mahsulot milliy texnologlar va dermatologlar tomonidan sinovdan o'tgan va O'zbekiston dermatologlari tomonidan muammoli terini parvarish qilish va akne davolash uchun tavsiya etilgan."
								/>
							</p>
						</div>
					</div>
					<div className={styles.imageWrapper}>
						<img
							src={image2}
							alt='teripure'
							className='img-responsive'
						/>
					</div>
				</section>
				<section className={styles.content}>
					<div className={styles.imageWrapper}>
						<img
							src={image3}
							alt='teripure'
							className='img-responsive'
						/>
					</div>
					<div className={styles.textWrapper}>
						<div>
							<h2>
								<Text ru='Наша миссия' uz='Bizning vazifamiz' />
							</h2>
							<p>
								<Text
									ru='Мы привержены постоянному развитию коллекции
						продуктов, и в данный момент проводим испытания
						еще трех продуктов предназначенных для всех
						типов кожи. Основатель компании Зухра Ходжа
						Ахмедова, является дерматологом косметологом с
						обширным опытом в дерматологии как в Узбекистане
						так и зарубежном. В период работы с различными
						типами кожи, Зухра накопила знания необходимые
						для определения работающих рецептов и решений
						для проблемной кожи. Накопленный опыт и знания
						перешли в создания своей компании по
						производству продуктов для всех типов кожи.'
									uz="Biz mahsulot kolleksiyamizni doimiy ravishda rivojlantirishga sodiqmiz va hozirda barcha ter turlari uchun yana uchta mahsulotni sinovdan o'tkazmoqdamiz. Kompaniya asoschisi Zuxra Xo‘ja Axmedova O‘zbekistonda ham, xorijda ham dermatologiya bo‘yicha katta tajribaga ega dermatolog-kosmetolog hisoblanadi. Turli xil terilar bilan ishlash jarayonida Zuxra muammoli ter turlari uchun foydali retseptlar va yechimlarni aniqlash uchun zarur bo'lgan bilimlarni to'pladi. To'plangan tajriba va bilimlari barcha turdagi terlar uchun mahsulotlarni ishlab chiqarishga yo'naltirildi."
								/>
							</p>
						</div>
					</div>
				</section>
				<p className={styles.contactLink}>
					<Text
						ru='Если есть продукты по уходу за кожей, которые вы хотели бы
						видеть в ассортименте ТериПюр, свяжитесь с нами '
						uz="Agar siz TeriPure assortimentida ko'rishni hohlagan terni parvarishlovchi vositalar mavjud bo'lsa, "
					/>
					<Link to='/contact-us'>
						<Text ru='здесь' uz="biz bilan bu yerda bog'laning" />
					</Link>
					.
				</p>
			</Container>
		</>
	)
}

export default About
