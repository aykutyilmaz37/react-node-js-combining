import { createStore,applyMiddleware  } from 'redux'
import {rootReducer} from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reduxPromise from 'redux-promise-middleware'

// Store'ımızı oluşturduk. Şu an için ekleme yapmayacağız.
export const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(reduxPromise(), thunk, logger)
	)
)