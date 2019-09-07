import React from 'react';

const Film = ({title,episode,director,openingcrawl}) => {
	return (
			<div>
			<h1>{title}</h1>
			<h2>Director:{director}</h2> 
			<p>Episode:{episode}</p>
			<h2>{openingcrawl}</h2> 
			</div>
		)

}

export default Film;