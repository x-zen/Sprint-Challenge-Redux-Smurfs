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
   U - updateSmurf
   D - deleteSmurf
*/
import axios from 'axios';


export const ADDING_SMURF_START = 'ADDING_SMURF_START';
export const ADDING_SMURF_SUCCESS = 'ADDING_SMURF_SUCCESS';
export const ADDING_SMURF_FAIL = 'ADDING_SMURF_FAIL';
export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADDING_SMURF_START });
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      dispatch({ type: ADDING_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADDING_SMURF_FAIL, payload: err });
    });
}

export const GETTNG_SMURF_START = 'GETTNG_SMURF_START';
export const GETTNG_SMURF_SUCCESS = 'GETTNG_SMURF_SUCCESS';
export const GETTNG_SMURF_FAIL = 'GETTNG_SMURF_FAIL';
export const getSmurfs = () => dispatch => {
  dispatch({ type: GETTNG_SMURF_START });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({ type: GETTNG_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GETTNG_SMURF_FAIL, payload: err });
    });
}

export const UPDATING_SMURF_START = 'UPDATING_SMURF_START';
export const UPDATING_SMURF_SUCCESS = 'UPDATING_SMURF_SUCCESS';
export const UPDATING_SMURF_FAIL = 'UPDATING_SMURF_FAIL';
export const updateSmurf = smurf => dispatch => {
  dispatch({ type: UPDATING_SMURF_START });
  axios
    .put('http://localhost:3333/smurfs/123')
    .then(res => {
      dispatch({ type: UPDATING_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GETTNG_SMURF_FAIL, payload: err });
    });
}

export const DELETING_SMURF_START = 'DELETING_SMURF_START';
export const DELETING_SMURF_SUCCESS = 'DELETING_SMURF_SUCCESS';
export const DELETING_SMURF_FAIL = 'DELETING_SMURF_FAIL';
export const deleteSmurf = smurf => dispatch => {
  dispatch({ type: DELETING_SMURF_START });
  axios
    .delete('http://localhost:3333/smurfs/123')
    .then(res => {
      dispatch({ type: DELETING_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DELETING_SMURF_FAIL, payload: err });
    });
}
