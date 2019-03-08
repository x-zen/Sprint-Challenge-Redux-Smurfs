/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   (stretch)U - updateSmurf
   (stretch)D - deleteSmurf
*/

import axios from 'axios';

export const ADD_SMURF = 'ADD_SMURF';
export function addSmurf(newSmurf) {
  return {
    type: ADD_SMURF,
    payload: {
      name: newSmurf.name,
      age: newSmurf.age,
      height: newSmurf.height,
      id: newSmurf.id
    }
  }
}

export const GET_SMURFS = 'GET_SMURFS';
export function getSmurfs(smurfs) {
  return (dispatch) => {
    axios.get('http://localhost:3000/smurfs')
    .then(res => {
      dispatch(type: getSmurfs, res.data))
    })
    .catch(err => {
      throw(err);
    });
  };
};
