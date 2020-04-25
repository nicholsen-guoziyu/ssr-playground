import React, { Component } from "react";
import { connect } from "react-redux";
import { getDataReduxSaga } from "../actions/index";

export class PostSaga extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getDataReduxSaga();
    console.log("Redux Saga");
  }

  render() {
    return (
      <ul>
        {this.props.articles.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.remoteArticles.slice(0, 10)
  };
}

export default connect(
  mapStateToProps,
  { getDataReduxSaga }
)(PostSaga);