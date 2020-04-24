import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter as Router} from 'react-router-dom';
import Hello from "../ClientAppSSR/Hello";

export default (req) => {
    let context = {};
    const content = renderToString(
        <Router location={req.path} context={context}>
            <Hello name="World" />
        </Router>
    );

    return {
        htmlcode: `<html>
          <head>
            <title>SVCC React Application</title>
            <link rel="stylesheet" href="App.css">            
          </head>
          
          <body>
            <div id="app">${content}</div>
            <script src="clientbundlessr.js"></script>
          </body>
          
        </html>
      `,
        routestatus: context.status
    }
};