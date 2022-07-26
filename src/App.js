import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Product from './pages/Product'
import NotFound from './pages/404'
import Admin from './pages/Admin'
import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import ShoppingBag from './components/ShoppingBag'

import store from './store/store'
import { StoreProvider } from 'easy-peasy'
import Backdrop from './components/Backdrop'
import Footer from './components/Footer'
import Checkout from './pages/Checkout'


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
					<Route path='/admin' element={<Admin />} />
					<Route path='/product' element={<Product />} />
					<Route path='/checkout' element={<Checkout/>} />
					<Route path='*' element={<NotFound />} />
				</Routes>
				<Footer/>
			</>
		</StoreProvider>
	)
}

export default App
