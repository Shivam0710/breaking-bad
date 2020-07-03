import React, { useState } from 'react'

function Search({ getQuery }) {
	let [ query, setQuery ] = useState('')
	const onChange = (q) => {
		setQuery(q)
		getQuery(q)
	}
	return (
		<div className="search">
			<form>
				<input 
					type="text" 
					placeholder="Search characters" 
					autoFocus
					value={query}
					onChange={(e) => onChange(e.target.value)}
				/>
			</form>
		</div>
	)
}

export default Search