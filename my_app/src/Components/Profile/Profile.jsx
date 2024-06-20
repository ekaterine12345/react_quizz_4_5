import React from 'react'
import {useParams} from 'react-router-dom'
import './Profile.css'

function Profile() {
  let {user} = useParams();
  return (
    <div className="profile-container">
    {user ? (
      <p className='my-p-text'>Made by {user}</p>
    ): (
      <p className='my-p-text profile-general'>General Profile Page</p>
    )}
  </div>
  )
}

export default Profile;