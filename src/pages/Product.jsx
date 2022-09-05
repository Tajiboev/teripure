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

const Product = () => {
	return (
		<>
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
								<b>Детали продукта TeriPure Maximum</b>
							</h5>
							<ul>
								<li>- Технология</li>
								<li>- Рекомендация по применению</li>
								<li>- Состав</li>
							</ul>
						</div>
						<div className={styles.content}>
							<div className={styles.detail}>
								<h5>
									<b>Технология</b>
								</h5>
								<p>
									TeriPure Maximum это ватные диски которые
									содержат салициловую кислоту и имеют
									кератолический эффект. Продукт разработан
									для всех типов кожи. Удаляет омертвевшие
									клетки кожи, которые могут способствовать
									закупорке пор, обеспечивая чистоту кожи при
									постоянном использовании.
								</p>
							</div>
							<div className={styles.detail}>
								<br />
								<h5>
									<b>Рекомендация по применению</b>
								</h5>
								<p>
									Вымойте кожу перед применением. Вытирайте
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
									рекомендовано врачом.
								</p>
							</div>
							<div className={styles.detail}>
								<br />
								<h5>
									<b>Состав</b>
								</h5>
								<p>
									В салфетках TeriPure совсем не содержит
									спирта и эффективно действуют против угрей,
									не оставляя ожогов и подходят для любых
									типов кожи. Активный компонент Салициловая
									кислота 2,0%. Неактивные ингредиенты:
									очищенная вода, лаурилсульфат аммония,
									ксиленсульфонат аммония, лимонная кислота,
									этилгексилглицерин, ароматизатор, ментол,
									феноксиэтанол, симетикон, борат натрия,
									тетранатрий ЭДТА
								</p>
							</div>
						</div>
					</section>
					<section className={styles.details}>
						<div className={styles.navigation}>
							<h5>
								<b>Часто задаваемые вопросы</b>
							</h5>
							<ul>
								<li>- Контакты</li>
								<li>- Продукт</li>
								<li>- Доставка</li>
								<li>- Возврат</li>
								<li>- Заказ</li>
							</ul>
						</div>
						<div className={styles.content}>
							<FAQS />
						</div>
					</section>
					<section className={styles.details} id='reviews'>
						<div className={styles.navigation}>
							<h5>
								<b>Отзывы клиентов</b>
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
