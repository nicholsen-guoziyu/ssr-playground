import React from "react";
import List from "./List";
import Form from "./Form";
import Post from "./Post";
import PostSaga from "./PostSaga";

const App = () => (
  <>
    <div>
      <h2>Articles</h2>
      <List />
    </div>
    <div>
      <h2>Add a new article</h2>
      <Form />
    </div>
    {/* <div>
      <h2>API posts</h2>
      <Post />
    </div> */}
    <div>
      <h2>Saga API posts</h2>
      <PostSaga />
    </div>
  </>
);

export default App;