import React from 'react';
import './Buttons.css';

const Buttons = ({onClickPeople,onClickFilms}) => {
	return(
		<div className ="container">

		 
            <button className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black btn yellow" src="#" alt="" value='films'onClick={onClickFilms}>Films</button>
		<button className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black btn yellow" src="#" alt="" value='people' onClick={onClickPeople}>Characters</button>

		</div> 
		)
}

export default Buttons;