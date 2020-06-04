import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import blends from './blends'
import blend from './singleBlend'
import teas from './teas'
import tea from './singleTea'

const reducer = combineReducers({blends, blend, teas, tea})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './blends'
export * from './singleBlend'
