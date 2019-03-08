import React, { Component } from 'react';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    smurfs: ''
    error: null,
  };

  componentDidMount (e) => {

  }
  changeHandler = e => {
    this.setState({[e.target.name]: e.terget.value});
  };

  getSmurfs = e => {
    axios

  }

  addSmurf = e => {

  }

  render() {
    return (


      <div className="smurf-list">
      { props.smurfs.map ( smurf => (
              <div id={smurf.id} key={smurf.id}>
                  <div>
                  <p> {smurf.name} </p>
                  <p> {smurf.age} </p>
                  <p> {smurf.height} </p>
                  </div>
                  <button onClick={(event,id=smurf.id) => props.delete(event,id)} >Delete</button>
              </div>
          ))
      }
      </div>
    );
  }
}

export default App;
