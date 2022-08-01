import React, { useState } from 'react'
import Container from '../components/Container'
import styles from '../styles/product.module.sass'
import image from '../images/image1.png'
import image2 from '../images/main.jpg'
import image3 from '../images/image2.png'
import image4 from '../images/image3.png'
import compareImg from '../images/beforeafter.png'
import Backdrop from '../components/Backdrop'
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'
import ShoppingBag from '../components/ShoppingBag'
import Footer from '../components/Footer'

import {
	IoStar,
	IoStarHalf,
	// IoCheckmarkCircle,
	// IoCloseCircleOutline,
} from 'react-icons/io5'
import { useStoreActions } from 'easy-peasy'
import { ToastContainer, toast, Slide } from 'react-toastify'
import FAQ from '../components/FAQ'

const Product = () => {
	let [count, setCount] = useState(1)
	let increase = () => {
		setCount(count + 1)
	}
	let decrease = () => {
		if (count === 1) return
		setCount(count - 1)
	}
	const addAction = useStoreActions((actions) => actions.addToBag)
	const addToBag = () => {
		addAction(count)
		notify()
	}

	const contactFAQ = [
		{
			uuid: 'CF1',
			heading: 'Как связаться с вами?',
			content:
				'Чтобы связаться с нашей командой, пожалуйста, посетите нашу контактную страницу, чтобы отправить запрос или позвонить нам. Также можно написать на Instagram канале Teripure_uz. По выходным у нас ограниченная поддержка',
		},
		{
			uuid: 'CF2',
			heading: 'Можно заказать товар через телефон или Instagram?',
			content: `В целях безопасности мы не можем обрабатывать заказы и/или принимать платежи по телефону. Наша команда с радостью проведет вас через весь процесс заказа на сайте, если вам понадобится помощь в оформлении заказа онлайн. Чтобы связаться с нашей командой, пожалуйста, посетите нашу контактную страницу, чтобы отправить запрос или позвонить нам. Также, можно связаться с нами написав на Instagram канале Teripure_uz`,
		},
	]

	const productFAQ = [
		{
			uuid: 'PF1',
			heading:
				'Можете ли проконсультировать подходит ли ваш продукт для моей кожи?',
			content: `Конечно можем! Для запросов, связанных с применением продуктом, пожалуйста, напишите нам на Instagram канале Teripure_uz и наша команда будет рада помочь Вам!`,
		},
		{
			uuid: 'PF2',
			heading: 'Можете ли вы отправить мне пробник?',
			content: `К сожалению, в настоящее время мы не предлагаем образцы продукции!`,
		},
		{
			uuid: 'PF3',
			heading: 'Где я могу купить ваш продукт?',
			content: `Вы можете приобрести продукцию онлайн на сайте teripure.uz или в одном из аптек продающих наш товар. В данный момент мы сотрудничаем только с сетью аптек Oxymed и сеть аптек Tabletka. 
            Вы также можете проверить, есть ли поблизости какие-либо аптеки в которых имеется наш товар, однако обратите внимание, что покупка третьих лиц исключена из нашей политики возврата!
            `,
		},
		{
			uuid: 'PF4',
			heading: 'Как хранить ваш продукт?',
			content: `Мы рекомендуем хранить нашу продукцию в сухом прохладном месте, защищенном от прямых солнечных лучей.
            Можно хранить в холодильнике, но в этом нет необходимости.
            `,
		},
		{
			uuid: 'PF5',
			heading: 'Какой срок годности?',
			content: `Срок годности составляет три года в закрытом виде и при комнатной температуре.`,
		},
		{
			uuid: 'PF6',
			heading:
				'Как узнать что продукт который я купил является подлинным?',
			content: `Безопасность наших клиентов является ключевым приоритетом, поэтому мы стремимся предотвращать продажу и распространение контрафактной продукции. К сожалению, мы не можем проверить подлинность или целостность каких-либо продуктов или упаковки, которые не были приобретены непосредственно у Teripure или у одного из наших авторизованных розничных продавцов.`,
		},
	]

	const deliveryFAQ = [
		{
			uuid: 'DF1',
			heading: 'Сколько стоит доставка?',
			content: `В данный момент доставка работает только по городу Ташкент. Если вы хотите заказать за пределы Ташкента, напишите нам на Instagram канале Teripure_uz. Стоимость доставки зависит от расстояния и времени доставки товара.`,
		},
		{
			uuid: 'DF2',
			heading: 'Как быстро я могу получить ваш товар?',
			content: `Товар по городу Ташкент доставляется от 24 часов до 48 часов после проведения заказы. Заказы сделанные в выходные дни доставляться в первые рабочие дни следующей недели.`,
		},
		{
			uuid: 'DF3',
			heading: 'Каким способом мы доставляете товар?',
			content: `В данный момент мы доставляем товар с наших складов использую услуги такси. `,
		},
	]

	const returnFAQ = [
		{
			uuid: 'RF1',
			heading: 'Могу ли я вернуть товар?',
			content: `В случаи если вы купили несколько штук нашего товара, и решили вернуть часть не использованного товара, мы готовы принять товар обратно и вернуть ваши деньги обратно за минусом комиссии банка. Открытый или использованный продукт, к сожалению к возврату не подлежит.`,
		},
		{
			uuid: 'RF2',
			heading: 'Как я могу вернуть товар?',
			content: `Для возврата товара, просто свяжитесь с нами через Instagram канале Teripure_uz`,
		},
	]

	const orderFAQ = [
		{
			uuid: 'OF1',
			heading: 'Могу ли я отменить свой заказ?',
			content: `Мы просим вас внимательно просмотреть свой заказ, прежде чем размещать его, чтобы убедиться, что вся информация и содержание вашего заказа верны. Обратите внимание, что после размещения заказа его нельзя изменить.
		Аннулирование должно быть запрошено в течение 1 часа после размещения заказа и в течение наших рабочих часов. Хотя мы не можем гарантировать отмену, мы постараемся сделать все возможное, чтобы приспособиться. Обратите внимание, что у нас очень ограниченная поддержка по выходным и государственным/праздничным дням.`,
		},
		{
			uuid: 'OF2',
			heading: 'Сколько штук я могу заказать?',
			content: `При рассмотрении заказа учитывается множество факторов, в том числе, какой склад выполняет заказ, стоимость доставки, частота заказов и индивидуальное количество единиц, содержащихся в этом заказе.`,
		},
		{
			uuid: 'OF3',
			heading: 'Я заказ на сайте но не получил уведомление. Что делать?',
			content: `Подтверждения заказа рассылаются немедленно. \n
			Если вы не получили от нас подтверждения, пожалуйста, подождите неторое время, и если с вами никто не свяжеться, пожалуйста напишите нам Instagram канале Teripure_uz и мы будем рады помочь. Если вы не знаете номер своего заказа, пожалуйста, подтвердите адрес электронной почты или номер телефона и полное имя, указанные при размещении заказа, чтобы мы могли изучить его для вас!`,
		},
	]

	const notify = () =>
		toast.success('Продукт был добавлен в корзину!', {
			position: 'bottom-center',
			autoClose: 3500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		})

	return (
		<>
			<ToastContainer transition={Slide} />
			<Backdrop />
			<header className='header'>
				<Topbar />
				<Navbar />
				<ShoppingBag />
			</header>
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
						<div className={styles.withInfo}>
							<h1>TeriPure Maximum</h1>
							<div className={styles.stars}>
								<div>
									<IoStar className='react-icons' size={16} />
									<IoStar className='react-icons' size={16} />
									<IoStar className='react-icons' size={16} />
									<IoStar className='react-icons' size={16} />
									<IoStarHalf
										className='react-icons'
										size={16}
									/>
								</div>
								<div>4.5 (750)</div>
							</div>
							<div className={styles.description}>
								<p>
									Ватные диски содержащие салициловую кислоту
									и имеющие кератолический эффект
								</p>
							</div>
							<div className={styles.size}>
								<span>50 шт.</span>
							</div>
							<div className={styles.price}>
								<span>135,000 сум</span>
							</div>
							<div className={styles.form}>
								<div className={styles.counter}>
									<button type='' onClick={decrease}>
										-
									</button>
									<p>{count}</p>
									<button onClick={increase}>+</button>
								</div>
								<div className={styles.addToBag}>
									<button onClick={addToBag}>
										Добавить в корзину
									</button>
								</div>
							</div>
							{/* <div className={styles.features}>
								<div className={styles.feature}>
									<p>alcohol-free</p>
									<i>
										<IoCheckmarkCircle
											className='react-icons'
											size={20}
										/>
									</i>
								</div>
								<div className={styles.feature}>
									<p>water-free</p>
									<i>
										<IoCheckmarkCircle
											className='react-icons'
											size={20}
										/>
									</i>
								</div>
								<div className={styles.feature}>
									<p>oil-free</p>
									<i>
										<IoCheckmarkCircle
											className='react-icons'
											size={20}
										/>
									</i>
								</div>
								<div className={styles.feature}>
									<p>silicon-free</p>
									<i>
										<IoCloseCircleOutline
											className='react-icons'
											size={22}
										/>
									</i>
								</div>
								<div className={styles.feature}>
									<p>nut-free</p>
									<i>
										<IoCheckmarkCircle
											className='react-icons'
											size={20}
										/>
									</i>
								</div>
								<div className={styles.feature}>
									<p>vegan</p>
									<i>
										<IoCloseCircleOutline
											className='react-icons'
											size={22}
										/>
									</i>
								</div>
								<div className={styles.feature}>
									<p>gluten-free</p>
									<i>
										<IoCheckmarkCircle
											className='react-icons'
											size={20}
										/>
									</i>
								</div>
							</div> */}
						</div>
					</section>
					<section className={styles.details}>
						<div className={styles.navigation}>
							<h3>Детали продукта TeriPure Maximum</h3>
							<ul>
								<li>- Технология</li>
								<li>- Рекомендация по применению</li>
								<li>- Состав</li>
							</ul>
						</div>
						<div className={styles.content}>
							<div className={styles.detail}>
								<h3>Технология</h3>
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
								<h3>Рекомендация по применению</h3>
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
								<h3>Состав</h3>
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
							<h3>Часто задаваемые вопросы</h3>
							<ul>
								<li>- Контакты</li>
								<li>- Продукт</li>
								<li>- Доставка</li>
								<li>- Возврат</li>
								<li>- Заказ</li>
							</ul>
						</div>
						<div className={styles.content}>
							<h3>Контакты</h3>
							<FAQ items={contactFAQ} />
							<h3>Продукт</h3>
							<FAQ items={productFAQ} />
							<h3>Доставка</h3>
							<FAQ items={deliveryFAQ} />
							<h3>Возврат</h3>
							<FAQ items={returnFAQ} />
							<h3>Заказ</h3>
							<FAQ items={orderFAQ} />
						</div>
					</section>
					<section className={styles.reviews}>
						<div className={styles.navigation}>
							<h3>Отзывы клиентов</h3>
						</div>
						<div className={styles.content}>
							<div className={styles.stars}>
								<div>
									<IoStar className='react-icons' size={16} />
									<IoStar className='react-icons' size={16} />
									<IoStar className='react-icons' size={16} />
									<IoStar className='react-icons' size={16} />
									<IoStarHalf
										className='react-icons'
										size={16}
									/>
								</div>
								<div>4.5 (750 отзывов)</div>
								<div className={styles.writeReview}>
									<button>Оставить отзыв</button>
								</div>
							</div>
							<div className={styles.scale}>
								<div className={styles.progress}>
									<span>
										5{' '}
										<IoStar
											className='react-icons'
											size={14}
										/>
									</span>
									<progress id='file' value='75' max='100'>
										75
									</progress>
									<span>75</span>
								</div>
								<div className={styles.progress}>
									<span>
										4{' '}
										<IoStar
											className='react-icons'
											size={14}
										/>
									</span>
									<progress id='file' value='15' max='100'>
										15
									</progress>
									<span>15</span>
								</div>
								<div className={styles.progress}>
									<span>
										3{' '}
										<IoStar
											className='react-icons'
											size={14}
										/>
									</span>
									<progress id='file' value='3' max='100'>
										3
									</progress>
									<span>3</span>
								</div>
								<div className={styles.progress}>
									<span>
										2{' '}
										<IoStar
											className='react-icons'
											size={14}
										/>
									</span>
									<progress id='file' value='1' max='100'>
										1
									</progress>
									<span>1</span>
								</div>
								<div className={styles.progress}>
									<span>
										1{' '}
										<IoStar
											className='react-icons'
											size={14}
										/>
									</span>
									<progress id='file' value='1' max='100'>
										1
									</progress>
									<span>1</span>
								</div>
							</div>
							<div className={styles.detail}>
								<h3>Джон Доу</h3>
								<p>
									TeriPure Maximum это ватные диски которые
									содержат салициловую кислоту и имеют
									кератолический эффект. Продукт разработан
									для всех типов кожи. Удаляет омертвевшие
									клетки кожи, которые могут способствовать
									закупорке пор, обеспечивая чистоту кожи при
									постоянном использовании.
								</p>
								<img
									src={compareImg}
									className='img-responsive'
									alt='Before and after'
								/>
							</div>
							<div className={styles.detail}>
								<h3>Александр Ф.</h3>
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
								<h3>Аваз Миразизов</h3>
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
				</Container>
			</section>
			<Footer />
		</>
	)
}

export default Product
