import { FILTER_HOUSES } from './const'
const initialState = {
  loading: false,
  list: [],
  filters: undefined
}


function housesReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_HOUSES:
      console.log(action, "action in reducer")
      return {
        ...state,
        filters: action.filters
      }
    default:
      return {
        ...state
      }
  }
}


export default housesReducer