import React from 'react'

import store from './store/store'
import { StoreProvider } from 'easy-peasy'
import { ToastContainer, Slide } from 'react-toastify'
import { Routes, Route } from 'react-router-dom'

// components
import Backdrop from './components/Backdrop'
import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import ShoppingBag from './components/ShoppingBag'
import Footer from './components/Footer'

// pages
const Home = React.lazy(() => import('./pages/Home'))
const Product = React.lazy(() => import('./pages/Product'))
const NotFound = React.lazy(() => import('./pages/404'))
const Checkout = React.lazy(() => import('./pages/Checkout'))
const Contact = React.lazy(() => import('./pages/Contact'))
const About = React.lazy(() => import('./pages/About'))
const Orders = React.lazy(() => import('./pages/Orders'))
const Order = React.lazy(() => import('./pages/Order'))

const App = () => {
	return (
		<StoreProvider store={store}>
			<Backdrop />
			<header className='header'>
				<Topbar />
				<Navbar />
				<ShoppingBag />
			</header>
			<main>
				<ToastContainer transition={Slide}
					position='bottom-center'
					autoClose={3500}
					hideProgressBar={false}
					pauseOnHover
					theme='light'
				/>
				<React.Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/' exact element={<Home />} />
					<Route path='/teripure' exact element={<Home />} />
					<Route path='/product' element={<Product />} />
					<Route path='/contact-us' element={<Contact />} />
					<Route path='/about-us' element={<About />} />
					<Route path='/checkout' element={<Checkout />} />
					<Route path='/orders' element={<Orders />} />
					<Route path='/orders/:orderId' exact element={<Order />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
				</React.Suspense>
			</main>
			<Footer />
		</StoreProvider>
	)
}

export default App
