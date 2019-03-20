import React from 'react'
import styled from 'styled-components/macro'

import logo from './logo.svg'
import {CLIENT_ID, REDIRECT_URI} from './clientinfo'


export default function UserInfo(props) {
  const Image = styled.img`
    border-radius: 50%;
    height: 200px;
    width: 200px;
    margin-top: 24px;
  `
  const Anchor = styled.a`
    text-decoration: none;
    color: white;
    
  `
  const Div = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #495264;
    width: 300px;
    align-items: center;
    justify-items: center;
    border-radius: 8px;
    -webkit-box-shadow: 0px 9px 23px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 9px 23px 1px rgba(0,0,0,0.75);
    box-shadow: 0px 9px 23px 1px rgba(0,0,0,0.75);
  `

  const Name = styled.h2`
    margin: 16px 0px;
  `
  return (
    <Div>
      <Image src={props.profileImage ? props.profileImage : logo} className="profile-image" alt="profile"/>
    {props.userId ?  
      (<Name>{props.displayName}</Name>) 
      : (<Anchor href={`https://id.twitch.tv/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=channel:read:subscriptions`}>Log In</Anchor>)}
    </Div>
  )
}
