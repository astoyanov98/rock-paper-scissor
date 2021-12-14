import { applyMiddleware, combineReducers, createStore, Store, compose } from 'redux';
import playerReducer from '../reducers/player';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const rootReducer = combineReducers({
    game: playerReducer
});

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const composeEnhancers =
    (window && (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// Create a configure store function of type `IAppState`
export default function configureStore() {
    const store = createStore(persistedReducer, compose(applyMiddleware(thunk), composeEnhancers()));
    let persistor = persistStore(store)
    return { store, persistor };
}