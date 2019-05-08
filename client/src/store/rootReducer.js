import { combineReducers } from 'redux'
import { helloWorldReducer } from './reducers/helloWorldReducer'

const allReducers = {
    helloWorldReducer
}

export const rootReducer = combineReducers(allReducers)