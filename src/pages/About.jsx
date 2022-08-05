import React from 'react'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import ShoppingBag from '../components/ShoppingBag'
import Topbar from '../components/Topbar'
import Backdrop from '../components/Backdrop'
import Breadcrumb from '../components/Breadcrumb'

import styles from '../styles/about.module.sass'
import { Link } from 'react-router-dom'

// import image1 from '../images/image1.png'
import image2 from '../images/main.jpg'
import image3 from '../images/image2.png'
import Footer from '../components/Footer'

const About = () => {
	return (
		<>
			<Backdrop />
			<header className='header'>
				<Topbar />
				<Navbar />
				<ShoppingBag />
			</header>
			<Breadcrumb />
			<Container>
				<div className={styles.hero}>
					<h2>О компании</h2>
					<p>
						«ТериПюр » молодая компания в Узбекистане предлагающая
						знакомые эффективные технологии в области ухода за
						кожей. Бренд был основан, в целях создания комплексного
						и щадящего решения для проблемной кожи. Компания
						предлагает нашим клиентам решения для создания яркой,
						гладкой здоровой кожи без угрей, с постоянным чувством
						чистоты.
					</p>
				</div>

				<section className={styles.content}>
					<div className={styles.textWrapper}>
						<div>
							<h2>Продукт</h2>
							<p>
								Наш бренд создан с целью помочь нашим клиентам
								почувствовать здоровую и гладкую кожи без угрей.
								В 2022 году, был выпущен наш первый продукт по
								уходу за кожей TeriPure Maximum. Данный продукт
								прошел тестирование и испытания национальными
								технологами и дерматологами и рекомендован
								дерматологами Узбекистана для ухода за
								проблемной кожей и лечения угрей.
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
							<h2>Наша миссия</h2>
							<p>
								Мы привержены постоянному развитию коллекции
								продуктов, и в данный момент проводим испытания
								еще трех продуктов предназначенных для всех
								типов кожи. Основатель компании Зухра Ходжа
								Ахмедова, является дерматологом косметологом с
								обширным опытом в дерматологии как в Узбекистане
								так и зарубежном. В период работы с различными
								типами кожи, Зухра накопила знания необходимые
								для определения работающих рецептов и решений
								для проблемной кожи Накопленный опыт и знания
								перешли в создания своей компании по
								производству продуктов для всех типов кожи.
							</p>
						</div>
					</div>
				</section>
				<p className={styles.contactLink}>
					Если есть продукты по уходу за кожей, которые вы хотели бы
					видеть
					<br /> в ассортименте ТериПюр, свяжитесь с нами{' '}
					<Link to='/contact-us'>здесь</Link>.
				</p>
			</Container>
			<Footer></Footer>
		</>
	)
}

export default About
