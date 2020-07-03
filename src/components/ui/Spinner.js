import React from 'react'
import Loading from '../../img/spinner.gif'

function Spinner() {
	return (
		<img style={{ margin: 'auto', width:'200px', display: 'block' }} src={Loading} alt=""/>
	)
}

export default Spinner
