import React from 'react'
import { Link } from 'react-router-dom'
import '../LoginAlert/LoginAlert.css'

const NotFound = () => {
  return (
    <div>
      <h1>Oops Page not Found! :(</h1>
      <Link to="/">
        <a>Back to Home</a>
      </Link>
    </div>
  )
}

export default NotFound