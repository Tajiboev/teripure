import React from 'react'

import store from './store/store'
import { StoreProvider } from 'easy-peasy'

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import NotFound from './pages/404'
import Checkout from './pages/Checkout'
import Contact from './pages/Contact'
import About from './pages/About'

// 
import Backdrop from './components/Backdrop'
import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import ShoppingBag from './components/ShoppingBag'
import Footer from './components/Footer'
import Orders from './pages/Orders'
import Order from './pages/Order'
// import Payment from './pages/Payment'

const App = () => {
	return (
		<StoreProvider store={store}>
			<>
				<Backdrop />
				<header className='header'>
					<Topbar />
					<Navbar />
					<ShoppingBag />
				</header>
				<Routes>
					<Route path='/' exact element={<Home />} />
					<Route path='/teripure' exact element={<Home />} />
					<Route path='/product' element={<Product />} />
					<Route path='/contact-us' element={<Contact />} />
					<Route path='/about-us' element={<About />} />
					<Route path='/checkout' element={<Checkout/>} />
					<Route path="/orders" element={<Orders />}>
						<Route path=":orderId" element={<Order />} />
					</Route>
					<Route path='*' element={<NotFound />} />
				</Routes>
				<Footer />
			</>
		</StoreProvider>
	)
}

export default App
