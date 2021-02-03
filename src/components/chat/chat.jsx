import React, {useState, useEffect} from 'react'
import './chat.css'
import './messages.css'
import '../../fonts/fontawesome-free-5.15.1-web/css/all.css';
import config from "../../config.json";
import {Redirect} from "react-router-dom";
import {useHistory} from "react-router";

export const Chat = props => {
    const [activeUsers, setActiveUsers] = useState([])
    const [inactiveUsers, setInactiveUsers] = useState([])
    const [refresh, setRefresh] = useState(false)
    const [isOpenActive, setIsOpenActive] = useState(true);
    const [isOpenInactive, setIsOpenInactive] = useState(false);
    const [receiver, setReceiver] = useState(undefined)
    const [blockedReceivers, setBlockedReceivers] = useState([])
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState("")

    const history = useHistory();

    setTimeout(() => {
        setRefresh(!refresh);
    }, 5_000)

    const toggleActive = () => setIsOpenActive(!isOpenActive);
    const toggleInactive = () => setIsOpenInactive(!isOpenInactive);


    useEffect(() => {

        fetchActiveUsers(history, setActiveUsers, 'active', props.currentUser)
            .then(() => fetchActiveUsers(history, setInactiveUsers, 'inactive', props.currentUser))
            .then(() => {
                if (receiver && !blockedReceivers.includes(receiver)) fetchReceiverMessages(setMessages, blockedReceivers, setBlockedReceivers, props.currentUser, receiver)
            })

    }, [refresh, receiver, props.currentUser, blockedReceivers, history])

    if (!props.currentUser) {
        return <Redirect to={{pathname: '/login', state: {from: props.location}}}/>;
    }

    function openChat(username) {
        setReceiver(username)
    }

    const handleKeyPress = async (event) => {
        if (event.key === 'Enter') {
            await sendMessageToReceiver(messages, setMessages, blockedReceivers, setBlockedReceivers, props.currentUser, receiver, newMessage)
            setNewMessage("");
        }
    }

    const handleClick = async () => {
        await sendMessageToReceiver(messages, setMessages, blockedReceivers, setBlockedReceivers, props.currentUser, receiver, newMessage)
        setNewMessage("");
    }

    return (
        <div className={"chat"}>
            <div className={"users-list-by-activity"}>
                <div onClick={toggleActive} className={"activeUserHeader"}>{activeUsers.length} Online
                    people {isOpenActive ? "(Opened)" : "(Collapsed)"}</div>
                <div className={`collapse-${isOpenActive ? "show" : "hide"} active-users`}>
                    {
                        activeUsers.map((val, id) => (
                            <div key={id} onClick={() => openChat(val.username)}
                                 className={"activeUserItem"}>{val.username}
                                <i className={`fas fa-circle ${blockedReceivers.includes(val.username) ? "blocked" : "online"}`}/>
                            </div>
                        ))
                    }
                </div>
                <div onClick={toggleInactive} className={"inactiveUserHeader"}>{inactiveUsers.length} Offline
                    people {isOpenInactive ? "(Opened)" : "(Collapsed)"}</div>
                <div className={`collapse-${isOpenInactive ? "show" : "hide"} inactive-users`}>
                    {
                        inactiveUsers.map((val, id) => (
                            <div key={id} className={"inactiveUserItem"}>{val.username} <i
                                className="fas fa-circle offline"/></div>
                        ))
                    }
                </div>
            </div>
            <div className={"messages-workspace"}>
                <div className={"contact"}>
                    <h2>{receiver}</h2>
                </div>
                <div className={"messages"}>
                    <ul>
                        {
                            messages.map((value, id) => (
                                <li key={id}
                                    className={value.sender === props.currentUser.username ? "me" : "him"}>{value.content}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className={"new-message"}>
                    <div>
                        <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)}
                               onKeyPress={handleKeyPress}/>
                        <i className={"icon fas fa-paper-plane"} onClick={handleClick}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const sendMessageToReceiver = async (message, setMessages, blockedReceivers, setBlockedReceivers, currentUser, receiver, content) => {

    const body = JSON.stringify({
        content: content,
        sender: currentUser.username,
        receiver: receiver,
    })
    try {
        const bearer = 'Bearer ' + currentUser.token;
        let response = await fetch(`${config.root_url}/chat/messages/send`, {
            method: 'POST',
            mode: "cors",
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json'
            },
            body: body
        })
        if (response.status === 200) {
            const data = await response.json();
            if (data && data.status === 200) {
                setMessages(oldArray => [...oldArray, data.data]);
                await fetchReceiverMessages(setMessages, blockedReceivers, setBlockedReceivers, currentUser, receiver)
            } else if (data && data.status === 503) {
                window.alert("ALERT! Potential attack, please relog in again.")
                setBlockedReceivers([...blockedReceivers, receiver])
            } else if (data && data.status === 401) {
                window.alert(data.message)
            } else {
                window.alert("Error.")
            }
        } else {
            window.alert("Error.")
        }
    } catch (e) {
        window.alert("Error")
    }
}

const fetchReceiverMessages = async (setMessages, blockedReceivers, setBlockedReceivers, currentUser, receiver) => {

    try {
        const bearer = 'Bearer ' + currentUser.token;
        let response = await fetch(`${config.root_url}/chat/messages`, {
            method: 'POST',
            mode: "cors",
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(receiver)
        })
        if (response.status === 200) {
            const data = await response.json();
            if (data && data.status === 200) {
                setMessages(data.data)
            } else if (data && data.status === 503) {
                setMessages(data.data)
                if (!blockedReceivers.includes(receiver))
                    setBlockedReceivers([...blockedReceivers, receiver])
                window.alert("ALERT! Potential attack, please relog in again.")
            } else if (data && data.status === 401) {
                window.alert(data.message)
            } else {
                window.alert("Error.")
            }
        } else {
            window.alert("Error.")
        }
    } catch (e) {
        window.alert("Error")
    }
}

const fetchActiveUsers = async (history, setUsers, type, currentUser) => {
    try {
        const bearer = 'Bearer ' + currentUser.token;
        let response = await fetch(`${config.root_url}/chat/${type}`, {
            mode: "cors",
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Authorization': bearer,
                'content-type': 'application/json'
            }
        })
        if (response.status === 200) {
            let data = await response.json();
            if (data.status && data.status === 200) {
                let users = data.data.filter(elem => elem.username !== currentUser.username);
                setUsers(users)
            } else if (data.status && data.status === 401) {
                window.alert(data.message)
                history.push("/logout")
            }
        } else {
            window.alert("Error.")
        }
    } catch (e) {
        history.push("/logout")
    }
}
