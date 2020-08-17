import { FILTER_ADDRESS } from "./const"

const initialState = {
  filters: {
    hasImageItemsOnly: false,
    confirmedItemsOnly: false,
    rooms: undefined,
    area: undefined,
    age: undefined,
    fullMortgage: false,
    budget: {
      rent: {
        min: undefined, max: undefined
      },
      mortgage: {
        min: undefined, max: undefined
      }
    },
    features: []
  }
}


function reducerAddress(state = initialState, action) {

  switch (action.type) {
    case FILTER_ADDRESS:
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


export default reducerAddress