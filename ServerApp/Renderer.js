import React from 'react';
import { Provider } from "react-redux";
import {renderToString} from 'react-dom/server';
import {StaticRouter } from 'react-router-dom';
import Layout from "../redux/components/Layout";
import Hello from "../redux/components/Hello";
import PostSaga from "../redux/components/PostSaga";
import App from "../redux/components/App";
import serialize from "serialize-javascript";
export default (req, store, context) => {
  const reduxState = store.getState( );
  //console.log(reduxState);
  const reactDom = renderToString( 
    <Provider store={store}>
        <App />
    </Provider>
   );


  return {
    htmlcode: `<div id="app">${ reactDom }</div>
              <script>
                  window.__PRELOADED_STATE__ = ${ serialize( reduxState, { isJSON: true } ) }
              </script>`,
    routestatus: context.status
  }
};