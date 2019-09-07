import React from 'react';

import People from './People';

const PeopleArray = ({people}) => {
	return(

		
			people.map((data,i) => {
				return(
					<div className="bg-yellow shadow-5 tc dib pa4 ma3 br3 grow">
				<People 
				key = {i}
				name = {people[i].name}
				height= {people[i].height}
				hairColor={people[i].hair_color}
				eyeColor={people[i].eye_color}
				/>
				</div>
				)
			})
			

		)

}


export default PeopleArray;