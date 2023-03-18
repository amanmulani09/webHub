import React from 'react'
import { useAuth } from '../context/authContext'

const Authentication = () => {
    const {user} = useAuth();
    console.log(auth)
  return (
    <div>

    </div>
  )
}

export default Authentication