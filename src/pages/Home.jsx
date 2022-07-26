import React from 'react'
import styles from '../styles/home.module.sass'
import Container from '../components/Container'

import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import image4 from '../images/image4.png'

import icon_1 from '../images/icon_1.png'
import icon_2 from '../images/icon_2.png'
import icon_3 from '../images/icon_3.png'
import mainImage from '../images/main.jpg'

import { Link } from 'react-router-dom'
import { useStoreState } from 'easy-peasy'

const Home = () => {
	let language = useStoreState((state) => state.displayLanguage)
	return (
		<>
			<section className={'section ' + styles.hero}>
				<Container className={'d-flex ' + styles.heroWrapper}>
					<div className={styles.heroLeft}>
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
							{language === 'Русский' ? 'Продукт' : 'Maxsulot'}
						</Link>
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
					<ol className={'d-flex text-center ' + styles.actions}>
						<li className={styles.action}>
							<img src={icon_1} alt='icon 1' />
							<p className={styles.actionName}>Очищает</p>
							<p className={styles.actionDescription}>
								Салфетки TeriPure прочищают поры и растворяют
								глубоко засевший жир. Они убирают даже ту грязь,
								с которой не справляются очищающие средства и
								мыло.
							</p>
						</li>
						<li className={styles.action}>
							<img src={icon_2} alt='icon 2' />
							<p className={styles.actionName}>Лечит</p>
							<p className={styles.actionDescription}>
								TeriPure убирает имеющиеся акне и устраняют угри
								благодаря салициловой кислоте, проверенному
								средству против угрей.
							</p>
						</li>
						<li className={styles.action}>
							<img src={icon_3} alt='icon 3' />
							<p className={styles.actionName}>Предотвращает</p>
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
		</>
	)
}

export default Home
