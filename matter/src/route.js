import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import TextFieldBasicExample from "./CreatMatter";
import Matters from './MattersRender';
import  ButtonCommandBarExample from './Components/CreateButton';
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                <Route path="/" component={ ButtonCommandBarExample} />
                    <Route path="/Create" component={TextFieldBasicExample} />
                 
                </Switch>
            </Router>
        )
    }
}