import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { ADD_ARTICLE } from "../constants/action-types";
import { fetchCircuits } from "../api";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function getData() {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "DATA_LOADED", payload: json });
      });
  };
}

export function getDataReduxSaga() {
  console.log("getDataReduxSaga");
  return {
    type: "DATA_REQUESTED",
    payload: {
        request:{
            url:'/posts'
        }
    }
}
}

export const initializeSession = ( ) => ( {
  type: "INITIALIZE_SESSION",
} );

const storeData = ( data ) => ( {
  type: "STORE_DATA",
  data,
} );

// export const fetchData = ( ) => ( dispatch ) =>
//   fetchCircuits( ).then( res => 
//     {
//       console.log("fetch done");
//       dispatch( storeData( res ) );
//     } );

    export function fetchData() {
      return function(dispatch) {
        return fetch("https://jsonplaceholder.typicode.com/posts")
          .then(response => response.json())
          .then(json => {
            dispatch({ type: "STORE_DATA", payload: json });
          });
      };
    }