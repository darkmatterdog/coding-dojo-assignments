import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

const Search = () => {

    const navigate = useNavigate();
    const [resource, setResource] = useState("people");
    const [ID, setID] = useState(1);

    const searchFor = (e) => {
        e.preventDefault();
        navigate("/"+resource+"/"+ID)
    }

        return (
            <form onSubmit={searchFor}>
                <label htmlFor="resource">Search for:</label>
                <select name="resource" onChange={(e) => setResource(e.target.value)}>
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                </select>

                <label htmlFor="id">Resource ID:</label>
                <input type="number" name="id" min={1} defaultValue={1} onChange={(e) => setID(e.target.value)}/>

                <input type="submit" value="Search"/>
            </form>
  )
}

export default Search