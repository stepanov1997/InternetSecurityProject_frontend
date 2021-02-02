import React, {useState} from 'react'
import {Button, Form, FormGroup, Label, Input, NavLink} from 'reactstrap';
import config from '../../config.json'
import './login-form.css'
import {useHistory} from 'react-router-dom';

export const LoginForm = props => {
    const [form, setForm] = useState({})
    const [errorMessage, setErrorMessage] = useState("");
    const history = useHistory();

    const onSubmit = async e => {
        e.preventDefault()
        var data = new FormData();
        for (const [key, value] of Object.entries(form)) {
            console.log(key,value)
            data.append(key, value)
        }
        try {
            let response = await fetch(`${config.root_url}/user/login_part_one`, {
                mode: "cors",
                method: "POST",
                // headers: {
                //     "content-type": "application/json"
                // },
                body: data
            })
            if (response.status === 200) {

                let repeatToken = true
                while (repeatToken) {

                    const token = prompt("Token is sent on your email.\nPlease enter.", "");

                    if(token==null) continue;
                    let response = await fetch(`${config.root_url}/user/login_part_two`, {
                        mode: "cors",
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify({token: token})
                    })
                    if (response.status === 200) {
                        const message = await response.json();
                        props.setCurrentUser({username: message.username, token: message.token})
                        repeatToken = false;
                        history.push("/chat")

                    } else {
                        const message = await response.json();
                        repeatToken=window.confirm(message+"\nDo you want to enter token again?")
                    }
                }

            } else {
                const message = await response.json();
                setErrorMessage(message.message)
            }
        } catch (e) {
            setErrorMessage(e.message)
        }

    }
    let handleClickToRegister = e => {
        history.push('/register');
    };
    let handleInputChange = (e) =>{
        let tmp = form
        if(e.target.id==="certificate")
            tmp[e.target.name] = e.target.files[0]
        else
            tmp[e.target.name] = e.target.value
        setForm(tmp)
    };
    return (<div className={"login-main"}>
            <h1>Login</h1>
            <hr/>
            <div className={'login-container'}>
                <Form encType={"multipart/form-data"} method='POST' onSubmit={onSubmit} >
                    <FormGroup>
                        <Label for="username">Username: </Label>
                        <Input type="username" onChange={handleInputChange}
                               name="username" id="username" placeholder="Enter username" value={props.username}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password: </Label>
                        <Input type="password" onChange={handleInputChange}
                               name="password" id="password" placeholder="Enter password"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="certificate">Client certificate: </Label>
                        <Input type="file" onChange={handleInputChange}
                               name="certificate" id="certificate" placeholder="Enter certificate"/>
                    </FormGroup>
                    <FormGroup>
                        <Button type={'submit'}>login user</Button>
                    </FormGroup>
                    {props.username ? (<FormGroup>
                            <Label className="label" style={{color: "green"}}>{props.username}</Label>
                        </FormGroup>) :
                        (<FormGroup>
                            <Label className="label">{errorMessage}</Label>
                        </FormGroup>)}

                    {props.logout ? <FormGroup>
                        <Label className="label" style={{color: "green"}}>{"You successfully logged out"}</Label>
                    </FormGroup> : ""}
                    <FormGroup>
                        <NavLink className={"register-link"} onClick={handleClickToRegister}>Register</NavLink>
                    </FormGroup>
                </Form>
            </div>
        </div>

    )
}
