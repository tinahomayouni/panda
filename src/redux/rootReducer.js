import { combineReducers } from 'redux'
import login from "./auth/reducer";
import housesReducer from './housesReducer/reducer'



export const rootReducer = combineReducers({
  housesReducer,
  login
})