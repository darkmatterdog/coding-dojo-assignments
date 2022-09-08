import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
        <h4>Welcome!</h4>
        <Link to={"/hello"}>Hello</Link>
    </div>
  )
}

export default Home