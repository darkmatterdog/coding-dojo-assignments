import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

function Results(props) {
    const [result, setResult] = useState("")
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState(false)

    const {resource, ID} = useParams();
    useEffect(() => {
        setIsLoaded(false)
        setError(false)
        axios.get("https://swapi.dev/api/"+resource+"/"+ID)
        .then(response => {
            console.log(response.data);
            setResult(response.data);
        })
        .then(response => {
            setIsLoaded(true)
        })
        .catch(err => {
            console.log(err)
            setError(true)
            setIsLoaded(true)})
    }, [ID])
        
    
    return (<div>
            { isLoaded
                ? error
                    ? <p>an error occurred. please check your syntax and try again.</p>
                    : <div>{Object.keys(result).map((key, i) =>{
                        return(<p key={i}>{key}: {result[key]}</p>)})}</div>
                : <p>loading...</p>
            }
        </div>)
}

export default Results