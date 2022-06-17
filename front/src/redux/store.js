import {createStore , applyMiddleware} from 'redux'
import { composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
  
let store = createStore(
    rootReducer ,
    composeWithDevTools(applyMiddleware(thunk))
);

// const persistConfig = {
// key: 'root',
// storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// let store = createStore(
//     persistedReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// );

export default store;