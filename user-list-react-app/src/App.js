import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    name: "",
    names: [],
  }
  handleUserName = (e) => {
    this.setState({
      name: [e.target.value],
    })
  }
  creatingList = () => {
    let { names, name } = this.state
    console.log('old list', names)
    this.setState({
      names: [...names, name]
    })
  }
  render() {
    return (
      <div className="App">
        <input type="text" onClick={this.showNames} onChange={this.handleUserName} />
        <button onClick={this.creatingList}>add</button>

        {
          this.state.names.map((n) => {
            return (
              <p>{n}</p>
            )
          })
        }
      </div>
    );
  }
}
export default App;
