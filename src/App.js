import React from 'react'

import store from './store/store'
import { StoreProvider } from 'easy-peasy'

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import NotFound from './pages/404'
import Admin from './pages/admin/Admin'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
//...
import Orders from './pages/admin/Orders'
import Products from './pages/admin/Products'
import Subscribers from './pages/admin/Subscribers'
import Contact from './pages/Contact'
import About from './pages/About'


const App = () => {
	return (
		<StoreProvider store={store}>
			<>
				<Routes>
					<Route path='/' exact element={<Home />} />
					<Route path='/teripure' exact element={<Home />} />
					<Route path='admin' element={<Admin />}>
						<Route path='orders' element={<Orders/>} />
						<Route path='products' element={<Products/>} />
						<Route path='subscribers' element={<Subscribers/>} />
					</Route>
					<Route path='/product' element={<Product />} />
					<Route path='/contact-us' element={<Contact />} />
					<Route path='/about-us' element={<About />} />
					<Route path='/login' element={<Login />} />
					<Route path='/checkout' element={<Checkout/>} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</>
		</StoreProvider>
	)
}

export default App
