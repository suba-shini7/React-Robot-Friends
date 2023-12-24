
import './App.css';
import React from 'react';
import { CardList } from './CardList';
import { robot } from './robot';
import { SearchBox } from './SearchBox';
import { Scroll } from './Scroll';


class App extends React.Component {
  constructor(){
  super()
  this.state={
    robot:[],
    setSearch:''
  }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(users=> this.setState({robot:users}))
  }
  onSearch=(event)=>{
    this.setState({setSearch:event.target.value})
  }
  render(){
    const filterRobots=this.state.robot.filter(robot=>{
      return robot.name.toLowerCase().includes(this.state.setSearch.toLowerCase())
    })
    return(!robot.length)?<h1>Loading</h1>:(<div className="tc">
    <h1>Robot Friend</h1>
    <SearchBox onSearch={this.onSearch}/>
    <Scroll>
 <CardList robot={filterRobots}/>
 </Scroll>
  </div>)
    }}


export default App;
