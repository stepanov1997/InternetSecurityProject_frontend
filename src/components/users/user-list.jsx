import React, {useState, useEffect} from 'react'
import {User} from '../user/user.jsx'
import config from '../../config.json'


export const UserList = props => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            const bearer = 'Bearer ' + sessionStorage.getItem("token");
            const response = await fetch(`${config.root_url}/user`, {
                mode: 'cors',
                withCredentials: true,
                credentials: 'include',
                headers: {
                    'Authorization': bearer
                }
            })
            const data = await response.json()
            if (data.message) {
                setUsers([])
            } else {
                setUsers(data)
            }
        }
        if (!sessionStorage.getItem("token"))
            return;
        fetchUsers()
    }, [])

    if (sessionStorage.getItem("token")) {
        return (
            <div>
                {users.length === 0 ?
                    <h1>There is not users</h1> :
                    users.map((user, userId) => (
                        <User key={userId} user={user}/>
                    ))}
            </div>
        )
    } else {
        return (
            <div>
                <h1>Invalid token. Please log in.</h1>
            </div>
        )
    }

}
