import React, { useState } from 'react'

const Box = (props) => {
    return(
        <div>
            <p style={{marginTop: "30px"}}>{props.boxes.map( (box, i) =>
                <span key={i} style={{backgroundColor: box, padding: "25px 35px", margin: "5px"}}></span>)}</p>

        </div>
    )
}

export default Box