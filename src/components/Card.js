import React , {Component} from 'react';
import "./reset.css"
import '../App.css'
import data from "./data"

class Card extends Component {
  constructor(props){
    super(props)
      this.state = {
         count : 0,
         name: "",
         from: "",
         job: "",
         employer: "",
         movieOne: "",
         movieTwo: "",
         movieThree: ""
     }

     this.displayDefault = this.displayDefault.bind(this)
     this.handleNext = this.handleNext.bind(this)
     this.handlePrevious = this.handlePrevious.bind(this)
    }

    componentDidMount(){
        this.displayDefault();
    }

    displayDefault(){
        this.setState({count: data[0].id})
        this.setState({name: data[0].name.first + " " + data[0].name.last})
        this.setState({from: data[0].city + " , " + data[0].country})
        this.setState({job: data[0].title})
        this.setState({employer: data[0].employer})
        this.setState({movieOne: data[0].favoriteMovies[0]})
        this.setState({movieTwo: data[0].favoriteMovies[1]})
        this.setState({movieThree: data[0].favoriteMovies[2]})
        }
    
    handleNext(){
         this.setState({count: this.state.count + 1})
           this.setState({name: data[this.state.count].name.first + " " + data[this.state.count].name.last})
           this.setState({from: data[this.state.count].city + " , " + data[this.state.count].country})
           this.setState({job: data[this.state.count].title})
           this.setState({employer: data[this.state.count].employer})
           this.setState({movieOne: data[this.state.count].favoriteMovies[0]})
           this.setState({movieTwo: data[this.state.count].favoriteMovies[1]})
           this.setState({movieThree: data[this.state.count].favoriteMovies[2]})
           console.log("index" + this.state.count)
         }

    handlePrevious(){
         this.setState({count: this.state.count - 1})
         this.setState({name: data[this.state.count ].name.first + " " + data[this.state.count].name.last})
         this.setState({from: data[this.state.count ].city + " , " + data[this.state.count].country})
         this.setState({job: data[this.state.count].title})
         this.setState({employer: data[this.state.count].employer})
         this.setState({movieOne: data[this.state.count].favoriteMovies[0]})
         this.setState({movieTwo: data[this.state.count].favoriteMovies[1]})
         this.setState({movieThree: data[this.state.count].favoriteMovies[2]})
         console.log("index" + this.state.count)
    }


  render (){

  return (
    <div className="source">
    <div className="homeNavBar">
      <p id="home">Home</p>
    </div>
    <div className="main">
      <div className="mainCard">
         <p id="count">{this.state.count}/25</p>
         <p id="name">{this.state.name}</p>
         <p id="from">From: {this.state.from}</p>
         <p id="job">Job Title: {this.state.job}</p>
         <p id="employer">Employer: {this.state.employer} </p>
         <p id="movies">Favorite Movies: {this.state.movie}</p>
         <div className="movieRanks">
         <p> 1. {this.state.movieOne}</p>
         <p> 2. {this.state.movieTwo}</p>
         <p> 3. {this.state.movieThree}</p>
         </div>
      </div>
      <button id="previous" onClick={this.handlePrevious}>{"< Previous"}</button>
      <div className="bottomButtons">
        <button id="buttonMain">Edit</button>
        <button id="buttonMain" onClick={this.handleDelete}>Delete</button>
        <button id="buttonMain">New</button>
      </div>
      <button id="next" onClick={this.handleNext}>{"Next >"}</button>
    </div>



    </div>
  );
}
}

export default Card;
