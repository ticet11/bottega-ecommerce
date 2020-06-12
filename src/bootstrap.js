import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Router, Switch, Route } from "react-router-dom";
import reducers from "./reducers";

import Layout from "./components/Layout";
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import history from "./history";

import "./style/main.scss";
const createStoreWithMiddleware = applyMiddleware()(createStore);

function main() {
    ReactDOM.render(
        <Provider store={createStoreWithMiddleware(reducers)}>
            <Router history={history}>
                <Layout>
                    <Switch>
                        <Route path="/" exact component={Signin} />
                    </Switch>
                </Layout>
            </Router>
        </Provider>,
        document.querySelector(".app-wrapper")
    );
}

document.addEventListener("DOMContentLoaded", main);
