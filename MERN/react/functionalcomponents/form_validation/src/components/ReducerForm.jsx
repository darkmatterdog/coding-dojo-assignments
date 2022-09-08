import React, { useReducer } from 'react'

const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
}

function reducer(state, action){
    return {
        ...state,
        [action.type]: action.payload
    }
}

export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e){
        const {name, value} = e.target;
        if(name == "firstName" && value.length < 1){
            state.firstName.error = "First name must not be blank"
        }
        dispatch({
            type: name,
            payload: value
        })
    }

  return (
    <div>
        <form>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" value={state.name} name="firstName" onChange={handleChange}/>
            {state.firstName.error !== null && ( <p className="error">{state.firstName.error}</p> )}

            <label htmlFor="lastName">Last Name:</label>
            <input type="text" value={state.name} name="lastName" onChange={handleChange}/>

            <label htmlFor="email">Email:</label>
            <input type="email" value={state.name} name="email" onChange={handleChange}/>

        </form>
    </div>
  )
}