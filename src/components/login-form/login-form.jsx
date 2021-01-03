import React, {useEffect, useState} from 'react'
import {Button, Form, FormGroup, Label, Input, NavLink} from 'reactstrap';
import {useForm} from 'react-hook-form'
import config from '../../config.json'
import './login-form.css'
import { useHistory  } from 'react-router-dom';

export const LoginForm = props => {
    const {register, handleSubmit, setValue} = useForm();
    const [errorMessage, setErrorMessage] = useState("");
    const history = useHistory();

    const onSubmit = async data => {
        try {
            let response = await fetch(`${config.root_url}/user/login`, {
                mode: "cors",
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
            if (response.status === 200) {
                const message = await response.json();
                props.setCurrentUser(message.username)
                props.setToken(message.token)
                history.push("/users")
            } else {
                const message = await response.json();
                setErrorMessage(message.message)
            }
        } catch (e) {
            setErrorMessage(e.message)
        }

    }
    const handleChange = (event, name) => {
        setValue(name, event.target.value);
    };
    useEffect(() => {
        register({name: "Username"});
        register({name: "Password"});
    }, [register]);

    let handleClickToRegister = e => {
        history.push('/register');
    };
    return (<div className={"login-main"}>
            <h1>Login</h1>
            <hr/>
            <div className={'login-container'}>
                <Form method='POST' onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup>
                        <Label for="username">Username: </Label>
                        <Input onChange={e => handleChange(e, 'Username')} ref={register({required: true})}
                               type="username"
                               name="username" id="username" placeholder="Enter username" value={props.username}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password: </Label>
                        <Input onChange={e => handleChange(e, 'Password')} ref={register({required: true})}
                               type="password"
                               name="password" id="password" placeholder="Enter password"/>
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
