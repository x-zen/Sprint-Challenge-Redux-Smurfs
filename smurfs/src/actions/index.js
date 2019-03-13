import axios from 'axios';


export const ADD_SMURF = 'ADD_SMURF';
export const ADDED_SMURF = 'ADDED_SMURF';
export const SMURF_ERR = 'SMURF_ERR';
export const GET_SMURFS = 'GET_SMURFS';
export const GOT_SMURFS = 'GOT_SMURFS';
export const GET_ERR = 'ERR';


export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(response => {
      console.log(response);
      dispatch({
        type: ADDED_SMURF,
        payload: response.data
      });
    })
    .catch(err => dispatch({ type: SMURF_ERR, payload: err }));
};

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS });
  axios
    .get("http://localhost:3333/smurfs")
    .then(response => {
      console.log("fetch finished");
      dispatch({
        type: GOT_SMURFS,
        payload: response.data
      });
    })
    .catch(err => dispatch({ type: GET_ERR, payload: err }));
};
