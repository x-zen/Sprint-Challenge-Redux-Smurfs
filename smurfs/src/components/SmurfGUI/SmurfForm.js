import React from "react";
import { connect } from 'react-redux';

import { addSmurf } from '../../actions'

class SmurfForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        id: null,
        name: "",
        age: "",
        height: ""
        },
      isAddingSmurf: false
    };
  }

  handleChanges = e => {
    this.setState({
      smurf: {
      ...this.state.smurf,
      [e.target.name]: e.target.value
      }
    });
  };

  addSmurf = e => {
  e.preventDefault();
  this.props.addSmurf(this.state.smurf);
  this.setState({
    smurf: {
      id: null,
      name: "",
      age: "",
      height: ''
    }
  });
};
  render() {
    return (
      <div>
        <form onSubmit={this.addSmurf}>
          <h3>Name:</h3>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChanges}
            placeholder='Name'
          />
          <h3>Age:</h3>
          <input
            name="age"
            type="number"
            value={this.state.age}
            onChange={this.handleChanges}
            placeholder='Age'
          />
          <h3>Height:</h3>
          <input
            name="height"
            type="text"
            value={this.state.height}
            onChange={this.handleChanges}
            placeholder='Height'
          />
          <br />
          <button className="btn">Add New Smurf!</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    smurf: state.smurf,
    isAddingSmurf: state.isAddingSmurf
  };
};

export default connect(
  mapStateToProps,
  { addSmurf }
)(SmurfForm);
