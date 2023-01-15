import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './styles/main.sass'
import 'react-toastify/dist/ReactToastify.css'

import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'G-MZD5DH3PTW'
}

TagManager.initialize(tagManagerArgs)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<HashRouter>
		<App />
	</HashRouter>
)
