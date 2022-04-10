import React from 'react'
import { Link } from 'react-router-dom'
import '../LoginAlert/LoginAlert.css'

const NotFound = () => {
  return (
    <div>
      <h1>Oops Page not Found! :(</h1>
      <Link to="/">
        <p>Back to Home</p>
      </Link>
    </div>
  )
}

export default NotFound