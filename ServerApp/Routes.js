import PostSaga from "../redux/components/PostSaga";
import App from "../redux/components/App";

export default [
    {
        path: "/",
        component: App,
        loadData: [{url : "https://jsonplaceholder.typicode.com/users", actionType : "USERS_DATA"},
                   {url : "https://jsonplaceholder.typicode.com/posts", actionType : "POSTS_DATA"}]
    },
];