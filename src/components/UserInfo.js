import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/macro'


import logo from '../logo.svg'
import {CLIENT_ID, REDIRECT_URI} from '../clientinfo'
import { fetchUserData } from '../actions/userActions'

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

  const Image = styled.img`
    border-radius: 50%;
    height: 200px;
    width: 200px;
    margin-top: 24px;
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

  const LoginButton = styled.button`
  margin: 16px;
  text-decoration: none;
  color: #495264;
  background: #dddddd;
  border-radius: 12px;
  width: 45%;
  padding: 4px;
  transition: 700ms;
  :hover {
    background: #ffffff;
    -webkit-box-shadow: 0px 9px 15px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 9px 15px 1px rgba(0,0,0,0.75);
    box-shadow: 0px 9px 15px 1px rgba(0,0,0,0.75);
  }
  `



export default connect( mapStateToProps, { fetchUserData })( class UserInfo extends Component {
  

  mapDispatchToProps = () => {
    return {
      fetchUserData
    }
  }

  componentWillMount = () => {
    this.props.fetchUserData();
    
  }
  
  handleClick = async (e) => {
    window.open(`https://id.twitch.tv/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=channel:read:subscriptions`, 'window')
    
  } 

  


  render(){
    console.log(this.props);

    return <Div>
      <Image src={this.props.user.profileImage ? this.props.user.profileImage : logo} className="profile-image" alt="profile"/>
    {this.props.userId ?  
      (<Name>{this.props.user.displayName}</Name>) 
      : (<LoginButton onClick={ () => this.handleClick()}>Log In</LoginButton>)}
    </Div>;
  }
})
