import React, {useState, useEffect} from 'react'
import './chat.css'
import './messages.css'
import '../../fonts/fontawesome-free-5.15.1-web/css/all.css';
import config from "../../config.json";
import {usePrevious} from "../previous-hook/previous-hook";
import {Redirect, useHistory} from "react-router-dom";

export const Chat = props => {
    const [activeUsers, setActiveUsers] = useState([])
    const [inactiveUsers, setInactiveUsers] = useState([])
    const [refresh, setRefresh] = useState(false)
    const [isOpenActive, setIsOpenActive] = useState(true);
    const [isOpenInactive, setIsOpenInactive] = useState(false);
    const [receiver, setReceiver] = useState(undefined)
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState("")

    const history = useHistory();

    let timer = setTimeout(() => {
        setRefresh(!refresh);
    }, 5_000)

    const prevState = usePrevious({
        activeUsers,
        inactiveUsers,
        refresh,
        isOpenActive,
        isOpenInactive,
        receiver,
        messages
    })
    const toggleActive = () => setIsOpenActive(!isOpenActive);
    const toggleInactive = () => setIsOpenInactive(!isOpenInactive);


    useEffect(() => {

        fetchActiveUsers(setActiveUsers, 'active', props.currentUser)
            .then(() => fetchActiveUsers(setInactiveUsers, 'inactive', props.currentUser))
            .then(() => {
                console.log("fetchReceiverMessages")
                if (receiver) fetchReceiverMessages(setMessages, props.currentUser, receiver)
            })

    }, [refresh, receiver])

    if (!props.currentUser) {
        return <Redirect to={{pathname: '/login', state: {from: props.location}}}/>;
    }

    function openChat(username) {

        console.log("setReceiver")
        setReceiver(username)
    }

    const handleKeyPress = async (event) => {
        if (event.key === 'Enter') {
            await sendMessageToReceiver(messages, setMessages, props.currentUser, receiver, newMessage)
            setNewMessage("");
        }
    }

    const handleClick = async () => {
        await sendMessageToReceiver(messages, setMessages, props.currentUser, receiver, newMessage)
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
                                 className={"activeUserItem"}>{val.username} <i className="fas fa-circle online"/></div>
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
                        <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} onKeyPress={handleKeyPress} />
                        <i className={"icon fas fa-paper-plane"} onClick={handleClick}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const sendMessageToReceiver = async (message, setMessages, currentUser, receiver, content) => {

    try {
        const bearer = 'Bearer ' + currentUser.token;
        console.log(currentUser.token)
        let response = await fetch(`${config.root_url}/chat/messages/send`, {
            method: 'POST',
            mode: "cors",
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: content,
                sender: currentUser.username,
                receiver: receiver,
            })
        })
        if (response.status === 200) {
            const currentMessage = await response.json();
            setMessages(oldArray => [...oldArray, currentMessage]);
            await fetchReceiverMessages(setMessages, currentUser, receiver)
        }
    } catch (e) {
        console.log(e)
    }
}

const fetchReceiverMessages = async (setMessages, currentUser, receiver) => {

    try {
        const bearer = 'Bearer ' + currentUser.token;
        console.log(currentUser.token)
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
            const message = await response.json();
            setMessages(message)
        }
    } catch (e) {
        console.log(e)
    }
}

const fetchActiveUsers = async (setUsers, type, currentUser) => {
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
            let users = await response.json();
            users = users.filter(elem => elem.username !== currentUser.username);
            setUsers(users)
        }
    } catch (e) {
    }
}
