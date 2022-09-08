import React, { useState } from 'react'


const BoxForm = (props) => {
    const [color, setColor] = useState("");

    const addBox = (e) => {
        e.preventDefault();
        props.onNewBox(color)
    }


  return (
    <div>
        <form onSubmit={addBox}>
            <label htmlFor="color">Color:</label>
            <input 
            type="text" 
            name="color" 
            value={color} 
            onChange={(e) => setColor(e.target.value)}/>
            <input type="submit" value="Add"/>
        </form>
    </div>
  )
}

export default BoxForm