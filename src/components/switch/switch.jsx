import React from 'react'
import {LoginForm} from "../login-form/login-form";
import {RegisterForm} from "../register-form/register-form";
import {Logout} from "../logout/logout";
import {Redirect, Route, Switch} from 'react-router';
import {Chat} from "../chat/chat";
import {CertificateStore} from "../certificate-store/certifiacte-store";

export const AppSwitch = props => {
    const isAuth = props.currentUser
    return (
        <Switch>
            <Route path="/certificate-store" render={() =>
                (!isAuth) ? <Redirect from="/certificate-store" to={"/login"}/> :
                    <CertificateStore currentUser={props.currentUser}/>
            }/>
            <Route path="/chat" render={() =>
                (!isAuth) ? <Redirect from="/chat" to={"/login"}/> :
                    <Chat currentUser={props.currentUser}/>
            }/>
            <Route path="/login" render={() =>
                isAuth ? <Redirect to={"/chat"}/> :
                    <LoginForm setCurrentUser={props.setCurrentUser}/>
            }/>
            <Route path="/register">
                <RegisterForm/>
            </Route>

            <Route path="/logout" render={() =>
                isAuth ?
                    <Logout token={props.token} setToken={props.setToken} setCurrentUser={props.setCurrentUser}/> :
                    <Redirect to={"/login"}/>
            }/>

            <Route exact path={"/"} render={() =>
                (!isAuth) ?
                    <Redirect to={"/login"}/> :
                <Redirect to={"/chat"}/>
            }/>
        </Switch>
    )
}
