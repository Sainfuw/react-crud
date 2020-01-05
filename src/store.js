import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

// reducers
import rootReducer from './reducers'

// estado inicial
const initialState = {}

// middleware
const middleware = [thunk]

// creacion del store
const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store