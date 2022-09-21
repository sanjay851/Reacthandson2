import React from 'react';
import FeedbackForm from './Components/FeedbackForm';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      name: '',
      depart: '',
      rating:'',
      users:[]
    }
  }

  updateName = (e) => {
    this.setState({name:e.target.value});
  }

  updateDepartment = (e) => {
    this.setState({depart:e.target.value});
  }

  updateRating = (e) => {  
    this.setState({rating:e.target.value});
  }
  handleOnClick  = () => {
    const updatedUsers = this.state.users;
    updatedUsers.push({name:this.state.name, depart:this.state.depart, rating:this.state.rating})
    this.setState({users:updatedUsers, name:'', depart:'', rating:'' })
  }
  render() {
    return (
      <div>
      <button onClick={this.handleOnClick}> Submit </button>
        <FeedbackForm name={this.state.name} depart={this.state.depart} rating={this.state.rating} users={this.state.users} 
        updateName={this.updateName} updateDepartment={this.updateDepartment} updateRating={this.updateRating}/>
      </div>
    )
  }
}
export default App;
