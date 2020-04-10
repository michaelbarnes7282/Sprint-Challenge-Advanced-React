import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import Navbar from './components/Navbar'
import './App.css';

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      data: []
    }
  }
  

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
    .then(result => {
      // console.log(result.data)
      this.setState({data : result.data})
    })
    .catch(err => console.log("there was an error: ", err))
  }


  render() {
    return (
      <div className="App">
        <Navbar />
        <div 
          className ='cards'
          data-testid='cardDiv'>
        {this.state.data.map(item => 
        <Card item = {item} key={item.id}/>)}
        </div>
      </div>
    );
  }
}

export default App;
