import * as act from "../actions/actions";

const initialState = {
  sets: [],
  currentSet: {},
  isFetching: false,
}

const setItem = {
  id: '',
  code: '',
  name: '',
  release_date: '',
  card_count: 0,
  page_url: ''
}



export function setReducer(state = initialState, action) {

  switch (action.type) {

    case act.FETCH_SETS_START:
      return {
        ...state,
        isFetching: true
      }

    case act.FETCH_SETS_FINISH:
      return {
        ...state,
        isFetching: false
      }

    case act.FETCH_SETS_RECEIVED:
      return {
        ...state,
        sets: action.payload
      };


    default:
      return state;
  }
}