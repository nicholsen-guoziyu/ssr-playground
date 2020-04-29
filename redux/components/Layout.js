import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "../../ServerApp/routes";
import App from "./App";

class Layout extends React.Component {

    render() {
        return (
            // <Switch>
            //         { routes.map( route => <Route key={ route.path } { ...route } /> ) }
            // </Switch>
            <App/>
        );
    }
}

export default Layout;