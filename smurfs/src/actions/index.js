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
export const ADDED_SMURF = 'ADDED_SMURF';
export const SMURF_ERR = 'SMURF_ERR';
export constt addSmurf = (id) => {
  return (dispatch) => {
    axios.post('http://localhost:3000/smurfs')
      .then(res => {
        dispatch({type: addSmurf, payload: res.data})
      })
      .catch(err => {
        dispatch({type: SMURF_ERR, payload: err})
      })
  }

export const GET_SMURFS = 'GET_SMURFS';
export const GOT_SMURFS = 'GOT_SMURFS';
export ERR = 'ERR';
export const getSmurfs = () => {
  return (dispatch) => {
    axios.get('http://localhost:3000/smurfs')
    .then(res => {
      dispatch({type: getSmurfs, payload: res.data})
    })
    .catch(err => {
      dispatch({type: ERR, payload: err})
    });
  };
};
