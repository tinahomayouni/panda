import housesReducer from './houseFilter/reducer'
import reducerAddress from './addressFilters/reducer'

import { combineReducers } from 'redux'



export const rootReducer = combineReducers({
  housesReducer,
  reducerAddress
})