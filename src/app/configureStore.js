import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { loadState, saveState } from "./localStorage";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancers(applyMiddleware(thunk));

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, middleware);

store.subscribe(() => {
	saveState(store.getState());
});

export default store;
