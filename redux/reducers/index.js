import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: [],
  remoteArticles: [],
  users:[],
  posts:[],
  isLoading:false
};

function rootReducer(state, action) {
  console.log(action.type);
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }

  if (action.type === "DATA_LOADED") {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload),
    });
  }
  else if (action.type === "DATA_REQUESTED") {
    return Object.assign({}, state, {
      articles: [],
  remoteArticles: [],
  isLoading: false
  });
  }
  else if (action.type === "DATA_REQUESTED_SUCCESS") {
    //console.log(action.payload.data);
    console.log("Success");
    return Object.assign({}, state, {
      articles: [],
      remoteArticles: action.payload.data,
      isLoading: true
    });
    
  }
  else  if (action.type === "STORE_DATA") {
    //console.log(action.payload.data);
    //console.log(action);
    return Object.assign({}, state, {
      articles: [],
      remoteArticles: action.payload,
      isLoading: true
    });
  }
  else  if (action.type === "USERS_DATA") {
    return Object.assign({}, state, {
      users : action.payload
    });
  }

  else  if (action.type === "POSTS_DATA") {
    return Object.assign({}, state, {
      posts : action.payload.slice(0, 10)
    });
  }
  console.log("initial state");
  console.log(state);
  return state;
}

export default rootReducer;