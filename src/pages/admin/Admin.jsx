import { useStoreState } from 'easy-peasy'
import React from 'react'
import { Navigate, Link, Outlet } from 'react-router-dom'
import styles from '../../styles/admin.module.sass'

const Admin = () => {
	const isAuthenticated = useStoreState((state) => state.isAuthenticated)
	if (!isAuthenticated) return <Navigate to='/login' replace />

	return (
		<main className={styles.main}>
			<nav className={styles.nav}>
				<ul>
					<li>
						<Link to='/admin/orders'>Заказы</Link>
					</li>
					<li>
						<Link to='/admin/products'>Продукты</Link>
					</li>
					<li>
						<Link to='/admin/subscribers'>Подписчики</Link>
					</li>
				</ul>
			</nav>
			<section className={styles.outlet}>
				<Outlet />
			</section>
		</main>
	)
}

export default Admin
