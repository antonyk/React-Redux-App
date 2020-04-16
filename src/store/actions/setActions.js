import axios from 'axios'
import * as act from './actions'

// thunk action
// SEE HOW TO PASS ARGUMENTS to this fetch
export function fetchSets() {

  return (dispatch) => {
    // set state to fetching
    dispatch({ type: act.FETCH_SETS_START });

    // send axios request to api for data
    axios
    .get('https://api.scryfall.com/sets')
    // if data returned, set to current state and disable fetching state
    .then(res => {
      // console.log(res)
      // 1. stop spinner / change state from loading to not-loading
      // 2. change state of sets data to "new sets received"
      // TWO dispatches here
      dispatch({ type: act.FETCH_SETS_FINISH })
      dispatch({ 
        type: act.FETCH_SETS_RECEIVED, 
        payload: res.data.data })
    })
    // if error, display error message
    .catch(err => {
      dispatch({ type: act.FETCH_SETS_FINISH })
      dispatch({ 
        type: act.FETCH_SETS_FAIL, 
        payload: `Error ${err.response.status}: ${err.response.data}` })
    })
  }
}

// implement local caching
export function getSets() {
  return dispatch => {

    if (localStorage.getItem('card-sets')) {
      dispatch({
        type: act.FETCH_SETS_RECEIVED,
        payload: JSON.parse(localStorage.getItem('card-sets'))
      })
    }

  }
}


export function toggleFavoriteSet(setId) {
  return {
    type: 'TOGGLE_FAVORITE_SET',
    payload: setId
  }
}
