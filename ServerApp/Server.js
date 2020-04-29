import configureStore from "../redux/store/ssr-saga-store";
import {retrieveData, initializeSession} from "../redux/actions/index";
import routes from "./routes";
import { matchPath } from 'react-router-dom';
import renderer from './Renderer';
import {renderRoutes,matchRoutes} from "react-router-config";
const express = require('express');
const app = express();

app.use(express.static('public',{
    index: false
}));

app.get('*', (req, res) => {
    console.log(req.url);
    const store = configureStore();
    store.dispatch( initializeSession( ) );
    console.log(store.getState());
    //const dataRequirements =
        // routes
        //     .filter( route => matchPath( req.url, route ) ) // filter matching paths
        //     .map( route => route.component ) // map to components
        //     .filter( comp => comp.loadData ) // check if components have data requirement
        //     .map( comp => store.dispatch( comp.loadData() ) ); // dispatch data requirement
        //     console.log(dataRequirements);

    const currentRoute = routes.find(route => matchPath(req.url, route)) || {};
    let requests;
    if (currentRoute.loadData) {
        requests = currentRoute.loadData.map((data) => {
            return store.dispatch(retrieveData(data.url, data.actionType))
        });
    } 
    console.log(requests);
    Promise.all( requests ).then( ( ) => {
        const context = {};
        console.log("inside promise");
        
        const content = renderer(req, store, context);
        if (content.routestatus == 404) {
            res.status(404).end("Not found, 404 status returned (Server Side Generated)");
        } else {
            console.log("send content");
            res.send(content.htmlcode);
        }
    });
});

app.listen(3040, function () {
    console.log('Listening on port 3040!');
});