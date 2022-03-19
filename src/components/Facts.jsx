import React, { useState } from 'react'
import { facts } from '../data'

const randomNumb = () => {
	return Math.floor(Math.random() * 25)
}

const Facts = () => {
	const [fact, setFact] = useState(() => facts[randomNumb()])

	return (
		<div>
			<h4>{fact}</h4>
			<button onClick={() => setFact(facts[randomNumb()])}>MORE!</button>
		</div>
	)
}

export default Facts
