import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [{ name: "Ralf", age: 49 }, { name: "Asikoppi", age: 20 }],
    showPersons: false
  };

  switchNameHandler = newName => {
    //console.log("Was clicked, asshole!");
    this.setState({
      persons: [{ name: newName, age: 50 }, { name: "Asikoppi", age: 20 }]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Ralf", age: 50 },
        { name: event.target.value, age: 20 }
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={() => this.switchNameHandler("Ralfi!!!!!")}
            changed={this.nameChangedHandler}
          >
            Hobbies: Kill people!
          </Person>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi App, Asshole!</h1>
        <p>It works, dumbo!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Diplay
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
