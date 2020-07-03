import React from 'react'

import CharacterCard from './CharacterCard'
import Spinner from '../ui/Spinner'

function CharactersGrid({ items, isLoading }) {
	return ( isLoading ? <Spinner /> :
		<div className="cards">
			{items.map(item => {
				return <CharacterCard key={item.char_id} item={item} />
			})}
		</div>
	)
}

export default CharactersGrid
