import React from 'react'
import logo from './logo.svg'
import {CLIENT_ID, REDIRECT_URI} from './clientinfo'


export default function UserInfo(props) {
  return (
    <div>
      <img style={profileImageStyle} src={props.profileImage ? props.profileImage : logo} className="profile-image" alt="profile"/>
    {props.id !== '' ?  
      (<h2>{props.displayName}</h2>) 
      : (<a href={`https://id.twitch.tv/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=channel:read:subscriptions`}>Log In</a>)}
    </div>
  )
}

const profileImageStyle = {
    borderRadius: '50%',
    height: '200px',
}
