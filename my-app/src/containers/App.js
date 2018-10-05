import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
//import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons:[
      { id: 'sdfsd', name: 'Top', age: 28 },
      { id: 'sgrko', name: 'Nethalos', age: 20 },
      { id: 'fkokf', name: 'Stella', age:18 }
    ],
    showPerson: false,
  }

  nameChangeHandler = (event, id) => {
    const persons = [...this.state.persons];
    const personIndex = persons.findIndex(p => {
      return p.id === id;
    });
    persons[personIndex].name = event.target.value;

    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  render() {

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}/>  
        </div> 
      );
    }

    return (
        <div className={classes.App}>
          <Cockpit
            appTitle={this.props.title} 
            showPerson={this.state.showPerson}
            persons={this.state.persons}
            clicked={this.togglePersonHandler}/>
          {persons}
        </div>
    );
    
  }
}

export default App;
