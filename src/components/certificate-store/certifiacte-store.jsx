import React from 'react'
import {Form, Input, Label} from "reactstrap";

export const CertificateStore = props => {
    return (
        <div>
            <Form>
                <Label for="exampleSelect">Select</Label>
                <Input type={"text"}/>

                <Label for="exampleSelect">Select</Label>
                <Input type={"text"}/>

                <Label for="exampleSelect">Select</Label>
                <Input type={"text"}/>

                <Label for="exampleSelect">Select</Label>
                <Input type={"text"}/>
                <Input type={"submit"}/>
            </Form>
        </div>
    )
}
