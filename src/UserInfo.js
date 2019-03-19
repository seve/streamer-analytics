import React from 'react'
import logo from './logo.svg'

const CLIENT_ID='lk9hyx24834i7j25guphvmkwvgp86s'
const REDIRECT_URI='http://27dd729e.ngrok.io'

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
