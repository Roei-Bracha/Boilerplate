import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import mainReducer from '../reducers/main'
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            main:mainReducer
        }),
        composeEnhancers(applyMiddleware())
    );
    return store;
};