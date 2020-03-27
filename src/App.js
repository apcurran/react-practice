import React, { Component } from 'react';
import Ninjas from "./Ninjas";
import AddNinja from './AddNinja'

// Container Component
class App extends Component {
  state = {
    ninjas: [
      { name: "Ryu", age: 30, belt: "black", id: 1 },
      { name: "Yoshi", age: 20, belt: "green", id: 2 },
      { name: "Crystal", age: 25, belt: "pink", id: 3 }
    ]
  };

  addNinja = (ninja) => {
    ninja.id = Date.now().toString();
    const ninjas = [...this.state.ninjas, ninja];

    this.setState({
      ninjas: ninjas
    });
  }

  deleteNinja = (id) => {
    const ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    });

    this.setState({
      ninjas: ninjas
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My First React App</h1>
          <p>Welcome!</p>
          <Ninjas ninjas={ this.state.ninjas } deleteNinja={ this.deleteNinja } />
          <AddNinja addNinja={ this.addNinja } />
        </header>
      </div>
    );
  }
}

export default App;
