import React from 'react'
import {Link} from "react-router-dom";

export const Links = props => {
    return (
        <div className={"links"}>
            <ul>
                <li>
                    <i className="fas fa-home"/> <Link to="/">Home</Link>
                </li>
                {props.currentUser.token ? "" : (<li>
                    <i className="fas fa-sign-in-alt"/> <Link to="/login">Login</Link>
                </li>)}
                {props.currentUser.token ? "" : (<li>
                    <i className="fas fa-user"/> <Link to="/register">Registration</Link>
                </li>)}
                {props.currentUser.token ? (<li>
                    <i className="fas fa-comments"/> <Link to="/chat">Chat</Link>
                </li>) : ""}
                {props.currentUser.token ? (<li>
                    <i className="fas fa-sign-out-alt"/> <Link to="/logout">Logout</Link>
                </li>) : ""}
            </ul>
        </div>
    )
}
