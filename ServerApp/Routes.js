import PostSaga from "../redux/components/PostSaga";

export default [
    {
        path: "/",
        component: PostSaga,
        exact: true,
    },
];