import React from 'react'
import { Link } from 'react-router-dom';


function Dashboard() {
  return (
    <div>

    <Link to ='Sign-up'>Signup</Link>
    <br></br><br></br>
    <Link to ='Sign-in'>Sign-in</Link>
    </div>
  )
}

export default Dashboard