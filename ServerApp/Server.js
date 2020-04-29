import configureStore from "../redux/store/ssr-saga-store";
import {initializeSession} from "../redux/actions/index";
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
    // const dataRequirements = routes
    //     .filter( route => matchPath( req.url, route ) ) // filter matching paths
    //     .map( route => route.component ) // map to components
    //     .filter( comp => comp.loadData ) // check if components have data requirement
    //     .map( comp => 
    //         {
    //             console.log(store);
    //             console.log(comp);
    //             store.dispatch( comp.loadData() )}); // dispatch data requirement

    let component = routes.find(route => matchPath(req.url, route)) || {};
    console.log(component.component);
    console.log(component.component.loadData);
    let promise = store.dispatch(component.component.loadData());

    // const myRoutes = matchRoutes(routes, req.path);

    // const promises = myRoutes.map(({route, match}) => {
    //     return route.loadData
    //         ? route.loadData(store)
    //         : Promise.resolve(null)
    // });
    console.log(promise);
    promise.then( () => {
        const context = {};
        console.log("inside promise");
        console.log(promise);
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