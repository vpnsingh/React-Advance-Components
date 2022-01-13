import { combineReducers, createStore } from 'redux'
import todos from '../reducer/reducer'

const rootReducer = combineReducers({
    todos,
})

const store = createStore(rootReducer);

export default store;