import React from 'react'
import styles from '../styles/home.module.sass'
import Container from '../components/Container'
import Backdrop from '../components/Backdrop'
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'
import ShoppingBag from '../components/ShoppingBag'

import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import image4 from '../images/image4.png'
import logo from '../images/logo.png'

import icon from '../images/arrowIcon.svg'
import mainImage from '../images/main.jpg'

import { Link } from 'react-router-dom'
import { useStoreState } from 'easy-peasy'
import Footer from '../components/Footer'

const Home = () => {
	let language = useStoreState((state) => state.displayLanguage)
	return (
		<>
			<Backdrop />
			<header className='header'>
				<Topbar />
				<Navbar />
				<ShoppingBag />
			</header>
			<section className={'section ' + styles.hero}>
				<Container className={'d-flex ' + styles.heroWrapper}>
					<div className={styles.heroLeft}>
						<img src={logo} alt='Teripure' />
						<h1>
							{language === 'Русский'
								? 'Эффективные технологии в области ухода за кожей'
								: 'Terini parvarish qilish sohasidagi samarali texnologiyalar'}
						</h1>
						<h2>
							{language === 'Русский'
								? 'Решения для создания яркой, гладкой здоровой кожи без угрей, с постоянным чувством чистоты'
								: 'Yorqin, silliq, aknesiz soglom teri va doimiy tozalik hissini taminlovchi echimlar'}
						</h2>
						<Link to='/product' className={styles.button}>
							{language === 'Русский' ? 'Купить' : 'Sotib olish'}
						</Link>
						<p>
							{language === 'Русский'
								? `Ввиду того, что онлайн покупка на нашем сайте пока не доступна, продукт также можно приобрести в следующих аптеках: Сеть аптек Таблетка, Oxy-Med, Shoh-Farm, EURO PHARM MARKET и 5+ Сампи`
								: 'Veb-saytimizda onlayn xarid hali mavjud emasligi sababli, mahsulotni quyidagi dorixonalarda ham sotib olish mumkin: Tabletka, Oxy-Med, Shoh-Pharm, EURO PHARM MARKET va 5+ Sampi'}
						</p>
					</div>
					<div className={styles.heroRight}>
						<div className={styles.heroImage}>
							<img src={mainImage} alt='home' />
						</div>
					</div>
				</Container>
			</section>
			<section className={'section ' + styles.tripleAction}>
				<Container>
					<h2 className='text-center'>
						Тройное действие против акне
					</h2>
					<ol className={'d-flex ' + styles.actions}>
						<li className={styles.action}>
							<div className={styles.actionName}>
								<p>Очищает</p>
								<img src={icon} alt='icon' />
							</div>
							<p className={styles.actionDescription}>
								Салфетки TeriPure прочищают поры и растворяют
								глубоко засевший жир. Они убирают даже ту грязь,
								с которой не справляются очищающие средства и
								мыло.
							</p>
						</li>
						<li className={styles.action}>
							<div className={styles.actionName}>
								<p>Лечит</p>
								<img src={icon} alt='icon' />
							</div>
							<p className={styles.actionDescription}>
								TeriPure убирает имеющиеся акне и устраняют угри
								благодаря салициловой кислоте, проверенному
								средству против угрей.
							</p>
						</li>
						<li className={styles.action}>
							<div className={styles.actionName}>
								<p>Предотвращает</p>
								<img src={icon} alt='icon' />
							</div>
							<p className={styles.actionDescription}>
								при регулярном использовании салфетки TeriPure
								предотвращают высыпания на коже еще до их
								появления.
							</p>
						</li>
					</ol>
					<div className={'d-flex ' + styles.images}>
						<div className={styles.imageContainer}>
							<img
								className='img-responsive'
								src={image1}
								alt='Product 1'
							/>
						</div>
						<div className={styles.imageContainer}>
							<img
								className='img-responsive'
								src={image2}
								alt='Product 1'
							/>
						</div>
						<div className={styles.imageContainer}>
							<img
								className='img-responsive'
								src={image3}
								alt='Product 1'
							/>
						</div>
						<div className={styles.imageContainer}>
							<img
								className='img-responsive'
								src={image4}
								alt='Product 1'
							/>
						</div>
					</div>
				</Container>
			</section>
			<Footer />
		</>
	)
}

export default Home
