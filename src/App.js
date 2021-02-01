import './App.css';
import React from 'react'
import {useSessionStorage} from "./components/session-storage-hook/session-storage-hook";
import {Links} from "./components/links/links";
import {BrowserRouter as Router} from "react-router-dom";
import {AppSwitch} from "./components/switch/switch";

const App = () => {
    const [currentUser, setCurrentUser] = useSessionStorage("currentUser", undefined);
    console.log(currentUser)
    return (
        <div className="App">
            <Router>
                <div className={"sidebar"}>
                    <Links currentUser={currentUser}/>

                    <div className={"content"}>
                        {(currentUser && currentUser.username) ? (<h1 style={{margin:"21.4px 0"}}>{`Welcome, ${currentUser.username}.`}</h1>) : ""}
                        <AppSwitch currentUser={currentUser}
                                   setCurrentUser={setCurrentUser}/>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default App;
