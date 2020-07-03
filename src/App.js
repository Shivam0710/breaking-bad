import React, { useEffect, useState } from 'react';
import Header from './components/ui/Header'
import Search from './components/ui/Search'
import CharactersGrid from './components/Characters/CharactersGrid'

import axios from 'axios'

import './App.css';

function App() {
	let [items, setItems] = useState([])
	let [isLoading, setIsLoading] = useState(true)
	let [query, setQuery] = useState('')

	useEffect(() => {
		const fetchItems = async () => {
			let items = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
			setItems(items.data)
			setIsLoading(false)
		}

		fetchItems()
	}, [query])

	return (
		<div className="container">
			<Header />
			<Search getQuery={setQuery} />
			<CharactersGrid items={items} isLoading={isLoading} />
		</div>
	);
}

export default App;
