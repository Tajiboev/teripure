import React from 'react'

const Text = ({ lang, ru, uz }) => {
	return <>{lang === 'Русский' ? ru : uz}</>
}

export default Text
