import React from 'react'
import { useParams } from "react-router";

function Hello(props) {
    const {input, textcolor, bgcolor} = useParams();
    return (
    <div><p style={{backgroundColor: bgcolor, color: textcolor}}>
        {(isNaN(+input)
        ? <p style={{backgroundColor: bgcolor, color: textcolor}}>Word is: {input}</p>
        : <p>Number is: {input}</p>
        )}
        </p></div>
    )
}

export default Hello