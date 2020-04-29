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

// function loadData(store)
// {
//   store.dispatch(getDataReduxSaga());
// }


// export default {
//   component: connect(null, { getDataReduxSaga })(App),
//   loadData
// };

// App.loadData = getDataReduxSaga; // static declaration of data requirements

// const mapDispatchToProps = {
//   getDataReduxSaga,
// };

// export default connect( null, mapDispatchToProps )(App);

// App.loadData = fetchData; // static declaration of data requirements

// const mapDispatchToProps = {
//   fetchData,
// };

// export default connect( null, mapDispatchToProps )( App );

export default App;
