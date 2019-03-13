import {
  GET_SMURFS,
  GOT_SMURFS,
  SMURF_ERR,
  ADD_SMURF,
  ADDED_SMURF,
  GET_ERR
} from '../actions/index.js';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case GET_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true
      }
    case GOT_SMURFS:
      return{
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload,
      }
    case GET_ERR:
      return{
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }
    case ADD_SMURF:
      return {
        ...state,
        fetchingSmurfs: true
      }
    case ADDED_SMURF:
      return{
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload,
      }
    case SMURF_ERR:
      return{
        ...state,
        fetchingSmurfs: false,
        error: action.payload,
      }
    default:
      return state;
    }
  }

export default reducer;
