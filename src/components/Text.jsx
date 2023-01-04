import { useStoreState } from 'easy-peasy'
import React from 'react'

const Text = ({ uz, ru }) => {
	const lang = useStoreState((state) => state.displayLanguage)
	return <>{lang === 'ru' ? ru : uz}</>
}

export default Text
