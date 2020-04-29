import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middleware";
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
// let middleware = [
//     thunk,
//     axiosMiddleware(axios.create({baseURL:"https://jsonplaceholder.typicode.com"}))
// ];
let middleware = [
    thunk
];

export default function configureStore(initialState = {articles: [],
    remoteArticles: [],
    users:[],
    posts:[],
    isLoading:false}) {
    const composeEnhancers = composeWithDevTools({
        // Specify name here, actionsBlacklist, actionsCreators and other options if needed
    });
    
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(...middleware))
    );
}