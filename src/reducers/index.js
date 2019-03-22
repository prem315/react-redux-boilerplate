import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// reducers
import counterReducer from './counter';

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    counter: counterReducer
})

export default rootReducer