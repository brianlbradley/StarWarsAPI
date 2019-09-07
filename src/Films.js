import React from 'react';
import Film from './Film';

const FilmArray =({films}) => {
	return(
			

		films.map((data,i) => {
			return(
				<div className="bg-yellow shadow-5 tc dib pa4 ma3 br3 grow">
			<Film
			key = {i}
			title = {films[i].title}
			director ={films[i].director}
			episode ={films[i].episode_id}
			openingcrawl ={films[i].opening_crawl}
			/>
			</div> 
			)

		})
			



		
		)
}


export default FilmArray;