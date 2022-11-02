import { useStoreState } from 'easy-peasy'
import React from 'react'

const IntText = ({ uz, ru }) => {
	const lang = useStoreState((state) => state.displayLanguage)
	return <>{lang === 'Русский' ? ru : uz}</>
}

export default IntText
