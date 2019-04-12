import React from 'react';

class SmurfCard extends React.Component {
  render() {
    return (
      <div>
        <h3>ID# {this.props.smurf.id} | {this.props.smurf.name}</h3>
        <p>Age: {this.props.smurf.age}</p>
        <p>Height: {this.props.smurf.height}</p>
      </div>
    )
  }
}

export default SmurfCard;
