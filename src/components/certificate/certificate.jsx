import React from 'react'

import './certificate.css'

export const Certificate = props => {
    return (
        <div className={"certificate"}>
            <div className={"username"}>
                {props.data.username}
            </div>
            <div className={"validFrom"}>
                {props.data.validFrom}
            </div>
            <div className={"validTo"}>
                {props.data.validTo}
            </div>
            {props.data.download ?
                (<div className={"download"}>
                    <a href={props.data.download}>Download</a>
                </div>) : ""
            }

        </div>

    )
}
