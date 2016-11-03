import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import commonReducer from './commonReducer'

export const rootReducer = combineReducers({
    commonReducer,
  	routing: routerReducer
})