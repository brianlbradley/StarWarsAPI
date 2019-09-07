import React from 'react';

const People =  ({name,height,hairColor,eyeColor}) => {
	return (
		<div>
			<h2>{name}</h2>
			<h3>Height: {height}</h3>
			<h3>Hair Color: {hairColor}</h3>
			<h3>Eye Color: {eyeColor}</h3>
		</div>
		)

}

export default People;