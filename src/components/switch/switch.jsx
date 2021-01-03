import React from 'react'
import {UserList} from "../users/user-list";
import {LoginForm} from "../login-form/login-form";
import {RegisterForm} from "../register-form/register-form";
import {Logout} from "../logout/logout";
import {Route, Switch} from 'react-router';
import {Chat} from "../chat/chat";

export const AppSwitch = props => {
    return (
        <Switch>
            <Route exact path="/(chat)?">
                <Chat currentUser={props.currentUser} token={props.token}/>
            </Route>
            <Route exact path="/login">
                <LoginForm token={props.token}
                           setToken={props.setToken}
                           setCurrentUser={props.setCurrentUser}
                />
            </Route>
            <Route exact path="/register">
                <RegisterForm token={props.token}/>
            </Route>

            <Route exact path="/logout">
                <Logout token={props.token} setToken={props.setToken} setCurrentUser={props.setCurrentUser}/>
            </Route>
        </Switch>
    )
}
