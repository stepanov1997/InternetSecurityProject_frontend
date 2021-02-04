import React, {useState, useEffect} from 'react'
import config from "../../config.json";
import {Certificate} from "../certificate/certificate";
import './certificate-store.css'
import {useHistory} from "react-router-dom";

export const CertificateStore = props => {
    const [certificates, setCertificates] = useState([])

    const history = useHistory()

    useEffect(() => {
        fetchCertificatesInfo(history, props.currentUser, setCertificates)
    }, [certificates, props.currentUser, history])
    return (
        <div>
            <div className={"title"}>
                <h2>User certificates:</h2>
            </div>
            <div className={"certificates"}>
                {certificates.map(((value, index) => (
                    <Certificate key={index} data={value}/>
                )))}
            </div>
        </div>
    )
}

const fetchCertificatesInfo = async (history, currentUser, setCertificates) => {

    try {
        const bearer = 'Bearer ' + currentUser.token;
        let response = await fetch(`${config.root_url}/certificate`, {
            method: 'GET',
            mode: "cors",
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json'
            }
        })
        if (response.status === 200) {
            const data = await response.json();
            if (data && data.status === 200) {
                setCertificates(data.data)
            } else {
                window.alert("Error.")
            }
        } else {
            window.alert("Error.")
        }
    } catch (e) {
        history.push("/logout")
    }
}
