import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import serviceReducer from './reducers/service';
import banksReducer from './reducers/banks';
import compareReducer from './reducers/compare';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    services: serviceReducer,
    banks: banksReducer,
    compare: compareReducer
})

const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] dispatching', action);
            const result = next(action);
            console.log('[Middleware] next state', store.getState());
            return result;
        }
    }
}

const store = createStore(rootReducer, composeEnhancers(
        applyMiddleware(...logger, thunk)
      ));

export default store;