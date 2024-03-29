import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import usersReducer from './reducers/usersReducer'
import personReducer from './reducers/personReducer'
import notificationReducer from './reducers/notificationReducer'
import errorReducer from './reducers/errorReducer'

const reducer = combineReducers({
  users: usersReducer,
  people: personReducer,
  notification: notificationReducer,
  errorMessage: errorReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store