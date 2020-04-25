import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middleware";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(forbiddenWordsMiddleware))
);

export default store;