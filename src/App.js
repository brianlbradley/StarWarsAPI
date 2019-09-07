import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FilmArray from './Films';
import PeopleArray from './PeopleArray';
import Buttons from './Buttons';

const filmsURLS=[
  "https://swapi.co/api/films/"
]

const peopleURLS=[
  "https://swapi.co/api/people/",
  "https://swapi.co/api/people/?page=2",
  "https://swapi.co/api/people/?page=3",
  "https://swapi.co/api/people/?page=4",
  "https://swapi.co/api/people/?page=5",
  "https://swapi.co/api/people/?page=6",
  "https://swapi.co/api/people/?page=7",
  "https://swapi.co/api/people/?page=8",
  ];


class App extends Component {
  constructor() {
    super()
    this.state = {
      films:[],
      people:[]
    }
   
     this.onFilmsClick = this.onFilmsClick.bind(this);
     this.onPeopleClick = this.onPeopleClick.bind(this);
  }
onFilmsClick (){

    this.GetFilms()
    this.setState({people: []})
    
  }
onPeopleClick (){
    this.setState({people: []})
    this.GetPeople()
    this.setState({films: []})
    
  }

GetFilms(){
    
      fetch('https://swapi.co/api/films/')
        .then(response => response.json())
        .then(data => {this.setState({films:data.results })})


    }
GetPeople() {
  Promise.all(peopleURLS.map(async url => {
    await fetch(url)
        .then(response => response.json())
        .then(data => {this.setState({people:this.state.people.concat(data.results) })})

}))
}

  
 
  render() {
    return (
      <div className ='tc' >
      <div className = 'starwars'>Star Wars</div>
      <Buttons 
      onClickPeople = {this.onPeopleClick}
      onClickFilms = {this.onFilmsClick}
      /> 
    <FilmArray films ={this.state.films}/>
    <PeopleArray people = {this.state.people} />
   
    </div> 
    )
  }
}

export default App;
