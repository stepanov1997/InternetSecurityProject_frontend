import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom';

export const Logout = props => {
    const history = useHistory();
    useEffect(() => {
        props.setToken("");
        props.setCurrentUser("");
        history.push('/login');
    }, [])

    return (<></>);
}
