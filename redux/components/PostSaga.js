import React, { Component } from "react";
import { connect } from "react-redux";


export class PostSaga extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.getDataReduxSaga();
  }

  // render() {
  //   console.log("render");
  //   return (
  //     <div>Test</div>
  //   );
  // }
    render() {
      console.log(this.props.articles);
      return (
        <ul>
          {this.props.articles.map(el => (
            <li key={el.id}>{el.title}</li>
          ))}
        </ul>
      );
  }
}

// function mapStateToProps(state) {
//   return {
//     articles: state.remoteArticles.slice(0, 10)
//   };
// }
const mapStateToProps = (state) => {
  console.log("PostSaga");
  console.log(state);
  return {
    articles: state.posts
  };
};

// export default connect(mapStateToProps,
//     { speakersFetchData })(Speakers)


// this is returning a promise
// function loadData(store) {
//   return store.dispatch(getDataReduxSaga());
// }

// export default {
//   component: connect(mapStateToProps, { getDataReduxSaga })(PostSaga),
//   loadData
// };

// export default connect(mapStateToProps,
//     { getDataReduxSaga })(PostSaga)

// PostSaga.loadData = fetchData; // static declaration of data requirements

// const mapDispatchToProps = {
//   fetchData,
// };

export default connect( mapStateToProps, null )( PostSaga );