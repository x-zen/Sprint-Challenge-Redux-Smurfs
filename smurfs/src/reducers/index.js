/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
import {
  ADDING_SMURF_START,
  ADDING_SMURF_SUCCESS,
  ADDING_SMURF_FAIL,
  GETTNG_SMURF_START,
  GETTNG_SMURF_SUCCESS,
  GETTNG_SMURF_FAIL,
/*  UPDATING_SMURF_START,
  UPDATING_SMURF_SUCCESS,
  UPDATING_SMURF_FAIL,
  DELETING_SMURF_START,
  DELETING_SMURF_SUCCESS,
  DELETING_SMURF_FAIL*/
} from '../actions';

const initialState = {
  smurfs: [],
  isAddingSmurf: false,
  isGettingSmurf: false,
  isUpdatingSmurf: false,
  isDeletingSmurf: false,
  err: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDING_SMURF_START:
      return {
        ...state,
        isAddingSmurf: true,
      }
    case ADDING_SMURF_SUCCESS:
      return {
        ...state,
        isAddingSmurf: false,
        smurfs: action.payload
      }
    case ADDING_SMURF_FAIL:
      return {
        ...state,
        isAddingSmurf: false,
        err: action.payload
      }
    case GETTNG_SMURF_START:
      return {
        ...state,
        isGettingSmurf: true,
      }
    case GETTNG_SMURF_SUCCESS:
      return {
        ...state,
        isGettingSmurf: false,
        smurfs: action.payload
      }
    case GETTNG_SMURF_FAIL:
      return {
        ...state,
        isGettingSmurf: false,
        err: action.payload
      }
  default:
    return state;
  }
};

export default reducer;
