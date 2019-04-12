import React from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../../actions';

import SmurfCard from './SmurfCard.js';

class SmurfList extends React.Component {

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div>
        {this.props.smurfs.map(smurf => {
          return <SmurfCard key={smurf.id} smurf={smurf} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isGettingSmurf: state.isGettingSmurf
  };
};

export default connect(mapStateToProps,
  { getSmurfs }
)(SmurfList);
