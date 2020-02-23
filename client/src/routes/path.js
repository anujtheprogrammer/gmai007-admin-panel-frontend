import { Switch, Route } from "react-router-dom";
import React, { Component } from 'react';
import Login from "../components/login";

export default class Paths extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/" component={Login} />
                </Switch>
            </div>
        )
    }
}