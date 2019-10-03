import React , {Component} from 'react';
import "./components/reset.css"
import './App.css';
import data from "./components/data"
import Card from "./components/Card"

class App extends Component {
  constructor(){
    super()

  }

  render (){
  return (
    <div>
      <Card />
    </div>
  );
}
}

export default App;
