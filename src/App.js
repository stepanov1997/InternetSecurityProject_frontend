import './App.css';
import React, {useState} from 'react'
import {LoginForm} from "./components/login-form/login-form";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import {
    Switch,
    Route
} from 'react-router';
import {RegisterForm} from "./components/register-form/register-form";
import {UserList} from "./components/users/user-list";
import {Logout} from "./components/logout/logout";
import {useSessionStorage} from "./components/session-storage-hook/session-storage-hook";

const App = () => {
    const [token, setToken] = useSessionStorage("token", "");
    const [currentUser, setCurrentUser ] = useState("");

    return (
        <div className="App">
            <Router>
                <div>
                    {currentUser?(<h1>{`Welcome, ${currentUser}.`}</h1>):""}
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        {token ? "" : (<li>
                            <Link to="/login">Login</Link>
                        </li>)}
                        {token ? "" : (<li>
                            <Link to="/register">Registration</Link>
                        </li>)}
                        {token ? (<li>
                            <Link to="/logout">Logout</Link>
                        </li>) : ""}
                    </ul>

                    <Switch>
                        <Route exact path="/(users)?">
                            <UserList token={token}/>
                        </Route>
                        <Route exact path="/login">
                            <LoginForm token={token}
                                       setToken={setToken}
                                       setCurrentUser={setCurrentUser}
                            />
                        </Route>
                        <Route exact path="/register">
                            <RegisterForm token={token}/>
                        </Route>

                        <Route exact path="/logout">
                            <Logout token={token} setToken={setToken} setCurrentUser={setCurrentUser}/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
