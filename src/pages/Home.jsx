import React from 'react'
import styles from '../styles/home.module.sass'
import Container from '../components/Container'

import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import image4 from '../images/image4.png'
import logo from '../images/logo.png'

import icon from '../images/arrowIcon.svg'
import mainImage from '../images/main.jpg'

import { Link } from 'react-router-dom'
import { useStoreState } from 'easy-peasy'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Text from '../components/Text'

const Home = () => {
	let language = useStoreState((state) => state.displayLanguage)
	return (
		<>
			<section className={'section ' + styles.hero}>
				<Container className={'d-flex ' + styles.heroWrapper}>
					<Row>
						<Col
							md
							lg={6}
							className={'mb-4 mb-sm-0 ' + styles.heroLeft}>
							<img src={logo} alt='Teripure' />
							<h2>
								<Text
									lang={language}
									ru='Думаете о чистой и здоровой коже, когда смотрите на себя в зеркало? Подумайте о Teripure.'
									uz="O'zingizga oynaga qaraganingizda toza va sog'lom ter haqida o'ylaysizmi? Teripurni o'ylab ko'ring."></Text>
							</h2>
							<p>
								<Text
									lang={language}
									ru='Решения для создания яркой, гладкой здоровой кожи без угрей, с постоянным чувством чистоты'
									uz="Doimiy tozalik hissi bilan yorqin, silliq, aknesiz sog'lom teri uchun yechimlar."></Text>
							</p>
							<Link to='/product'>
								<Button
									variant='dark'
									className={styles.button}>
									<Text
										lang={language}
										ru='Купить'
										uz='Sotib olish'
									/>
								</Button>
							</Link>
							{/* <p>
								{language === 'Русский'
									? `Продукт также можно приобрести в следующих аптеках: Сеть аптек Таблетка, Oxy-Med, Shoh-Farm, EURO PHARM MARKET и 5+ Сампи`
									: 'Mahsulotni quyidagi dorixonalarda ham sotib olish mumkin: Tabletka, Oxy-Med, Shoh-Pharm, EURO PHARM MARKET va 5+ Sampi'}
							</p> */}
						</Col>
						<Col md lg={6} className={styles.heroRight}>
							<div className={styles.heroImage}>
								<img src={mainImage} alt='home' />
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			<section className={'section ' + styles.tripleAction}>
				<Container>
					<h3 className='text-center'>
						<b>
							<Text
								lang={language}
								ru='Тройное действие против акне'
								uz='Aknega qarshi uch tomonlama harakat'
							/>
						</b>
					</h3>
					<Row className={styles.actionWrapper}>
						<Col xs={12} md={4} className='mb-2 mb-sm-0'>
							<div className={styles.action}>
								<div className={styles.actionName}>
									<p>
										<Text
											lang={language}
											ru='Очищает'
											uz='Tozalaydi'
										/>
									</p>
									<img src={icon} alt='icon' />
								</div>
								<p className={styles.actionDescription}>
									<Text
										lang={language}
										ru='Салфетки TeriPure прочищают поры и
											растворяют глубоко засевший жир. Они убирают
											даже ту грязь, с которой не справляются
											очищающие средства и мыло.'
										uz="TeriPure ko'zalarni yopib qo'yadi va chuqur yog'ni eritadi. Ular hatto tozalovchi va sovun ham bardosh bera olmaydigan axloqsizlikni olib tashlashadi."
									/>
								</p>
							</div>
						</Col>
						<Col xs={12} md={4} className='mb-2 mb-sm-0'>
							<div className={styles.action}>
								<div className={styles.actionName}>
									<p>
										<Text
											lang={language}
											ru='Лечит'
											uz='Shifo beradi'
										/>
									</p>
									<img src={icon} alt='icon' />
								</div>
								<p className={styles.actionDescription}>
									<Text
										lang={language}
										ru='TeriPure убирает имеющиеся акне и устраняют
											угри благодаря салициловой кислоте,
											проверенному средству против угрей.'
										uz="TeriPure mavjud aknelarni tozalaydi va qora nuqtalarni salitsil kislotasi bilan yo'q qiladi, akne davolashda isbotlangan."
									/>
								</p>
							</div>
						</Col>
						<Col xs={12} md={4} className='mb-2 mb-sm-0'>
							<div className={styles.action}>
								<div className={styles.actionName}>
									<p>
										<Text
											lang={language}
											ru='Предотвращает'
											uz='Oldini oladi'
										/>
									</p>
									<img src={icon} alt='icon' />
								</div>
								<p className={styles.actionDescription}>
									<Text
										lang={language}
										ru='При регулярном использовании салфетки
											TeriPure предотвращают высыпания на коже еще
											до их появления.'
										uz="Muntazam foydalanish bilan TeriPure salfetkalari akne paydo bo'lishidan oldin ularni oldini oladi."
									/>
								</p>
							</div>
						</Col>
					</Row>
					<Row>
						<Col
							xs={12}
							md={3}
							className={'mb-2 mb-sm-0 ' + styles.imageContainer}>
							<img
								className='img-responsive'
								src={image1}
								alt='Product 1'
							/>
						</Col>
						<Col
							xs={12}
							md={3}
							className={'mb-2 mb-sm-0 ' + styles.imageContainer}>
							<img
								className='img-responsive'
								src={image2}
								alt='Product 1'
							/>
						</Col>
						<Col
							xs={12}
							md={3}
							className={'mb-2 mb-sm-0 ' + styles.imageContainer}>
							<img
								className='img-responsive'
								src={image3}
								alt='Product 1'
							/>
						</Col>
						<Col
							xs={12}
							md={3}
							className={'mb-2 mb-sm-0 ' + styles.imageContainer}>
							<img
								className='img-responsive'
								src={image4}
								alt='Product 1'
							/>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	)
}

export default Home
