import { useState } from 'react'
import { IoStar, IoStarHalf } from 'react-icons/io5'
import { useStoreActions } from 'easy-peasy'
import { ToastContainer, toast, Slide } from 'react-toastify'
import styles from '../styles/product.module.sass'
import IntText from './IntText'

const ProductInfo = () => {
	let [count, setCount] = useState(1)
	let increase = () => {
		setCount(count + 1)
	}
	let decrease = () => {
		if (count === 1) return
		setCount(count - 1)
	}

	const toggleBag = useStoreActions((actions) => actions.toggleBag)

	const addAction = useStoreActions((actions) => actions.addToBag)
	const addToBag = () => {
		addAction(count)
		toggleBag()
		notify()
	}

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
		<div className={styles.withInfo}>
			<ToastContainer transition={Slide} />
			<h3>
				<b>TeriPure Maximum</b>
			</h3>
			<div className={styles.stars}>
				<div>
					<IoStar className='react-icons' size={16} />
					<IoStar className='react-icons' size={16} />
					<IoStar className='react-icons' size={16} />
					<IoStar className='react-icons' size={16} />
					<IoStarHalf className='react-icons' size={16} />
				</div>
				<div>4.5 (750)</div>
			</div>
			<div className={styles.description}>
				<p>
					<IntText
						ru='Ватные диски содержащие салициловую кислоту и имеющие
					кератолический эффект'
						uz="Salitsil kislotasini o'z ichiga olgan va keratolik ta'sirga ega bo'lgan paxta yostig'chalari"
					/>
				</p>
			</div>
			<div className={styles.size}>
				<span>
					50 <IntText ru='шт.' uz='dona' />
				</span>
			</div>
			<div className={styles.price}>
				<span>
					135,000 <IntText ru='сум' uz="so'm" />
				</span>
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
						<IntText
							ru='Добавить в корзину'
							uz="Savatga qo'shish"
						/>
					</button>
				</div>
			</div>
		</div>
	)
}

export default ProductInfo
